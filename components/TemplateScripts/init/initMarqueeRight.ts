// src/components/TemplateScripts/init/initMarqueeRight.ts
import { gsap, ScrollTrigger } from "@/helpers/gsap";

export async function initMarqueeRight() {
  const marquees = Array.from(document.querySelectorAll<HTMLElement>(".marquee-right--gsap"));
  if (!marquees.length) return () => {};

  const triggers: any[] = [];
  const timelines: gsap.core.Timeline[] = [];

  const marqueeRight = (el: HTMLElement, duration = 30, xTo = "+=50%") => {
    const wrap = gsap.utils.wrap(0, 50);
    return gsap.to(el, {
      duration,
      ease: "none",
      x: xTo,
      modifiers: {
        x: (x) => (xTo = wrap(parseFloat(x)) + "%"),
      },
      repeat: -1,
    });
  };

  marquees.forEach((root) => {
    const track = root.querySelector<HTMLElement>(".marquee__toright");
    if (!track) return;

    // ✅ prevent double init (StrictMode / re-mounts)
    if (track.dataset.marqueeInit === "1") return;
    track.dataset.marqueeInit = "1";

    // ✅ store original html so we can restore on cleanup
    track.dataset.originalHtml = track.innerHTML;

    // duplicate once
    track.innerHTML += track.innerHTML;

    const tl = gsap.timeline().add(marqueeRight(track, 30, "+=50%"), 0);
    timelines.push(tl);

    const smoothing = gsap.to(tl, { duration: 1.5, timeScale: 1, paused: true });
    const clamp = gsap.utils.clamp(1, 6);

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        tl.timeScale(clamp(Math.abs(self.getVelocity() / 200)));
        smoothing.invalidate().restart();
      },
    });

    triggers.push(st);
  });

  return () => {
    triggers.forEach((t) => t.kill());
    timelines.forEach((t) => t.kill());

    // ✅ restore DOM so re-init works cleanly
    marquees.forEach((root) => {
      const track = root.querySelector<HTMLElement>(".marquee__toright");
      if (!track) return;

      const original = track.dataset.originalHtml;
      if (original != null) track.innerHTML = original;

      delete track.dataset.marqueeInit;
      delete track.dataset.originalHtml;
    });
  };
}