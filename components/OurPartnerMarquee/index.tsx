/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/helpers/gsap";

function PartnerMarqueeImages() {
  useEffect(() => {
    const partner_wrappers = Array.from(
      document.querySelectorAll<HTMLElement>(".partners-marquee"),
    );
    if (!partner_wrappers.length) return;

    const partner_triggers: ScrollTrigger[] = [];
    const partner_timelines: gsap.core.Timeline[] = [];

    const partner_marquee = (el: HTMLElement, duration: number, xTo: string) => {
      const partner_wrap = gsap.utils.wrap(0, 50);
      return gsap.to(el, {
        duration,
        ease: "none",
        x: xTo,
        modifiers: {
          x: (x) => (xTo = partner_wrap(parseFloat(x)) + "%"),
        },
        repeat: -1,
      });
    };

    partner_wrappers.forEach((partner_wrap) => {
      const partner_top = partner_wrap.querySelector<HTMLElement>(".partners-marquee .marquee__top");
      const partner_bottom = partner_wrap.querySelector<HTMLElement>(".partners-marquee .marquee__bottom");
      if (!partner_top || !partner_bottom) return;

      // ✅ guard (StrictMode / re-init)
      if (partner_top.dataset.marqueeInit === "1" || partner_bottom.dataset.marqueeInit === "1")
        return;
      partner_top.dataset.marqueeInit = "1";
      partner_bottom.dataset.marqueeInit = "1";

      // ✅ store original html (so cleanup restore)
      partner_top.dataset.originalHtml = partner_top.innerHTML;
      partner_bottom.dataset.originalHtml = partner_bottom.innerHTML;

      // duplicate once
      partner_top.innerHTML += partner_top.innerHTML;
      partner_bottom.innerHTML += partner_bottom.innerHTML;

      const tl = gsap
        .timeline()
        .add(partner_marquee(partner_top, 30, "-=50%"), 0)
        .add(partner_marquee(partner_bottom, 30, "+=50%"), 0);

      partner_timelines.push(tl);

      const partner_smoothing = gsap.to(tl, {
        duration: 1.5,
        timeScale: 1,
        paused: true,
      });
      const partner_clamp = gsap.utils.clamp(1, 6);

      const partner_st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          tl.timeScale(partner_clamp(Math.abs(self.getVelocity() / 200)));
          partner_smoothing.invalidate().restart();
        },
      });

      partner_triggers.push(partner_st);
    });

    return () => {
      partner_triggers.forEach((t) => t.kill());
      partner_timelines.forEach((t) => t.kill());

      // restore HTML so it can init again safely
      partner_wrappers.forEach((partner_wrap) => {
        const partner_top = partner_wrap.querySelector<HTMLElement>(".marquee__top");
        const partner_bottom = partner_wrap.querySelector<HTMLElement>(".marquee__bottom");

        if (partner_top?.dataset.originalHtml != null)
          partner_top.innerHTML = partner_top.dataset.originalHtml;
        if (partner_bottom?.dataset.originalHtml != null)
          partner_bottom.innerHTML = partner_bottom.dataset.originalHtml;

        if (partner_top) {
          delete partner_top.dataset.marqueeInit;
          delete partner_top.dataset.originalHtml;
        }
        if (partner_bottom) {
          delete partner_bottom.dataset.marqueeInit;
          delete partner_bottom.dataset.originalHtml;
        }
      });
    };
  }, []);

  return (
    <>
      <div className="marquee marquee--gsap partners-marquee">
        {/* <!-- top line --> */}
        <div className="marquee__top">
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_48_Victoria-2.png"
                alt="Image"
              />
            </a>
          </div>
         
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_49_Rich-2.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_50_Group-1686568723-2.png"
                alt="Image"
              />
            </a>
          </div>
         
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_51_Andy-2.png"
                alt="Image"
              />
            </a>
          </div>
         
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_52_Ryan-2.png"
                alt="Image"
              />
            </a>
          </div>
         
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_53_Kayode.png"
                alt="Image"
              />
            </a>
          </div>
         
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_54_Group-1686568722.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_67_Group-1686568727.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_68_Amari-1-1.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_69_Thomas-2.png"
                alt="Image"
              />
            </a>
          </div>
        </div>
        {/* <!-- bottom line --> */}
        <div className="marquee__bottom">
          
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_55_Amari-2.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_56_Group-1686568721.png"
                alt="Image"
              />
            </a>
          </div>
          
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_57_Group-1686568712-1.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_58_Group-1686568716.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_59_Group-1686568714-1.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_60_Group-16865687171.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_61_Group-1686568718-1.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_62_Group-1686568719-1.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_63_Group-1686568720-1.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_64_Alejandro-2.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_65_Group-1686568715.png"
                alt="Image"
              />
            </a>
          </div>
          {/* <!-- item --> */}
          <div className="marquee__item">
            <a className="marquee__link" href="project-details.html">
              <img
                src="/images/imgi_66_Group-1686568713-1.png"
                alt="Image"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerMarqueeImages;
