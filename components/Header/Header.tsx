import Image from "react-bootstrap/Image";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  gsap,
  SplitText,
  ScrollTrigger,
  ScrollToPlugin,
  Flip,
} from "@/helpers/gsap";

function Header() {
  useLayoutEffect(() => {
    const header = document.querySelector<HTMLElement>(".mxd-header");
    const wraps = Array.from(
      document.querySelectorAll<HTMLElement>(".mxd-nav__wrap"),
    );

    const cleanupFns: Array<() => void> = [];
    const closeFns: Array<() => void> = [];

    wraps.forEach((wrap) => {
      const hamburger = wrap.querySelector<HTMLElement>(".mxd-nav__hamburger");
      const lines = Array.from(
        wrap.querySelectorAll<HTMLElement>(".hamburger__line"),
      );
      const menuContain = wrap.querySelector<HTMLElement>(".mxd-menu__contain");
      const hamburgerBase = wrap.querySelector<HTMLElement>(".hamburger__base");
      const menuWrapper = wrap.querySelector<HTMLElement>(".mxd-menu__wrapper");
      const menuBase = wrap.querySelector<HTMLElement>(".mxd-menu__base");

      const menuItems = Array.from(
        wrap.querySelectorAll<HTMLElement>(".main-menu__item"),
      ); // ✅ multiple
      const promoVideo = wrap.querySelector<HTMLElement>(".menu-promo__video");
      const fadeIns = Array.from(
        wrap.querySelectorAll<HTMLElement>(".menu-fade-in"),
      ); // ✅ multiple

      if (
        !hamburger ||
        lines.length < 2 ||
        !menuContain ||
        !hamburgerBase ||
        !menuWrapper ||
        !menuBase
      )
        return;

      const ctx = gsap.context(() => {
        const flipMove = (open: boolean) => {
          const state = Flip.getState(hamburgerBase);
          open
            ? menuContain.appendChild(hamburgerBase)
            : hamburger.appendChild(hamburgerBase);
          Flip.from(state, { ease: "power4.inOut", duration: 0.8 });
        };

        const tl = gsap.timeline({ paused: true });

        tl.set(menuWrapper, { display: "flex" });

        tl.from(menuBase, {
          opacity: 0,
          duration: 0.6,
          ease: "none",
          onStart: () => flipMove(true),
        });

        tl.to(lines[0], { y: 5, duration: 0.16 }, "<");
        tl.to(lines[1], { y: -5, duration: 0.16 }, "<");
        tl.to(lines[0], { rotate: 45, duration: 0.16 }, 0.2);
        tl.to(lines[1], { rotate: -45, duration: 0.16 }, 0.2);

        tl.add("fade-in-up")
          .from(
            menuItems,
            {
              opacity: 0,
              yPercent: 50,
              duration: 0.2,
              stagger: { amount: 0.2 },
              onReverseComplete: () => flipMove(false),
            },
            "fade-in-up",
          )
          .from(
            promoVideo ?? [],
            {
              opacity: 0,
              yPercent: 20,
              duration: 0.2,
            },
            "fade-in-up",
          )
          .from(fadeIns, { opacity: 0, duration: 0.3 }); // ✅ multiple fade elements

        const setHeaderVisible = (open: boolean) => {
          if (!header) return;
          if (open) header.classList.add("menu-is-visible");
          else
            setTimeout(() => header.classList.remove("menu-is-visible"), 1100);
        };

        const openMenu = () => {
          if (tl.isActive()) return;
          tl.play();
          hamburger.classList.add("nav-open");
          setHeaderVisible(true);
        };

        const closeMenu = () => {
          if (tl.isActive()) return;
          tl.reverse();
          hamburger.classList.remove("nav-open");
          setHeaderVisible(false);
        };

        const toggleMenu = () => {
          const isOpen = hamburger.classList.contains("nav-open");
          isOpen ? closeMenu() : openMenu();
        };

        // expose close for ESC
        closeFns.push(closeMenu);

        // click hamburger
        const onHamburgerClick = (ev: Event) => {
          ev.preventDefault();
          toggleMenu();
        };

        // click background/base closes
        const onMenuBaseClick = () => closeMenu();

        hamburger.addEventListener("click", onHamburgerClick);
        menuBase.addEventListener("click", onMenuBaseClick);

        cleanupFns.push(() => {
          hamburger.removeEventListener("click", onHamburgerClick);
          menuBase.removeEventListener("click", onMenuBaseClick);
          tl.kill();
        });
      }, wrap);

      cleanupFns.push(() => ctx.revert());
    });

    // ✅ single ESC + unload (no duplicates)
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") closeFns.forEach((fn) => fn());
    };
    const onBeforeUnload = () => closeFns.forEach((fn) => fn());

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("beforeunload", onBeforeUnload);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  useEffect(() => {
    const DURATION = 0.35;

    const slideDown = (el: HTMLElement) => {
      gsap.killTweensOf(el);

      // prep
      el.style.display = "block";
      el.style.overflow = "hidden";
      el.style.willChange = "height";

      gsap.fromTo(
        el,
        { height: 0 },
        {
          height: "auto", // ✅ smoother than scrollHeight
          duration: DURATION,
          ease: "power2.out",
          overwrite: "auto",
          force3D: true,
          onComplete: () => {
            el.style.height = "";
            el.style.overflow = "";
            el.style.willChange = "";
          },
        },
      );
    };

    const slideUp = (el: HTMLElement) => {
      gsap.killTweensOf(el);

      // if hidden, ignore
      if (getComputedStyle(el).display === "none") return;

      el.style.overflow = "hidden";
      el.style.willChange = "height";

      gsap.to(el, {
        height: 0,
        duration: DURATION,
        ease: "power2.inOut",
        overwrite: "auto",
        force3D: true,
        onComplete: () => {
          el.style.display = "none";
          el.style.height = "";
          el.style.overflow = "";
          el.style.willChange = "";
        },
      });
    };

    const isOpen = (el: HTMLElement) => getComputedStyle(el).display !== "none";

    const menus = Array.from(
      document.querySelectorAll<HTMLElement>("#main-menu"),
    );
    const cleanupFns: Array<() => void> = [];

    menus.forEach((menu) => {
      const toggles = Array.from(
        menu.querySelectorAll<HTMLElement>(".main-menu__toggle"),
      );
      const allSubmenus = Array.from(
        menu.querySelectorAll<HTMLElement>(".submenu"),
      );

      // initial: hide submenus that are not open
      allSubmenus.forEach((sm) => {
        if (!sm.parentElement?.classList.contains("open"))
          sm.style.display = "none";
      });

      toggles.forEach((toggle) => {
        const onClick = (ev: Event) => {
          ev.preventDefault();

          const next = toggle.nextElementSibling as HTMLElement | null; // ✅ $this.next()
          if (!next) return;
          if (!next.classList.contains("submenu")) return;

          // ✅ close others (multiple=false)
          allSubmenus.forEach((sm) => {
            if (sm !== next) {
              slideUp(sm);
              sm.parentElement?.classList.remove("open");
            }
          });

          // ✅ toggle current
          if (isOpen(next)) {
            slideUp(next);
            toggle.parentElement?.classList.remove("open");
          } else {
            slideDown(next);
            toggle.parentElement?.classList.add("open");
          }
        };

        toggle.addEventListener("click", onClick, { passive: false });
        cleanupFns.push(() => toggle.removeEventListener("click", onClick));
      });
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    const themeBtn = document.querySelector<HTMLElement>("#color-switcher");
    if (!themeBtn) return;

    const root = document.documentElement;

    const getCurrentTheme = () => {
      const saved = localStorage.getItem("template.theme");
      if (saved) return saved;

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    const loadTheme = (theme: string) => {
      // icon change
      themeBtn.innerHTML =
        theme === "light"
          ? `<i class="ph-bold ph-moon-stars"></i>`
          : `<i class="ph-bold ph-sun-horizon"></i>`;

      root.setAttribute("color-scheme", theme);
    };

    const toggleTheme = () => {
      let current = getCurrentTheme();
      const next = current === "dark" ? "light" : "dark";

      localStorage.setItem("template.theme", next);
      loadTheme(next);
    };

    // initial load
    loadTheme(getCurrentTheme());

    themeBtn.addEventListener("click", toggleTheme);

    return () => {
      themeBtn.removeEventListener("click", toggleTheme);
    };
  }, []);

  return (
    <>
      {/* <!-- Loader Start --> */}
      <div id="loader" className="loader">
        <div className="loader__wrapper">
          <div className="loader__content">
            <div className="loader__count">
              <span className="count__text">0</span>
              <span className="count__percent">%</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Loader End --> */}

      {/* <!-- Menu & Menu Hamburger Start --> */}
      <nav className="mxd-nav__wrap" data-lenis-prevent="">
        {/* <!-- Hamburger Start --> */}
        <div className="mxd-nav__contain loading__fade">
          <a href="#0" className="mxd-nav__hamburger">
            {/* <!-- flip element --> */}
            <div className="hamburger__base"></div>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </a>
        </div>
        {/* <!-- Hamburger End --> */}

        {/* <!-- Main Navigation Start --> */}
        <div className="mxd-menu__wrapper">
          {/* <!-- background active layer --> */}
          <div className="mxd-menu__base"></div>
          {/* <!-- menu container --> */}
          <div className="mxd-menu__contain">
            <div className="mxd-menu__inner">
              {/* <!-- left side --> */}
              <div className="mxd-menu__left">
                <p className="mxd-menu__caption menu-fade-in">
                  🦄 Innovative design
                  <br />
                  and cutting-edge development
                </p>
                <div className="main-menu">
                  <nav className="main-menu__content">
                    <ul id="main-menu" className="main-menu__accordion">
                      <li className="main-menu__item">
                        <div className="main-menu__toggle">
                          <span className="main-menu__link btn btn-anim">
                            <span className="btn-caption">Home</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1.1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </div>
                        <ul className="submenu">
                          <li className="submenu__item active">
                            <a href="/">Main home</a>
                          </li>
                          <li className="submenu__item">
                            <a href="index-software-development-company.html">
                              Software development company
                            </a>
                          </li>
                          <li className="submenu__item">
                            <a href="index-freelancer-portfolio.html">
                              Freelancer portfolio
                            </a>
                          </li>
                          <li className="submenu__item">
                            <a href="index-digital-agency.html">
                              Digital agency
                            </a>
                          </li>
                          <li className="submenu__item">
                            <a href="index-creative-design-studio.html">
                              Creative design studio
                            </a>
                          </li>
                          <li className="submenu__item">
                            <a href="index-personal-portfolio.html">
                              Personal portfolio
                            </a>
                          </li>
                          <li className="submenu__item">
                            <a href="index-web-agency.html">Web agency</a>
                          </li>
                          <li className="submenu__item">
                            <a href="index-creative-developer.html">
                              Creative developer
                            </a>
                          </li>
                          <li className="submenu__item">
                            <a href="index-designer.html">Designer</a>
                          </li>
                        </ul>
                      </li>
                      <li className="main-menu__item">
                        <div className="main-menu__toggle">
                          <span className="main-menu__link btn btn-anim">
                            <span className="btn-caption">Works</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1.1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </div>
                        <ul className="submenu">
                          <li className="submenu__item">
                            <a href="works-simple.html">Portfolio</a>
                          </li>
                          <li className="submenu__item">
                            <a href="/projects">Projects</a>
                          </li>
                          <li className="submenu__item">
                            <a href="projects-detail">Project details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="main-menu__item">
                        <div className="main-menu__toggle">
                          <span className="main-menu__link btn btn-anim">
                            <span className="btn-caption">Pages</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1.1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </div>
                        <ul className="submenu">
                          <li className="submenu__item">
                            <a href="about-me.html">About me</a>
                          </li>
                          <li className="submenu__item">
                            <a href="/about-us">About us</a>
                          </li>
                          <li className="submenu__item">
                            <a href="/services">Services</a>
                          </li>
                          <li className="submenu__item">
                            <a href="team.html">Our team</a>
                          </li>
                          <li className="submenu__item">
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li className="submenu__item">
                            <a href="faq.html">FAQ page</a>
                          </li>
                          <li className="submenu__item">
                            <a href="404.html">404 error page</a>
                          </li>
                          <li className="submenu__item">
                            <a href="index.html">Landing page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="main-menu__item">
                        <div className="main-menu__toggle">
                          <span className="main-menu__link btn btn-anim">
                            <span className="btn-caption">Insights</span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1.1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </div>
                        <ul className="submenu">
                          <li className="submenu__item">
                            <a href="blog-standard.html">Blog standard</a>
                          </li>
                          <li className="submenu__item">
                            <a href="blog-creative.html">Blog creative</a>
                          </li>
                          <li className="submenu__item">
                            <a href="blog-article.html">Single post</a>
                          </li>
                        </ul>
                      </li>
                      <li className="main-menu__item">
                        <a
                          className="main-menu__link btn btn-anim"
                          href="/contact-us"
                        >
                          <span className="btn-caption">Contact</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* <!-- right side --> */}
              <div className="mxd-menu__right">
                <div className="menu-promo">
                  <div className="menu-promo__content">
                    <p className="menu-promo__caption menu-fade-in">
                      👋 Nice to see you!
                      <br />
                      I&apos;m Alex Walker, digital designer and illustrator
                      based in Odesa, Ukraine
                    </p>
                    <div className="menu-promo__video">
                      <video
                        className="menu-video"
                        id="inner-video"
                        preload=""
                        autoPlay
                        loop
                        muted
                        poster="/images/video/540x310_video-01.webp"
                      >
                        <source
                          type="video/webm"
                          src="/images/video/540x310_video-01.webm"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- data bottom line --> */}
              <div className="mxd-menu__data menu-fade-in">
                <p className="t-xsmall">
                  Made with
                  <i className="ph-fill ph-heart t-additional"></i>
                  by
                  <a
                    className="no-effect"
                    href="https://1.envato.market/EKA9WD"
                    target="_blank"
                  >
                    Mix_Design
                  </a>
                </p>
                <p className="t-xsmall">
                  <i className="ph ph-copyright"></i>
                  2025
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Navigation End --> */}
      </nav>
      {/* <!-- Menu & Menu Hamburger End --> */}

      {/* <!-- Header Start --> */}
      <header id="header" className="mxd-header">
        {/* <!-- header logo --> */}
        <div className="mxd-header__logo loading__fade">
          <a href="index-main.html" className="mxd-logo">
            {/* <!-- logo icon --> */}
            <svg
              width="352"
              height="76"
              viewBox="0 0 352 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mxd-logo__image"
            >
              <g clip-path="url(#clip0_21637_1435)" className="mxd-logo__clippath">
                <path
                  d="M86 20.25H100.751C104.596 20.25 107.191 21.5682 108.532 24.203C109.872 26.8394 110.543 31.646 110.543 38.6244C110.543 45.6453 109.872 50.4677 108.532 53.093C107.191 55.7184 104.596 57.0303 100.751 57.0303H94.1078V69.6547H86V20.25ZM98.9733 50.0944C100.408 50.0944 101.359 49.7196 101.827 48.9699C102.296 48.2203 102.528 44.7728 102.528 38.626C102.528 32.5421 102.294 29.1151 101.827 28.345C101.359 27.5749 100.408 27.189 98.9733 27.189H94.0449V50.096H98.9733V50.0944Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M120.987 53.5937C120.987 58.6979 121.206 61.7453 121.643 62.7344C122.08 63.7234 123.056 64.2195 124.574 64.2195C126.133 64.2195 127.307 63.7297 128.097 62.7501C128.762 61.917 129.147 60.2807 129.251 57.8443V32.375H137.266V69.6561H130.124V67.563C130.124 67.4181 130.165 67.2606 130.249 67.0937L131.902 64.5943L131.404 64.4998C131.05 65.0841 130.656 65.6669 130.219 66.2496C128.223 68.7285 125.301 69.9679 121.456 69.9679C117.421 69.9679 115.011 68.4214 114.22 65.3267C113.43 62.2336 113.035 58.3845 113.035 53.7795V32.375H120.987V53.5937Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M140.199 20H148.214V69.6566H140.199V20Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M163.522 69.939C158.885 69.939 155.621 69.1736 153.729 67.6428C151.837 66.112 150.891 62.6488 150.891 57.2516H158.843C158.843 61.0219 159.248 63.1528 160.059 63.6426C160.87 64.1323 162.076 64.3765 163.677 64.3765C165.07 64.3765 166.099 64.2095 166.764 63.8772C167.428 63.5449 167.762 62.2204 167.762 59.9085C167.762 57.5335 167.158 56.0484 165.953 55.4546C164.747 54.8609 162.896 54.2939 160.402 53.7522C157.408 53.1065 155.07 52.0182 153.385 50.4858C151.7 48.955 150.859 46.2415 150.859 42.3452C150.859 38.3654 151.805 35.6629 153.698 34.236C155.59 32.8091 158.665 32.0957 162.928 32.0957C167.667 32.0957 170.979 32.8816 172.86 34.4549C174.741 36.0282 175.682 39.419 175.682 44.6272H167.73C167.73 41.0018 167.325 38.9339 166.514 38.4237C165.703 37.9134 164.466 37.6583 162.803 37.6583C161.389 37.6583 160.371 37.8094 159.747 38.1118C159.123 38.4142 158.812 39.8363 158.812 42.3767C158.812 44.5233 159.445 45.8619 160.713 46.3927C161.981 46.9234 163.831 47.4715 166.264 48.0337C169.112 48.618 171.398 49.6385 173.124 51.0969C174.849 52.5552 175.712 55.2641 175.712 59.2218C175.712 63.4095 174.823 66.2427 173.045 67.7216C171.271 69.1988 168.096 69.939 163.522 69.939Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M203.563 55.2201C203.417 59.6991 202.872 62.9025 201.926 64.8302C200.979 66.7578 199.675 68.0965 198.012 68.8462C196.35 69.5958 193.958 69.9706 190.84 69.9706C185.62 69.9706 182.18 68.5548 180.518 65.72C178.855 62.8867 178.023 57.9604 178.023 50.938C178.023 43.6871 178.839 38.7246 180.472 36.0473C182.103 33.3699 185.55 32.0312 190.81 32.0312C196.09 32.0312 199.537 33.3652 201.148 36.0315C202.758 38.6978 203.565 43.2824 203.565 49.782L203.533 52.2199H185.944C186.007 58.3038 186.329 61.8252 186.911 62.7828C187.555 63.8663 188.864 64.4081 190.84 64.4081C192.087 64.4081 192.955 64.3089 193.444 64.112C193.932 63.9136 194.363 63.0804 194.737 61.6126C195.111 60.1433 195.381 58.014 195.548 55.2217H203.563V55.2201ZM195.518 47.407C195.498 42.5327 195.18 39.6774 194.567 38.8443C193.954 38.0112 192.702 37.5938 190.81 37.5938C188.877 37.5938 187.577 38.0427 186.912 38.9372C186.351 39.7294 186.029 42.5516 185.946 47.4054H195.518V47.407Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M213.949 69.6563H205.934V20.25H220.59L229.166 62.7503H229.79L229.103 46.3131C229.061 46.0217 229.036 45.7036 229.025 45.3602C229.014 45.0169 229.009 44.6988 229.009 44.4074V20.25H237.054V69.6563H222.555L213.762 26.4992H213.138L213.886 41.875C213.906 42.1459 213.922 42.4435 213.933 42.7664C213.944 43.0892 213.949 43.3963 213.949 43.6877V69.6563Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M258.323 64.9703L257.668 64.8758C257.064 65.8964 256.514 66.7248 256.014 67.3594C255.516 67.9957 254.938 68.4997 254.284 68.8745C253.629 69.2493 252.86 69.5312 251.977 69.7187C251.094 69.9061 250.121 70.0006 249.062 70.0006C248.188 70.0006 247.268 69.8966 246.302 69.6887C245.335 69.4808 244.451 69.1533 243.651 68.7044C242.851 68.2571 242.148 67.6414 241.546 66.8602C240.943 66.0791 240.47 65.0837 240.127 63.8758C239.785 62.6678 239.613 60.9275 239.613 58.6565C239.613 56.8234 239.758 55.3603 240.05 54.2657C240.341 53.1727 240.778 52.1868 241.359 51.3128C241.941 50.4371 242.673 49.7237 243.558 49.1725C244.441 48.6213 245.45 48.2086 246.583 47.9378C247.716 47.6669 248.845 47.5314 249.967 47.5314H256.703V45.5313C256.703 42.865 256.541 40.9688 256.219 39.8443C255.896 38.7199 255.455 38.0678 254.894 37.8915C254.333 37.7151 253.427 37.6253 252.181 37.6253C251.037 37.6253 250.165 37.7135 249.561 37.8915C248.958 38.0694 248.485 38.6994 248.142 39.7813C247.8 40.8649 247.617 42.5831 247.597 44.9376H239.676C239.717 41.8334 240.138 39.4427 240.94 37.7655C241.74 36.0882 242.697 34.8802 243.809 34.14C244.922 33.4014 246.116 32.8644 247.396 32.5305C248.675 32.1982 250.322 32.0312 252.338 32.0312C255.249 32.0312 257.525 32.3651 259.168 33.0313C260.811 33.6991 262.156 34.9369 263.207 36.7497C264.257 38.5624 264.782 41.5626 264.782 45.7502V69.6572H256.798V68.3138C256.798 68.043 256.839 67.7626 256.923 67.4697C257.006 67.1783 257.121 66.9185 257.265 66.6885L258.323 64.9703ZM251.307 64.2821C251.911 64.2821 252.497 64.2144 253.069 64.0789C253.641 63.9435 254.212 63.7403 254.784 63.4694C255.356 63.1986 255.797 62.8915 256.109 62.5481C256.42 62.2048 256.607 61.8032 256.67 61.3449L256.794 52.2514H251.274C250.797 52.2514 250.344 52.3239 249.918 52.4703C249.492 52.6168 249.123 52.8971 248.812 53.3145C248.501 53.7318 248.255 54.3413 248.079 55.1429C247.902 55.9446 247.814 57.0123 247.814 58.3463C247.814 59.9716 247.913 61.1906 248.111 62.0032C248.309 62.8159 248.568 63.3686 248.89 63.66C249.212 63.9514 249.582 64.1293 249.997 64.1907C250.413 64.2506 250.85 64.2821 251.307 64.2821Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M278.999 69.6563C275.962 69.6563 273.833 69.094 272.606 67.9696C271.378 66.8451 270.765 64.667 270.765 61.4384V38.7504H266.773V32.3752H267.647C268.999 32.3752 270.096 31.8397 270.937 30.7656C271.779 29.6931 272.2 28.208 272.2 26.3118V20.25H280.245V26.3134C280.245 29.7923 278.936 31.6161 276.316 31.7814V32.3752H286.388V38.7504H278.81V59.9375C278.81 61.2085 279.049 62.0463 279.527 62.4527C280.005 62.859 280.691 63.0622 281.586 63.0622C282.811 63.0622 284.424 63.0622 286.42 63.0622V69.6563C283.655 69.6563 281.182 69.6563 278.999 69.6563Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M296.959 32.375H288.914V69.6561H296.959V32.375Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M317.288 32.375H325.677L318.631 69.6561H306.594L299.547 32.375H307.936L312.178 62.4698C312.218 62.6997 312.25 62.9344 312.272 63.1722C312.292 63.4116 312.303 63.6463 312.303 63.8746V64.7188H312.927V63.8746C312.948 63.6463 312.963 63.4116 312.974 63.1722C312.985 62.9328 313.011 62.6982 313.053 62.4698L317.288 32.375Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M352.001 55.2201C351.854 59.6991 351.309 62.9025 350.363 64.8302C349.417 66.7578 348.113 68.0965 346.45 68.8462C344.787 69.5958 342.395 69.9706 339.277 69.9706C334.058 69.9706 330.618 68.5548 328.955 65.72C327.292 62.8867 326.461 57.9604 326.461 50.938C326.461 43.6871 327.277 38.7246 328.909 36.0473C330.541 33.3699 333.987 32.0312 339.247 32.0312C344.528 32.0312 347.974 33.3652 349.585 36.0315C351.196 38.6978 352.002 43.2824 352.002 49.782L351.971 52.2199H334.383C334.446 58.3038 334.768 61.8252 335.35 62.7828C335.994 63.8663 337.303 64.4081 339.279 64.4081C340.527 64.4081 341.394 64.3089 341.883 64.112C342.372 63.9136 342.802 63.0804 343.176 61.6126C343.55 60.1433 343.821 58.014 343.987 55.2217H352.001V55.2201ZM343.954 47.407C343.934 42.5327 343.616 39.6774 343.003 38.8443C342.39 38.0112 341.138 37.5938 339.246 37.5938C337.313 37.5938 336.013 38.0427 335.348 38.9372C334.787 39.7294 334.465 42.5516 334.382 47.4054H343.954V47.407Z"
                  fill="#1D1D1D"
                />
                <path
                  d="M293.067 30.3913C295.238 30.3913 296.998 28.6279 296.998 26.4525C296.998 24.2771 295.238 22.5137 293.067 22.5137C290.896 22.5137 289.137 24.2771 289.137 26.4525C289.137 28.6279 290.896 30.3913 293.067 30.3913Z"
                  fill="url(#paint0_linear_21637_1435)" className="mxd-logo__dot"
                />
              </g>
              <path
                d="M64.9039 0H11.0956C4.96766 0 0 4.96766 0 11.0956V64.9039C0 71.0318 4.96766 75.9994 11.0956 75.9994H64.9039C71.0318 75.9994 75.9994 71.0318 75.9994 64.9039V11.0956C75.9994 4.96766 71.0318 0 64.9039 0Z"
                fill="url(#paint1_linear_21637_1435)"
              />
              <path
                d="M68.1034 41.5703C68.1034 49.5286 65.5817 55.9812 60.5383 60.9282C55.9327 65.4805 48.9855 67.757 39.6967 67.7576L36.004 67.6971V46.4398C40.8866 46.4398 43.3283 44.5793 43.3288 40.8583C43.3288 37.4541 41.4628 35.7514 37.7306 35.7502C33.9581 35.7502 32.0725 38.086 32.0737 42.7577V76.0014H11.0944C10.0106 76.0022 8.93261 75.8444 7.89453 75.5332V45.2507C7.89453 40.0243 8.42067 35.7391 9.47297 32.3952C10.5253 29.0512 12.3221 25.9335 14.8634 23.042C17.7209 19.8366 21.2941 17.3032 25.5827 15.4418C29.8714 13.5804 34.2984 12.6506 38.8636 12.6523C47.1218 12.6523 54.0602 15.4234 59.6789 20.9655C65.2976 26.5076 68.1057 33.3759 68.1034 41.5703Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_21637_1435"
                  x1="289.137"
                  y1="26.4531"
                  x2="296.999"
                  y2="26.4531"
                  gradientUnits="userSpaceOnUse"
                  
                >
                  <stop stop-color="#167AE4" />
                  <stop offset="0.2709" stop-color="#167AE4" />
                  <stop offset="1" stop-color="#1660E4" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_21637_1435"
                  x1="30.2054"
                  y1="45.7941"
                  x2="77.446"
                  y2="-1.44522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#011963" />
                  <stop offset="1" stop-color="#00A5FF" />
                </linearGradient>
                <clipPath id="clip0_21637_1435">
                  <rect
                    width="266"
                    height="50"
                    fill="white"
                    transform="translate(86 20)"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* <svg
              className="mxd-logo__image"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 56 56"
              xmlSpace="preserve"
            >
              <path
                className="mxd-logo__bg"
                d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z"
              />
              <g>
                <defs>
                  <path
                    id="mxd-logo__clippath"
                    d="M28,0C2.9,0,0,16.9,0,28s2.9,28,28,28s28-16.9,28-28S53.1,0,28,0z"
                  />
                </defs>
                <clipPath id="mxd-logo__id">
                  <use xlinkHref="#mxd-logo__clippath" />
                </clipPath>
                <path
                  className="mxd-logo__cat"
                  d="M33.6,34.5h0.9
                c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z M20.5,37.3
                v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3L20.5,37.3z
                M39.2,21.5v0.9c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z
                M34.5,26.1h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9C33.6,25.7,34,26.1,34.5,26.1z
                M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28L28,26.1
                z M19.6,24.3v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C20,23.3,19.6,23.8,19.6,24.3z
                M16.8,21.5v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C17.2,20.5,16.8,21,16.8,21.5z
                M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1
                L14,26.1z M11.2,34.5v1.9c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9
                V42c0,0.5-0.4,0.9-0.9,0.9H7.5c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9,0.4,0.9,0.9V56
                c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9h3.7c0.5,0,0.9-0.4,0.9-0.9v-0.9
                c0-0.5-0.4-0.9-0.9-0.9h-3.7c-0.5,0-0.9-0.4-0.9-0.9v-6.5c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9
                h-0.9c-0.5,0-0.9,0.4-0.9,0.9L11.2,34.5L11.2,34.5z M42,26.1v-1.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v6.5
                c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9V26.1L42,26.1z M49.5,39.2v-0.9c0-0.5-0.4-0.9-0.9-0.9h-2.8
                c-0.5,0-0.9-0.4-0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v3.7c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9,0.4,0.9,0.9
                v6.5c0,0.5-0.4,0.9-0.9,0.9h-3.7c-0.5,0-0.9,0.4-0.9,0.9v0.9c0,0.5,0.4,0.9,0.9,0.9h3.7c0.5,0,0.9,0.4,0.9,0.9V56
                c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-9.3c0-0.5,0.4-0.9,0.9-0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9
                c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C49,40.1,49.5,39.7,49.5,39.2L49.5,39.2z"
                />
              </g>
            </svg> */}
            {/* <!-- logo text --> */}
            {/* <span className="mxd-logo__text">PulseNative</span> */}
          </a>
        </div>
        {/* <!-- header controls --> */}
        <div className="mxd-header__controls loading__fade">
          <button
            id="color-switcher"
            className="mxd-color-switcher"
            type="button"
            role="switch"
            aria-label="light/dark mode"
            aria-checked="true"
          ></button>
          <a
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up"
            href="contact.html"
          >
            <span className="btn-caption">Get Started</span>
            <i className="ph-bold ph-arrow-up-right"></i>
          </a>
        </div>
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header;
