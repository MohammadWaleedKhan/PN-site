import type { CleanupFn } from "../utils/types";

export async function initLoader(): Promise<CleanupFn> {
  const { gsap } = await import("gsap");
  const imagesLoaded = (await import("imagesloaded")).default;

  const content = document.querySelector("body");
  const loadingWrap = document.querySelector<HTMLElement>(".loading-wrap");
  const loadingItems = loadingWrap?.querySelectorAll<HTMLElement>(".loading__item") ?? [];
  const fadeInItems = document.querySelectorAll<HTMLElement>(".loading__fade");

  let timeoutId: number | null = null;

  function startLoader() {
    const countText = document.querySelector<HTMLElement>(".loader__count .count__text");
    if (!countText) return;

    let t = 0;
    const tick = () => {
      if (t < 100) {
        const r = Math.floor(10 * Math.random()) + 1;
        t = Math.min(t + r, 100);
        countText.textContent = String(t);

        const delay = Math.floor(120 * Math.random()) + 25;
        window.setTimeout(tick, delay);
      }
    };
    tick();
  }

  function hideLoader() {
    gsap.to(".loader__count", { duration: 0.8, ease: "power2.in", y: "100%", delay: 1.8 });
    gsap.to(".loader__wrapper", { duration: 0.8, ease: "power4.in", y: "-100%", delay: 2.2 });

    timeoutId = window.setTimeout(() => {
      document.getElementById("loader")?.classList.add("loaded");
    }, 3200);
  }

  function pageAppearance() {
    gsap.set(loadingItems, { opacity: 0 });
    gsap.to(loadingItems, {
      duration: 1.1,
      ease: "power4",
      startAt: { y: 120 },
      y: 0,
      opacity: 1,
      delay: 2.8,
      stagger: 0.08,
    });

    gsap.set(fadeInItems, { opacity: 0 });
    gsap.to(fadeInItems, { duration: 0.8, ease: "none", opacity: 1, delay: 3.2 });
  }

  startLoader();

  if (!content) {
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }

  const imgLoad = imagesLoaded(content);
  const doneHandler = () => {
    hideLoader();
    pageAppearance();
  };

  imgLoad.on("done", doneHandler);

  return () => {
    imgLoad.off("done", doneHandler);
    if (timeoutId) window.clearTimeout(timeoutId);
  };
}