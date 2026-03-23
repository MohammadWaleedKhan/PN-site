/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/helpers/gsap";

function AwardsList() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".hover-reveal__item"),
    );

    if (!items.length) return;

    const handlers: Array<() => void> = [];

    items.forEach((item) => {
      const content = item.querySelector<HTMLElement>(".hover-reveal__content");
      const image = item.querySelector<HTMLElement>(".hover-reveal__image");
      if (!content || !image) return;

      const onMove = (e: MouseEvent) => {
        content.style.opacity = "1";
        content.style.transform = "translate(-80%, -50%)";
        image.style.transform = "scale(1, 1)";
        content.style.left = e.clientX + "px";
      };

      const onLeave = () => {
        content.style.opacity = "0";
        content.style.transform = "translate(-80%, -50%)";
        image.style.transform = "scale(1, 1.4)";
      };

      item.addEventListener("mousemove", onMove);
      item.addEventListener("mouseleave", onLeave);

      handlers.push(() => {
        item.removeEventListener("mousemove", onMove);
        item.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      handlers.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <div className="mxd-awards-list hover-reveal">
        {/* <!-- item --> */}
        <a
          className="mxd-awards-list__item hover-reveal__item"
          href="https://medium.com/"
          target="_blank"
        >
          <div className="mxd-awards-list__border anim-uni-in-up"></div>
          <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
            <img
              className="hover-reveal__image"
              src="/images/works/preview/600x600_prv-01.webp"
              alt="Project Preview"
            />
          </div>
          <div className="mxd-awards-list__inner">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__title anim-uni-in-up">
                    <div className="mxd-awards-list__icon">
                      <i className="ph ph-arrow-right"></i>
                    </div>
                    <p>Some article on Medium</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__tagslist">
                    <ul>
                      <li className="anim-uni-in-up">
                        <p className="t-small">UI/UX design</p>
                      </li>
                      <li className="anim-uni-in-up">
                        <p className="t-small">Development</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__date anim-uni-in-up">
                    <p className="t-small">2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-awards-list__border anim-uni-in-up"></div>
        </a>
        {/* <!-- item --> */}
        <a
          className="mxd-awards-list__item hover-reveal__item"
          href="https://www.awwwards.com/"
          target="_blank"
        >
          <div className="mxd-awards-list__border anim-uni-in-up"></div>
          <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
            <img
              className="hover-reveal__image"
              src="/images/works/preview/600x600_prv-02.webp"
              alt="Project Preview"
            />
          </div>
          <div className="mxd-awards-list__inner">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__title anim-uni-in-up">
                    <div className="mxd-awards-list__icon">
                      <i className="ph ph-arrow-right"></i>
                    </div>
                    <p>Awwwards nomination</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__tagslist">
                    <ul>
                      <li className="anim-uni-in-up">
                        <p className="t-small">UI/UX</p>
                      </li>
                      <li className="anim-uni-in-up">
                        <p className="t-small">Frontend</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__date anim-uni-in-up">
                    <p className="t-small">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-awards-list__border anim-uni-in-up"></div>
        </a>
        {/* <!-- item --> */}
        <a
          className="mxd-awards-list__item hover-reveal__item"
          href="https://www.behance.net/"
          target="_blank"
        >
          <div className="mxd-awards-list__border anim-uni-in-up"></div>
          <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
            <img
              className="hover-reveal__image"
              src="/images/works/preview/600x600_prv-03.webp"
              alt="Project Preview"
            />
          </div>
          <div className="mxd-awards-list__inner">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__title anim-uni-in-up">
                    <div className="mxd-awards-list__icon">
                      <i className="ph ph-arrow-right"></i>
                    </div>
                    <p>Behance curated work</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__tagslist">
                    <ul>
                      <li className="anim-uni-in-up">
                        <p className="t-small">Illustrations</p>
                      </li>
                      <li className="anim-uni-in-up">
                        <p className="t-small">Graphic design</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__date anim-uni-in-up">
                    <p className="t-small">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-awards-list__border anim-uni-in-up"></div>
        </a>
        {/* <!-- item --> */}
        <a
          className="mxd-awards-list__item hover-reveal__item"
          href="https://medium.com/"
          target="_blank"
        >
          <div className="mxd-awards-list__border anim-uni-in-up"></div>
          <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
            <img
              className="hover-reveal__image"
              src="/images/works/preview/600x600_prv-04.webp"
              alt="Project Preview"
            />
          </div>
          <div className="mxd-awards-list__inner">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__title anim-uni-in-up">
                    <div className="mxd-awards-list__icon">
                      <i className="ph ph-arrow-right"></i>
                    </div>
                    <p>Article on Medium</p>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__tagslist">
                    <ul>
                      <li className="anim-uni-in-up">
                        <p className="t-small">UI/UX</p>
                      </li>
                      <li className="anim-uni-in-up">
                        <p className="t-small">Frontend</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-awards-list__date anim-uni-in-up">
                    <p className="t-small">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-awards-list__border anim-uni-in-up"></div>
        </a>
      </div>
    </>
  );
}

export default AwardsList;
