/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/helpers/gsap";

function MarqueeImages() {
  useEffect(() => {
    const wrappers = Array.from(
      document.querySelectorAll<HTMLElement>(".marquee--gsap"),
    );
    if (!wrappers.length) return;

    const triggers: ScrollTrigger[] = [];
    const timelines: gsap.core.Timeline[] = [];

    const marquee = (el: HTMLElement, duration: number, xTo: string) => {
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

    wrappers.forEach((wrap) => {
      const top = wrap.querySelector<HTMLElement>(".marquee__top");
      const bottom = wrap.querySelector<HTMLElement>(".marquee__bottom");
      if (!top || !bottom) return;

      // ✅ guard (StrictMode / re-init)
      if (top.dataset.marqueeInit === "1" || bottom.dataset.marqueeInit === "1")
        return;
      top.dataset.marqueeInit = "1";
      bottom.dataset.marqueeInit = "1";

      // ✅ store original html (so cleanup restore)
      top.dataset.originalHtml = top.innerHTML;
      bottom.dataset.originalHtml = bottom.innerHTML;

      // duplicate once
      top.innerHTML += top.innerHTML;
      bottom.innerHTML += bottom.innerHTML;

      const tl = gsap
        .timeline()
        .add(marquee(top, 30, "-=50%"), 0)
        .add(marquee(bottom, 30, "+=50%"), 0);

      timelines.push(tl);

      const smoothing = gsap.to(tl, {
        duration: 1.5,
        timeScale: 1,
        paused: true,
      });
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

      // restore HTML so it can init again safely
      wrappers.forEach((wrap) => {
        const top = wrap.querySelector<HTMLElement>(".marquee__top");
        const bottom = wrap.querySelector<HTMLElement>(".marquee__bottom");

        if (top?.dataset.originalHtml != null)
          top.innerHTML = top.dataset.originalHtml;
        if (bottom?.dataset.originalHtml != null)
          bottom.innerHTML = bottom.dataset.originalHtml;

        if (top) {
          delete top.dataset.marqueeInit;
          delete top.dataset.originalHtml;
        }
        if (bottom) {
          delete bottom.dataset.marqueeInit;
          delete bottom.dataset.originalHtml;
        }
      });
    };
  }, []);

  return (
    <>
      <div className="marquee marquee--gsap">
        {/* <!-- top line --> */}
        <div className="marquee__top">
          {/* <!-- item --> */}
          <div className="marquee__item image">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/marquee/1200x1000_marquee-01.webp"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item has-caption padding-4">
            <p>
              Inspiring
              <br />
              ideas
            </p>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/marquee/1200x1000_marquee-02.webp"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/marquee/1200x1000_marquee-03.webp"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item has-caption padding-4">
            <p>
              Creative
              <br />
              minds
            </p>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/marquee/1200x1000_marquee-04.webp"
                alt="Image"
              />
            </a>
          </div>
        </div>
        {/* <!-- bottom line --> */}
        <div className="marquee__bottom">
          {/* <!-- item --> */}
          <div className="marquee__item has-caption padding-4">
            <p>
              Inspiring
              <br />
              ideas
            </p>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/marquee/1200x1000_marquee-05.webp"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/marquee/1200x1000_marquee-06.webp"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item has-caption padding-4">
            <p>
              Creative
              <br />
              minds
            </p>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/marquee/1200x1000_marquee-07.webp"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/marquee/1200x1000_marquee-08.webp"
                alt="Image"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarqueeImages;
