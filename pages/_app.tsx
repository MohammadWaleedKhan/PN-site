import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/icomoon/style.css";
// import "@/styles/globals.scss";
import "@/styles/css/loaders/loader.min.css";
import "@/styles/css/plugins.min.css";
import "@/styles/css/main.min.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { gsap, SplitText, ScrollTrigger, ScrollToPlugin } from "@/helpers/gsap";
import React, { useEffect, useRef, useState } from "react";
import { initMarqueeRight } from "@/components/TemplateScripts/init/initMarqueeRight";
import { initCounters } from "@/components/TemplateScripts/init/initCounters";
import SplitType from "split-type";
import type { CleanupFn } from "@/components/TemplateScripts/utils/types";
import { initGsapLenis } from "@/components/TemplateScripts/init/initGsapLenis";
import { initLoader } from "@/components/TemplateScripts/init/initLoader";
import { initTyped } from "@/components/TemplateScripts/init/initTyped";
import { initHeaderScroll } from "@/components/TemplateScripts/init/initHeaderScroll";
import { initSplitTypeReveal } from "@/components/TemplateScripts/init/initSplitTypeReveal";
import { initSvgInject } from "@/components/TemplateScripts/init/initSvgInject";
import { initUkiyo } from "@/components/TemplateScripts/init/initUkiyo";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let cleanups: CleanupFn[] = [];

    const run = async () => {
      // Core: GSAP + ScrollTrigger + Lenis
      const core = await initGsapLenis();

      cleanups.push(core.cleanup);

      // Loader (imagesLoaded)
      cleanups.push(await initLoader());

      // Typed.js
      cleanups.push(await initTyped());

      // Header scroll hide/show
      cleanups.push(initHeaderScroll());

      // SplitType reveals
      cleanups.push(await initSplitTypeReveal());

      // SVG injection
      cleanups.push(await initSvgInject());

      // Ukiyo parallax
      cleanups.push(await initUkiyo());

      // initMarqueeRight
      cleanups.push(await initMarqueeRight());

      // initCounters
      cleanups.push(await initCounters());

      // After everything
      core.ScrollTrigger.refresh();
    };

    run();

    return () => {
      cleanups.forEach((fn) => fn?.());
      cleanups = [];
    };
  }, []);

  // Button Animations
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".btn-anim .btn-caption",
    );

    elements.forEach((el) => {
      const text = el.innerText;

      el.innerHTML = "";

      const block = document.createElement("div");
      block.classList.add("btn-anim__block");

      for (const ch of text) {
        const span = document.createElement("span");
        span.innerText = ch.trim() === "" ? "\u00A0" : ch; // non-breaking space
        span.classList.add("btn-anim__letter");
        block.appendChild(span);
      }

      el.appendChild(block);
      el.appendChild(block.cloneNode(true));
    });

    const onMouseOver = (e: Event) => {
      (e.currentTarget as HTMLElement).classList.remove("play");
    };

    elements.forEach((el) => el.addEventListener("mouseover", onMouseOver));

    return () => {
      elements.forEach((el) =>
        el.removeEventListener("mouseover", onMouseOver),
      );
    };
  }, []);

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".stack-item"),
    );
    const stickySpace = document.querySelector<HTMLElement>(".stack-offset");
    const wrapper = document.querySelector<HTMLElement>(".stack-wrapper");

    if (!cards.length || !stickySpace || !wrapper) return;

    const animation = gsap.timeline();
    let cardHeight = 0;

    const initCards = () => {
      animation.clear();
      cardHeight = cards[0]?.offsetHeight ?? 0;

      cards.forEach((card, i) => {
        if (i > 0) {
          gsap.set(card, { y: i * cardHeight });
          animation.to(
            card,
            {
              y: 0,
              duration: 0.5 * i,
              ease: "none",
            },
            0,
          );
        }
      });
    };

    initCards();

    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      pin: true,
      scrub: true,
      animation,
      invalidateOnRefresh: true,
      end: () => `+=${cards.length * cardHeight + stickySpace.offsetHeight}`,
    });

    ScrollTrigger.addEventListener("refreshInit", initCards);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", initCards);
      st.kill();
      animation.kill();
    };
  }, []);

  useEffect(() => {
    const splits: SplitType[] = [];

    // 1) reveal-in-up (SplitType)
    document.querySelectorAll<HTMLElement>(".reveal-in-up").forEach((el) => {
      const split = new SplitType(el); // default is fine
      splits.push(split);

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
        transformOrigin: "top left",
        y: 10,
        stagger: 0.2,
        delay: 0.2,
        duration: 2,
      });
    });

    // 2) animate-rotation (no jQuery)
    document
      .querySelectorAll<HTMLElement>(".animate-rotation")
      .forEach((el) => {
        const val = el.dataset.value; // e.g. data-value="180"
        const rotateTo = val ? Number(val) : 0;

        gsap.fromTo(
          el,
          { ease: "sine", rotate: 0 },
          {
            rotate: rotateTo,
            scrollTrigger: {
              trigger: el,
              scrub: true,
              toggleActions: "play none none reverse",
            },
          },
        );
      });

    // 3) anim-uni-in-up
    document.querySelectorAll<HTMLElement>(".anim-uni-in-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, ease: "sine" },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // 4) anim-uni-scale-in
    document
      .querySelectorAll<HTMLElement>(".anim-uni-scale-in")
      .forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 1, y: 50, scale: 1.2, ease: "sine" },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: el,
              toggleActions: "play none none reverse",
            },
          },
        );
      });

    // 5) anim-uni-scale-in-right
    document
      .querySelectorAll<HTMLElement>(".anim-uni-scale-in-right")
      .forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 1, y: 50, x: -70, scale: 1.2, ease: "sine", duration: 5 },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: el,
              toggleActions: "play none none reverse",
            },
          },
        );
      });

    // 6) anim-uni-scale-in-left
    document
      .querySelectorAll<HTMLElement>(".anim-uni-scale-in-left")
      .forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 1, y: 50, x: 70, scale: 1.2, ease: "sine" },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: el,
              toggleActions: "play none none reverse",
            },
          },
        );
      });
  }, []);

  useEffect(() => {
    const docStyle = getComputedStyle(document.documentElement);
    const radiusL = docStyle.getPropertyValue("--_radius-l") || "24px";

    const zoomIn = Array.from(
      document.querySelectorAll<HTMLElement>(".anim-zoom-in-container"),
    );
    const zoomOut = Array.from(
      document.querySelectorAll<HTMLElement>(".anim-zoom-out-container"),
    );

    const timelines: gsap.core.Timeline[] = [];

    zoomIn.forEach((el) => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "top 14%",
            scrub: true, // ✅
          },
        })
        .fromTo(
          el,
          { borderRadius: "200px", transform: "scale3d(0.94, 1, 1)" },
          {
            borderRadius: radiusL.trim(),
            transform: "scale3d(1, 1, 1)",
            ease: "power4.inOut",
          }, // ✅ ease here
        );

      timelines.push(tl);
    });

    zoomOut.forEach((el) => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "top 14%",
            scrub: true, // ✅
          },
        })
        .fromTo(
          el,
          { borderRadius: "200px", transform: "scale3d(1.14, 1, 1)" },
          {
            borderRadius: radiusL.trim(),
            transform: "scale3d(1, 1, 1)",
            ease: "power4.inOut",
          }, // ✅
        );

      timelines.push(tl);
    });

    return () => {
      timelines.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    // 1) touch / no-touch
    const isTouchUA =
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    document.documentElement.classList.add(isTouchUA ? "touch" : "no-touch");

    // 2) smooth scroll for hash links
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      const link = target?.closest?.(
        'a[href*="#"]:not([href="#"]):not([href="#0"])',
      ) as HTMLAnchorElement | null;

      if (!link) return;

      // same page only
      const url = new URL(link.href);
      if (
        location.pathname.replace(/^\//, "") !==
          url.pathname.replace(/^\//, "") ||
        location.hostname !== url.hostname
      ) {
        return;
      }

      const hash = url.hash; // e.g. #section1
      if (!hash) return;

      const id = hash.slice(1);
      const el =
        document.getElementById(id) ||
        (document.querySelector(
          `[name="${CSS.escape(id)}"]`,
        ) as HTMLElement | null);

      if (!el) return;

      e.preventDefault();

      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // focus accessibility (same as jQuery code intent)
      window.setTimeout(() => {
        el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
      }, 400);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const setupBatch = (
      selector: string,
      batchMax: number,
      delaySeconds = 0,
    ) => {
      if (!document.querySelector(selector)) return;

      gsap.set(selector, { y: 50, opacity: 0 });

      const st = ScrollTrigger.batch(selector, {
        interval: 0.1,
        batchMax,

        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            ease: "sine",
            delay: delaySeconds, // ✅ delay moved here
            stagger: {
              each: 0.15,
              grid: [1, batchMax],
            },
            overwrite: true,
          }),

        onLeave: (batch) =>
          gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),

        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
          }),

        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
      });

      if (Array.isArray(st)) triggers.push(...st);
      else triggers.push(st);
    };

    setupBatch(".animate-card-2", 2);
    setupBatch(".animate-card-3", 3);
    setupBatch(".animate-card-4", 4, 1); // 1 second delay
    setupBatch(".animate-card-5", 5, 1); // 1 second delay

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    let destroyed = false;
    const triggerSelector = "#showreel-trigger";

    const init = () => {
      if (destroyed) return false;

      const $ = (window as any).jQuery || (window as any).$;
      if (!$) return false;
      if (!$.fn?.magnificPopup) return false;

      const $trigger = $(triggerSelector);
      if (!$trigger.length) return false;

      // avoid double init
      if ($trigger.data("mfp-initialized")) return true;
      $trigger.data("mfp-initialized", true);

      $trigger.magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
          beforeOpen: function () {
            $("body").addClass("overflow-hidden");
            // lenis?.stop?.(); // if you have lenis instance, call here
          },
          close: function () {
            $("body").removeClass("overflow-hidden");
            // lenis?.start?.(); // if you have lenis instance, call here
          },
        },
      });

      return true;
    };

    // try immediately + retry (trigger/scripts may load late)
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      const ok = init();
      if (ok || tries >= 30) window.clearInterval(timer);
    }, 150);

    return () => {
      destroyed = true;
      window.clearInterval(timer);

      const $ = (window as any).jQuery || (window as any).$;
      if ($) {
        const $trigger = $(triggerSelector);
        try {
          $trigger.magnificPopup("destroy");
        } catch {}
        $trigger.removeData("mfp-initialized");
      }

      document.body.classList.remove("overflow-hidden");
      // lenis?.start?.();
    };
  }, []);

  useEffect(() => {
    const btn = document.querySelector<HTMLElement>(".btn-to-top");
    if (!btn) return;

    // FAST scroll
    const onClick = (e: MouseEvent) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    btn.addEventListener("click", onClick);

    // Show/Hide button (lighter version)
    const st = ScrollTrigger.create({
      start: 300, // show after 300px scroll
      onUpdate: (self) => {
        gsap.to(btn, {
          autoAlpha: self.scroll() > 300 ? 1 : 0,
          duration: 0.2, // FAST fade
        });
      },
    });

    return () => {
      btn.removeEventListener("click", onClick);
      st.kill();
    };
  }, []);


  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".hover-reveal__item"));
    const contents = Array.from(document.querySelectorAll<HTMLElement>(".hover-reveal__content"));
    const images = Array.from(document.querySelectorAll<HTMLElement>(".hover-reveal__image"));

    if (!items.length) return;

    const handlers: Array<() => void> = [];

    items.forEach((item, i) => {
      const onMove = (e: MouseEvent) => {
        const c = contents[i];
        const img = images[i];
        if (!c || !img) return;

        c.style.opacity = "1";
        c.style.transform = "translate(-80%, -50% )";
        img.style.transform = "scale(1, 1)";
        c.style.left = `${e.clientX}px`;
      };

      const onLeave = () => {
        const c = contents[i];
        const img = images[i];
        if (!c || !img) return;

        c.style.opacity = "0";
        c.style.transform = "translate(-80%, -50%)";
        img.style.transform = "scale(1, 1.4)";
      };

      item.addEventListener("mousemove", onMove);
      item.addEventListener("mouseleave", onLeave);

      handlers.push(() => {
        item.removeEventListener("mousemove", onMove);
        item.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => handlers.forEach((h) => h());
  }, []);

 
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/Moiz.png" />
        <link rel="preload" as="fetch" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <main className="mxd-page-content" id="mxd-page-content">
        <Component {...pageProps} />
      </main>
      <Footer />

      {/* jQuery */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        strategy="afterInteractive"
      />

      {/* Magnific Popup */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
