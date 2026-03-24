import Head from "next/head";
import React, { useEffect } from "react";

import IconsImg1 from '../../public/images/icons/96x96-decor-01.svg'
import AvatarsImg1 from '../../public/images/Rectangle-6.png'
import HeroImg1 from '../../public/images/Frame-1.png'
import HeroImg2 from '../../public/images/Frame-2.png'
import HeroImg3 from '../../public/images/Frame-3.png'
import HeroImg4 from '../../public/images/Frame-4.png'
import HeroImg5 from '../../public/images/Frame-5.png'
import HeroImg6 from '../../public/images/Frame-6.png'
import HeroImg7 from '../../public/images/Frame-7.png'
import IconImg1 from '../../public/images/icons/h70_stats-01.webp'
import IconImg2 from '../../public/images/icons/h70_stats-02.webp'
import IconImg3 from '../../public/images/icons/h70_stats-03.webp'


import { gsap, ScrollTrigger } from "@/helpers/gsap";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules

import FAQ from "@/components/Faq";
import Form from "@/components/Form";
import TestimonialsSlider from "@/components/TestimonialsSlider";



export default function Services() {

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

  useEffect(() => {
    const el = document.getElementById("mxd-page-content");
    if (el) {
      el.classList.add("inner-page-content");
    }
  }, []);


  return (
    <>
      <Head>
        <title>WebApp Development</title>
        <meta name="description" content="" />
      </Head>

      {/* <!-- Hero Section Start --> */}
      <div className="mxd-section setMarginBt100">
        <div className="mxd-hero-08">
          <div className="mxd-hero-08__wrap loading-wrap">
            <div className="mxd-hero-08__center">
              <div className="mxd-hero-08__headline">
                <div className="mxd-container">
                  <div className="hero-08-headline__image">
                    {/* <img className="mxd-rotate-slow" src={HeroImg1.src} alt="Hero Image" /> */}
                  </div>
                  <div className="hero-08-headline__title hero-08-slide-out-scroll loading__item">
                    {/* <h1>Building Scalable Solutions for Your Business</h1> */}

                    <h1 className="inner-headline__title animated-type loading__item">
                      <span id="typed-strings">
                        <b>Building Scalable Solutions for Your Business</b>
                      </span>
                      <span id="typed"></span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-hero-08__bottom">
              <div className="mxd-hero-08__data-wrap hero-08-scale-out-scroll">
                <div className="mxd-hero__mark loading__item">
                  <span className="mark-icon"></span>
                  <span className="mark-text">Web Application Development</span>
                </div>
                <div className="mxd-hero-08__descr loading__item">
                  <p className="t-large t-bright t-medium t-120">We create secure, high-performance web applications tailored to your business needs, combining innovative technology with user-centered design.</p>
                </div>
              </div>
              <div className="mxd-hero-08__video-wrap hero-08-scale-out-scroll loading__item">
                <video
                  className="mxd-hero-08__video"
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/video/540x310_video-01.webp"
                >
                  <source src="/video/540x310_video-01.mp4" type="video/mp4" />
                  <source src="/video/540x310_video-01.webm" type="video/webm" />
                  <source src="/video/540x310_video-01.ogv" type="video/ogv" />
                  Your browser does not support the video tag.
                </video>
                <div className="mxd-hero-08__video-btn">
                  <a id="showreel-trigger" className="btn btn-round btn-round-medium btn-accent slide-right anim-no-delay showreel-trigger" href="https://vimeo.com/65036292">
                    <i className="ph-fill ph-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="mxd-hero-08__tl-trigger"></div>
          </div>
        </div>
      </div>
      {/* <!-- Hero Section End --></div> */}

      {/* <!-- Section - About Start --> */}
      <div className="mxd-section padding-pre-grid">
        <div className="mxd-container grid-l-container">

          {/* <!-- Block - About Description with Manifest Start --> */}
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-6 mxd-grid-item-l no-margin anim-uni-in-up">
                  <div className="mxd-block__image">
                    <img src={AvatarsImg1.src} alt="Photo" />
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item-l no-margin">
                  <div className="mxd-block__content content-flex">
                    <div className="mxd-block__manifest">
                      <h2 className="reveal-type">Custom Web App Development</h2>
                      <div className="mxd-section-title__descr">
                        <p className="anim-uni-in-up">Our tech experts are dedicated to building high-performing web applications that drive growth and digitally transform your business. We’re committed to delivering an exceptional user experience without compromise.<br /><br />We follow our core principles of 3Ds – Design, Develop, & Deliver. From start to finish, we ensure you receive a web application that’s innovative, interactive, and comprehensive. Our skilled team works tirelessly to unlock your business’s potential and deliver outstanding results.</p>
                      </div>
                      <div className="mxd-manifest__controls">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up" href="about-me.html">
                          <span className="btn-caption">Learn More</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="mxd-block__decoration anim-uni-in-up">
                      <img src={IconsImg1.src} alt="Decoration" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - About Description with Manifest End --> */}

        </div>
      </div>
      {/* <!-- Section - About End --> */}

      {/* <!-- Section - Blog Preview Start --> */}
      <div className="mxd-section padding-blog">
        <div className="mxd-container grid-container">

          {/* <!-- Block - Section Title Start --> */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up">Glimpse of our Recent featured work</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">At Pulse Native, we believe in showcasing our expertise through the real-world impact we’ve made for our clients.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Section Title End --> */}
        </div>

        {/* <!-- Section - Marquee Images Two Lines Start --> */}

        <div className="mxd-container fullwidth-container">

          <div className="mxd-section padding-pre-title">
            <div className="mxd-container fullwidth-container">

              {/* <!-- Block - Marquee Images Two Lines Start --> */}
              <div className="mxd-block">
                <div className="marquee marquee--gsap">
                  {/* <!-- top line --> */}
                  <div className="marquee__top">
                    {/* <!-- item --> */}
                    <div className="marquee__item image">
                      <a className="marquee__link" href="team.html">
                        <img src={HeroImg7.src} alt="Image" />
                      </a>
                    </div>

                    <div className="marquee__item">
                      <a className="marquee__link" href="team.html">
                        <img src={HeroImg7.src} alt="Image" />
                      </a>
                    </div>
                    {/* <!-- item --> */}
                    <div className="marquee__item">
                      <a className="marquee__link" href="team.html">
                        <img src={HeroImg6.src} alt="Image" />
                      </a>
                    </div>

                    <div className="marquee__item">
                      <a className="marquee__link" href="team.html">
                        <img src={HeroImg5.src} alt="Image" />
                      </a>
                    </div>
                  </div>
                  {/* <!-- bottom line --> */}
                  <div className="marquee__bottom">

                    <div className="marquee__item">
                      <a className="marquee__link" href="team.html">
                        <img src={HeroImg4.src} alt="Image" />
                      </a>
                    </div>
                    {/* <!-- item --> */}
                    <div className="marquee__item">
                      <a className="marquee__link" href="team.html">
                        <img src={HeroImg3.src} alt="Image" />
                      </a>
                    </div>

                    <div className="marquee__item">
                      <a className="marquee__link" href="team.html">
                        <img src={HeroImg2.src} alt="Image" />
                      </a>
                    </div>
                    {/* <!-- item --> */}
                    <div className="marquee__item">
                      <a className="marquee__link" href="team.html">
                        <img src={HeroImg1.src} alt="Image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Block - Marquee Images Two Lines End --> */}

            </div>
          </div>
        </div>

        {/* <!-- Section - Marquee Images Two Lines End --> */}


      </div>
      {/* <!-- Section - Blog Preview End --> */}


      {/* <!-- Section - Tech Stack Start --> */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container grid-container">

          {/* <!-- Block - Tech Stack Cards with H2 Title Start --> */}
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item">

                  {/* <!-- Section Title Start --> */}
                  <div className="mxd-section-title pre-grid no-margin-desktop">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12">
                          <div className="mxd-section-title__title">
                            <h2 className="reveal-type">Advance Web Technologies To Overcome Complex Business Challenges</h2>
                          </div>
                          <div className="mxd-section-title__hrdescr">
                            <p className="anim-uni-in-up">As a professional web design and development company, we leverage the latest tools and technologies to meet each projects unique needs.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Section Title End --> */}

                </div>
                <div className="col-12 col-xl-7">

                  {/* <!-- Tech Stack Cards Start --> */}
                  <div className="mxd-tech-stack-cards">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="256" height="272" version="1.1" viewBox="0 0 256 272">
                                <path d="M103,143.6l23.3-55.4,26.5,55.4h-49.8ZM255.1,44.7l-20.9,166.4-108.3,60-106.6-59.2L0,45.5,125.9.7l129.2,44ZM208.2,207.2L126.1,32.3,47.7,206.7l29.3-.5,15.7-39.3h70.3l17.2,39.8,28,.5Z" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/01_angular.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">Angular</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="225.8" height="201.2" version="1.1" viewBox="0 0 225.8 201.2">
                                <path d="M185.7,65.2c-2.3-.8-4.8-1.6-7.3-2.3.4-1.7.8-3.3,1.1-5,5.5-26.7,1.9-48.3-10.4-55.3-11.8-6.8-31.1.3-50.5,17.2-1.9,1.6-3.7,3.4-5.6,5.2-1.3-1.2-2.5-2.4-3.7-3.5C88.9,3.4,68.4-4.3,56.2,2.9c-11.8,6.8-15.3,27.1-10.3,52.4.5,2.4,1,4.9,1.7,7.5-2.9.8-5.7,1.7-8.4,2.6C15.3,73.7,0,86.8,0,100.4s16.4,28,41.3,36.6c2,.7,4,1.3,6.1,1.9-.7,2.7-1.3,5.4-1.8,8.1-4.7,24.9-1,44.7,10.7,51.4,12.1,7,32.5-.2,52.3-17.5,1.6-1.4,3.1-2.8,4.7-4.3,2,2,4.1,3.8,6.1,5.6,19.2,16.5,38.2,23.2,49.9,16.4,12.1-7,16.1-28.2,10.9-54.1-.4-2-.8-4-1.4-6,1.4-.4,2.8-.9,4.2-1.3,25.9-8.6,42.8-22.5,42.8-36.6s-15.8-26.8-40.2-35.2h0v-.2h.1ZM180.1,127.8c-1.2.4-2.5.8-3.8,1.2-2.9-9.1-6.7-18.7-11.4-28.6,4.5-9.7,8.2-19.2,11-28.2,2.3.7,4.6,1.4,6.7,2.1,20.9,7.2,33.7,17.8,33.7,26s-13.8,20.1-36.1,27.5c0,0-.1,0-.1,0ZM170.8,146.2c2.3,11.4,2.6,21.7,1.1,29.8-1.3,7.3-4.1,12.1-7.4,14-7.1,4.1-22.3-1.2-38.8-15.4-1.9-1.6-3.8-3.3-5.7-5.2,6.4-7,12.7-15.1,18.9-24,10.9-1,21.2-2.6,30.6-4.7.5,1.9.9,3.7,1.2,5.5h0ZM77,189.4c-7,2.5-12.5,2.5-15.8.6-7.1-4.1-10.1-20-6-41.3.5-2.4,1-4.9,1.6-7.5,9.3,2,19.5,3.5,30.5,4.4,6.3,8.8,12.8,16.9,19.4,24-1.4,1.4-2.9,2.7-4.3,4-8.8,7.7-17.6,13.1-25.3,15.8h-.1ZM44.4,127.8c-11-3.8-20.1-8.7-26.4-14-5.6-4.8-8.4-9.6-8.4-13.4,0-8.2,12.3-18.7,32.7-25.9,2.5-.9,5.1-1.7,7.8-2.4,2.8,9.2,6.5,18.8,11,28.5-4.5,9.9-8.3,19.6-11.2,28.9-1.9-.6-3.8-1.1-5.6-1.7h0ZM55.3,53.4c-4.2-21.7-1.4-38.1,5.7-42.2,7.6-4.4,24.3,1.9,41.9,17.5,1.1,1,2.3,2,3.4,3.1-6.6,7-13.1,15.1-19.2,23.8-10.6,1-20.8,2.6-30.2,4.7-.6-2.4-1.1-4.7-1.6-7h0ZM152.8,77.5c-2.2-3.9-4.5-7.6-6.9-11.3,7.2.9,14.1,2.1,20.6,3.6-1.9,6.2-4.4,12.8-7.2,19.5-2-3.9-4.2-7.8-6.5-11.8h0ZM113,38.8c4.5,4.8,8.9,10.2,13.3,16.1-4.4-.2-8.9-.3-13.4-.3s-8.9,0-13.3.3c4.4-5.8,8.9-11.2,13.4-16h0ZM73,77.5c-2.2,3.9-4.4,7.8-6.4,11.7-2.8-6.7-5.2-13.2-7.2-19.6,6.4-1.4,13.3-2.6,20.5-3.5-2.4,3.7-4.7,7.5-6.9,11.4h0ZM80.2,135.2c-7.4-.8-14.4-1.9-20.8-3.3,2-6.4,4.5-13.1,7.3-19.9,2,3.9,4.2,7.8,6.4,11.7h0c2.3,4,4.7,7.8,7.1,11.6h0ZM113.3,162.6c-4.6-4.9-9.1-10.4-13.6-16.3,4.3.2,8.7.3,13.2.3s9.2-.1,13.6-.3c-4.4,6-8.8,11.4-13.3,16.3h.1ZM159.4,111.6c3,6.9,5.6,13.5,7.6,19.9-6.6,1.5-13.6,2.7-21.1,3.6,2.3-3.7,4.7-7.6,6.9-11.5,2.3-4,4.5-8,6.6-12h0ZM144.5,118.7c-3.5,6.1-7.2,12-10.8,17.5-6.7.5-13.6.7-20.7.7s-13.9-.2-20.5-.6c-3.8-5.6-7.5-11.5-11-17.5h0c-3.5-6-6.7-12.1-9.6-18.2,2.9-6.1,6.1-12.2,9.6-18.2h0c3.5-6,7.2-11.9,11-17.4,6.7-.5,13.6-.8,20.6-.8h0c7,0,13.9.3,20.6.8,3.7,5.5,7.4,11.3,10.9,17.4s6.8,12.2,9.7,18.1c-2.9,6-6.2,12.2-9.7,18.3h-.1,0ZM164.4,10.9c7.6,4.4,10.5,22,5.8,45-.3,1.5-.6,3-1,4.5-9.4-2.2-19.6-3.8-30.2-4.8-6.2-8.8-12.6-16.9-19.1-23.8,1.7-1.7,3.5-3.3,5.2-4.8,16.7-14.5,32.3-20.2,39.4-16.2h-.1ZM112.9,80.2c11.1,0,20.2,9,20.2,20.2s-9,20.2-20.2,20.2-20.2-9-20.2-20.2,9-20.2,20.2-20.2" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/02_react.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">React</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="512" height="416.2" version="1.1" viewBox="0 0 512 416.2">
                                <path d="M256,96.1L200.5,0h-79.4l134.9,233.7L390.9,0h-79.4l-55.5,96.1ZM409.4,0l-153.4,265.7L102.6,0H15.7l240.3,416.2L496.3,0h-86.9Z" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/03_vue.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">Vue.js</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1309" version="1.1" viewBox="0 0 2500 1309">
                                <path d="M839,547.9c-8.6,145.6-77.1,171.2-154.1,179.8h-102.7l42.8-256.9h111.3c59.9,0,102.7,25.7,102.7,77.1ZM1883.6,470.9h-111.3l-42.8,256.9h102.8c77.1-8.6,145.5-34.2,154.1-179.8,0-51.4-42.8-77.1-102.7-77.1h0ZM2500,650.7c0,359.4-559.6,650.7-1250,650.7S0,1010,0,650.7,559.6,0,1250,0s1250,291.3,1250,650.7ZM1010.3,539.4c0-119.9-68.5-188.4-205.5-196.9h-316.8l-137,693.5h162.7l34.2-179.8h154.1c145.6,8.6,308.2-111.3,308.2-316.8h0ZM1398,539.4l-59.9,316.8h171.2l59.9-351c17.1-85.6-34.2-154.1-171.2-162.7h-154.1l34.2-179.8h-162.7l-137,693.5h162.7l77.1-385.3h128.4c59.9,0,59.9,25.7,51.4,68.5ZM2157.5,539.4c0-119.9-68.5-188.4-205.5-196.9h-316.8l-137,693.5h162.7l34.2-179.8h154.1c145.5,8.6,308.2-111.3,308.2-316.8h.1Z" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/04_php.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">PHP</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="256" height="288" version="1.1" viewBox="0 0 256 288">
                                <path d="M255.6,84.5c0-4.8-1-9.1-3.1-12.8-2.1-3.6-5.1-6.6-9.2-9-34-19.6-68.1-39.2-102.1-58.8-9.2-5.3-18.1-5.1-27.2.3C100.5,12.2,32.7,51,12.4,62.7c-8.3,4.8-12.4,12.2-12.4,21.7v118.4c0,4.7,1,8.9,3,12.5,2.1,3.7,5.2,6.8,9.4,9.3,20.2,11.7,88,50.5,101.6,58.5,9.1,5.4,18,5.6,27.2.3,34-19.6,68.1-39.2,102.1-58.8,4.2-2.4,7.3-5.5,9.4-9.3,2-3.6,3-7.8,3-12.5v-118.3h0ZM129.5,238.6h-1.1c-35.3,0-66-19.2-82.4-47.7-8-13.9-12.6-30.1-12.6-47.3,0-52.5,42.5-95,95-95s65.6,19,82.1,47.2h0l.2.3s-.1-.2-.2-.3l-41.3,23.8c-8.1-13.8-23.1-23.1-40.2-23.3h-.5c-26.1,0-47.3,21.2-47.3,47.3s2.3,16.6,6.2,23.5c8.2,14.2,23.5,23.8,41.1,23.8s33.1-9.7,41.2-24.1l-.2.3,41.3,23.9c-16.3,28.1-46.5,47.2-81.3,47.5h0ZM235.6,136.5h-13.5v13.5h13.5v6.7h-13.5v13.5h-6.7v-13.5h-13.5v13.5h-6.7v-13.5h-13.5v-6.7h13.5v-13.5h-13.5v-6.7h13.5v-13.5h6.7v13.5h13.5v-13.5h6.7v13.5h13.5v6.7ZM201.9,136.5h13.5v13.5h-13.5v-13.5Z" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/05_c-sharp.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">C#</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" version="1.1" viewBox="0 0 256 256">
                                <path d="M0,0v256h256V0H0ZM139.3,199.7c0,24.9-14.6,36.3-35.9,36.3s-30.4-10-36.1-22h0l19.6-11.9c3.8,6.7,7.2,12.4,15.5,12.4s12.9-3.1,12.9-15.1v-81.8h24.1v82.1h-.1ZM196.2,235.9c-22.3,0-36.8-10.7-43.8-24.6h0l19.6-11.3c5.2,8.4,11.9,14.6,23.7,14.6s16.3-5,16.3-11.9-6.5-11.2-17.5-16l-6-2.6c-17.4-7.4-28.9-16.7-28.9-36.3s13.7-31.8,35.2-31.8,26.3,5.3,34.2,19.2l-18.7,12c-4.1-7.4-8.6-10.3-15.5-10.3s-11.5,4.5-11.5,10.3,4.5,10.1,14.8,14.6l6,2.6c20.4,8.8,32,17.7,32,37.8s-17,33.5-39.9,33.5v.2Z" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/06_javascript.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">JS</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="351.8" height="198.8" version="1.1" viewBox="0 0 351.8 198.8">
                                <path d="M256.9,148.5c-8.1,0-14.7-6.6-14.7-14.7s6.6-14.7,14.7-14.7,14.7,6.6,14.7,14.7h0c0,8.1-6.6,14.7-14.7,14.7M94.9,148.5c-8.1,0-14.7-6.6-14.7-14.7s6.6-14.7,14.7-14.7,14.7,6.6,14.7,14.7h0c0,8.1-6.6,14.7-14.7,14.7M262.1,60.4l29.3-51c1.2-3.3-.5-7-3.8-8.2-2.1-.8-4.5-.4-6.3,1.1-.2.3-.4.6-.5,1l-29.6,51.6c-47.9-21.5-102.7-21.5-150.7,0L70.9,3.6c-2.3-2.6-6.3-2.9-9-.6-1.6,1.4-2.4,3.6-2.1,5.7,0,.4.3.7.6,1l29.2,51C38.3,88.6,4.6,140.6,0,198.8h351.8c-4.6-58.3-38.3-110.4-89.7-138.4" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/07_android.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">Android</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="257" height="128" version="1.1" viewBox="0 0 257 128">
                                <path d="M1.9,125h21.2V34.9H1.9v90.1ZM12.4,23c6.6,0,11.8-5.1,11.8-11.5S19,0,12.4,0,.7,5.1.7,11.6s5.2,11.5,11.7,11.5h0ZM93.5.3C57.7.3,35.3,24.7,35.3,63.7s22.4,63.3,58.2,63.3,58.2-24.3,58.2-63.3S129.2.3,93.5.3ZM93.5,19c21.8,0,35.8,17.3,35.8,44.7s-13.9,44.6-35.8,44.6-35.8-17.3-35.8-44.6,13.9-44.7,35.8-44.7ZM160.6,90.5c.9,22.6,19.5,36.6,47.7,36.6s48.4-14.6,48.4-37.9-10.5-28.6-35.5-34.3l-14.1-3.2c-15-3.6-21.3-8.3-21.3-16.5s9.4-17,23.2-17,23.6,6.9,24.7,18.4h20.9C254.1,14.9,236.3.3,209.2.3s-45.7,14.7-45.7,36.5,10.7,28.4,33.3,33.6l15.9,3.7c15.5,3.7,21.8,8.8,21.8,17.6s-10.3,17.5-25.1,17.5-26.3-7.4-27.6-18.7h-21.3.1Z" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/08_ios.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">iOS</p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="col-12 col-md-6 col-xxl-4 mxd-tech-stack-cards__item mxd-grid-item animate-card-3">
                          <div className="mxd-tech-stack-cards__inner">
                            <div className="mxd-tech-stack-cards__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="212.6" height="79.4" version="1.1" viewBox="0 0 212.6 79.4">
                                <path d="M116.2,69.8h32.3v8.2h-41.4V0h39.6v8.2h-30.4v26h28.2v8.2h-28.2v27.3h0ZM157.1,8.2h22.5v69.8h9.1V8.2h22.5V0h-54.1v8.2ZM7.4,67.1c-1.7,0-3.1.6-4.3,1.8-1.2,1.2-1.8,2.7-1.8,4.4s.6,3.1,1.8,4.4c1.2,1.2,2.6,1.8,4.3,1.8s3.2-.6,4.4-1.8c1.2-1.2,1.8-2.7,1.8-4.4s-.6-3.1-1.8-4.4c-1.2-1.2-2.7-1.8-4.4-1.8ZM80.7,66L38.8,0h-11.9v78.1h9.1V11.1l42.6,67h11.1V0h-9.1v66h0Z" />
                              </svg>
                              {/* <!-- <img className="inject-me" src="img/tech/09_net.svg" alt="Tech Stack Logo"> --> */}
                            </div>
                            <div className="mxd-tech-stack-cards__title">
                              <p className="t-bright t-caption">.NET</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* <!-- Tech Stack Cards End --> */}

                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Tech Stack Cards with H2 Title End --> */}

        </div>
      </div>
      {/* <!-- Section - Tech Stack End --> */}

      {/* <!-- Section - Statistics Simple Start --> */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">

          {/* <!-- Block - Statistics Cards Start --> */}
          <div className="mxd-block">
            <div className="mxd-stats-simple">
              <div className="container-fluid p-0">
                <div className="row g-0 mxd-stats-simple">
                  {/* <!-- item --> */}
                  <div className="col-12 col-lg-4 mxd-stats-simple__item mxd-grid-item">
                    <div className="mxd-stats-simple__inner animate-card-4">
                      {/* <!-- counter --> */}
                      <div className="mxd-counter">
                        <p id="stats-counter-1" className="mxd-stats-number mxd-stats-simple__counter">0</p>
                      </div>
                      {/* <!-- image --> */}
                      <img className="mxd-stats-simple__image" src={IconImg1.src} alt="Icon" />
                      {/* <!-- description --> */}
                      <p className="mxd-stats-simple__descr t-140 t-bright">Years Experience</p>
                    </div>
                  </div>
                  {/* <!-- item --> */}
                  <div className="col-12 col-lg-4 mxd-stats-simple__item mxd-grid-item">
                    <div className="mxd-stats-simple__inner animate-card-4">
                      {/* <!-- counter --> */}
                      <div className="mxd-counter">
                        <p id="stats-counter-2" className="mxd-stats-number mxd-stats-simple__counter">0</p>
                      </div>
                      {/* <!-- image --> */}
                      <img className="mxd-stats-simple__image" src={IconImg2.src} alt="Icon" />
                      {/* <!-- description --> */}
                      <p className="mxd-stats-simple__descr t-140 t-bright">Professionals In
                        Our Team</p>
                    </div>
                  </div>
                  {/* <!-- item --> */}
                  <div className="col-12 col-lg-4 mxd-stats-simple__item mxd-grid-item">
                    <div className="mxd-stats-simple__inner animate-card-4">
                      {/* <!-- counter --> */}
                      <div className="mxd-counter">
                        <p id="stats-counter-3" className="mxd-stats-number mxd-stats-simple__counter">0</p>
                      </div>
                      {/* <!-- image --> */}
                      <img className="mxd-stats-simple__image" src={IconImg3.src} alt="Icon" />
                      {/* <!-- description --> */}
                      <p className="mxd-stats-simple__descr t-140 t-bright">Projects Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Statistics Cards End --> */}

        </div>
      </div>
      {/* <!-- Section - Statistics Simple End --> */}


      {/* <!-- Section - Experience Start --> */}
      <div className="mxd-section padding-grid-pre-pinned">
        <div className="mxd-container grid-container">

          {/* <!-- Block - Stack Universal Pinned Block with Section Title Start --> */}
          <div className="mxd-block">
            <div className="mxd-pinned-universal">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-pinned-universal__static">
                    <div className="mxd-pinned-universal__static-inner no-margin">

                      {/* <!-- Section Title Start --> */}
                      <div className="mxd-section-title h2-only no-margin-desktop">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__title card-split-title">
                                <h2 className="reveal-type">Our Web App Development Process Covers the Following Key Steps</h2>
                              </div>
                              <div className="mxd-section-title__hrdescr">
                                <p className="anim-uni-in-up">As a professional web design and development company, we leverage the latest tools and technologies to meet each projects unique needs.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Section Title Start --> */}

                    </div>
                  </div>
                  <div className="col-12 col-xl-7 mxd-pinned-universal__scroll">
                    <div className="mxd-pinned-universal__scroll-inner mxd-grid-item no-margin">
                      <div className="mxd-res-list">
                        {/* <!-- item --> */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h4 className="anim-uni-in-up">UI/UX Design</h4>

                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">We craft intuitive, visually appealing interfaces that prioritize user experience, making your web app easy and enjoyable to navigate.</p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">01</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h4 className="anim-uni-in-up">Third Party Integration</h4>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">Seamless integration with APIs and third-party services to extend functionality and enhance user experience.</p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">02</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h4 className="anim-uni-in-up">Cross-Browser Compatibility</h4>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">We ensure your web app works smoothly across all browsers, maximizing accessibility and reach for your audience.</p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">03</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h4 className="anim-uni-in-up">Security Enhancement</h4>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">We implement robust security measures to protect your data and user privacy, keeping your application secure from potential threats.</p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">04</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h4 className="anim-uni-in-up">Ongoing Maintenance and Support</h4>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">Continuous monitoring, performance optimization, and regular updates to keep your web app running smoothly and securely.</p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">05</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="mxd-res-list__item">
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                          <div className="mxd-res-list__content">
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h4 className="anim-uni-in-up">Rigorous Testing and Quality Assurance</h4>
                              </div>
                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">Our thorough testing process identifies and addresses issues, ensuring your web app delivers a flawless experience to users.</p>
                              </div>
                            </div>
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">06</p>
                            </div>
                          </div>
                          <div className="mxd-res-list__divider anim-uni-in-up"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Stack Universal Pinned Block with Section Title Start --> */}

        </div>
      </div>
      {/* <!-- Section - Experience End --> */}

      <Form/>

      {/* <!-- Section - Testimonials Slider #01 Start --> */}
      <section className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container no-padding-container">
          {/* <!-- Block - Testimonials Slider #01 with Section Title Start --> */}
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5">
                  {/* <!-- Additional Container Start --> */}
                  <div className="mxd-container grid-container">
                    <div className="mxd-block">
                      {/* <!-- Section Title Start --> */}
                      <div className="mxd-section-title no-margin-desktop">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__title anim-uni-in-up">
                                <h2 className="reveal-type">
                                  Feedbacks from Our clients
                                </h2>
                              </div>
                            </div>
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__descr">
                                <p className="anim-uni-in-up">
                                  We&apos;re more than just executors —
                                  we&apos;re your creative partners. Don&apos;t
                                  just take our word for it, see what clients
                                  have to say about working with us.
                                </p>
                              </div>
                            </div>
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__controls anim-uni-in-up">
                                <a
                                  className="btn btn-anim btn-default btn-outline slide-right-up"
                                  href="about-us.html"
                                >
                                  <span className="btn-caption">All Work</span>
                                  <i className="ph-bold ph-arrow-up-right"></i>
                                </a>
                                {/* <a
                                  className="mxd-section-title__image-link"
                                  href="https://clutch.co/"
                                  target="_blank"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="200"
                                    height="97"
                                    version="1.1"
                                    viewBox="0 0 200 97"
                                  >
                                    <g>
                                      <path
                                        className="cls-1"
                                        d="M52.1,0h9.2v56.7h-9.2V0ZM93.1,56.7h9.2V18.3h-9.2v20.3h.2c0,8.5-7.3,9.3-9.3,9.3-5.3,0-6.5-5.2-6.5-8.3v-21.3h-9.2v21.6c0,5.3,1.8,9.6,4.5,12.8,2.5,2.5,6.5,4,11,4s7.3-.8,9.3-3.2v3.2h0ZM111.1,56.7h9.2v-29.3h6.7v-9.2h-6.7V4.7h-9.2v13.6h-6.8v9.2h6.8v29.3ZM148.4,56.6c5.2,0,10-1.8,13.7-5.2l1.3-1.3-6.3-6.3-1.3,1.7c-2,1.8-4.5,2.8-7.3,2.8-6.3,0-11-4.5-11-11.1s4.5-11,11-11,5.3.8,7.3,2.8l1.3,1.2,6-6-1.3-1.3c-3.8-3.2-8.3-5.2-13.4-5.2-11.3-.2-19.7,8-19.7,19.5,0,10.8,8.5,19.5,19.7,19.5ZM176.9,35.3c0-8.5,6.3-9.3,8.3-9.3,5.3,0,5.3,5.2,5.3,8.3v22.5h9.2v-22.6c.2-5-1-9.5-4-12.5-2.5-2.5-5.8-4-10-4s-6.5.8-9,3.2V0h-9.2v56.7h9.2v-21.5h.2ZM26.2,56.6c7.3,0,14.4-2.8,19-8l1.3-1.3-6-6.3-1.2,1.7c-3.3,3.3-8.3,5.3-13.2,5.3-10.3,0-17.7-8-17.7-18.8S15.9,10.3,26,10.3s9.3,2,13.2,5.3l1.3,1.3,6-6-1.3-1.3c-5-5.3-11.8-8-19-8C11.2,1.8,0,13.5,0,29.1s11.2,27.5,26.2,27.5ZM14.9,85.7h-3.3v3h-4.2l6.7-9.3h-3.7l-7.3,9.8v2.3h8.3v3.3h3.5v-3.3h2.5v-2.8h-2.5v-3ZM20.9,90.7c-.7,0-1.2.2-1.5.7-.3.3-.7.8-.7,1.5s.2,1.2.7,1.5c.3.3,1,.7,1.5.7s1.2-.2,1.5-.7c.3-.3.7-1,.7-1.5s-.2-1.2-.7-1.5c-.3-.5-.8-.7-1.5-.7ZM35.2,81c-1.2-1.3-3-2-5.2-2s-2,.2-3,.7c-.8.5-1.7,1-2.2,1.8s-.8,1.7-.8,2.7.2,1.8.7,2.5,1.2,1.3,2,1.7c.8.3,1.7.7,2.7.7,1.7,0,3-.5,3.8-1.3,0,1.5-.5,2.5-1.2,3.3-.8.8-1.8,1.2-3.2,1.2s-2.2-.3-2.8-.8l-1.3,2.7c.5.3,1.2.7,2,.8.8.2,1.5.3,2.3.3,1.5,0,3-.3,4.2-1,1.2-.7,2.2-1.7,2.8-2.8.7-1.3,1-2.8,1-4.5,0-2.7-.7-4.5-1.8-5.8ZM32.4,85.7c-.5.5-1.2.7-1.8.7s-1.5-.2-1.8-.7c-.5-.5-.7-1-.7-1.7s.2-1.3.7-1.7c.5-.3,1.2-.7,1.8-.7s1.5.2,2,.7.7,1,.7,1.7c-.2.7-.3,1.2-.8,1.7ZM44.1,76.2l-7.3,20.8h3.2l7.2-20.8h-3ZM52.4,85.2h-1.3l.2-3h6.5v-2.8h-9.5l-.8,8.7h4c1.3,0,2.3.2,2.8.5.5.3.8.8.8,1.5s-.3,1.2-.8,1.5c-.5.3-1.2.5-2.2.5s-1.7-.2-2.3-.3c-.8-.2-1.5-.7-2-1l-1.3,2.7c.7.5,1.7,1,2.7,1.2,1,.3,2.2.5,3.2.5s2.7-.2,3.5-.7c1-.5,1.7-1,2.2-1.8.5-.8.7-1.7.7-2.5,0-1.5-.5-2.7-1.5-3.5-1-1-2.5-1.3-4.7-1.3ZM62.2,90.7c-.7,0-1.2.2-1.5.7-.3.3-.7.8-.7,1.5s.2,1.2.7,1.5c.3.3,1,.7,1.5.7s1.2-.2,1.5-.7c.3-.3.7-1,.7-1.5s-.2-1.2-.7-1.5c-.3-.5-.8-.7-1.5-.7ZM75.8,80c-1-.7-2.2-1-3.5-1s-2.5.3-3.5,1-1.8,1.5-2.3,2.8c-.5,1.2-.8,2.7-.8,4.3s.3,3.2.8,4.3,1.3,2.2,2.3,2.8,2.2,1,3.5,1,2.5-.3,3.5-1,1.8-1.5,2.3-2.8c.5-1.2.8-2.7.8-4.3s-.3-3.2-.8-4.3c-.5-1.3-1.3-2.2-2.3-2.8ZM74.6,90.8c-.5.8-1.3,1.2-2.2,1.2s-1.7-.3-2.2-1.2c-.5-.8-.8-2-.8-3.8s.3-3,.8-3.8,1.3-1.2,2.2-1.2,1.7.3,2.2,1.2.8,2,.8,3.8c0,1.8-.3,3-.8,3.8Z"
                                      />
                                      <path
                                        className="cls-2"
                                        d="M141.3,37.1c0,3.7,3,6.5,6.5,6.5s6.5-3,6.5-6.5-3-6.5-6.5-6.5-6.5,2.8-6.5,6.5ZM108.6,82.5h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.7-4.2c.7-.3.5-1-.2-1ZM131.2,82.5h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.7-4.2c.5-.3.3-1-.2-1ZM154.2,82.5h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.7-4.2c.5-.3.3-1-.2-1ZM177.1,82.5h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.7-4.2c.5-.3.3-1-.2-1ZM199.8,83.5c.5-.3.2-1-.3-1h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.8-4.2Z"
                                      />
                                    </g>
                                  </svg>
                                </a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Section Title Start --> */}
                    </div>
                  </div>
                  {/* <!-- Additional Container End --> */}
                </div>
                <div className="col-12 col-xl-7">
                  {/* <!-- Testimonials Slider Start --> */}
                  <TestimonialsSlider />
                  {/* <!-- Testimonials Slider End --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Testimonials Slider #01 with Section Title Start --> */}
        </div>
      </section>
      {/* <!-- Section - Testimonials Slider #01 End --> */}

      <FAQ />

    </>
  );
}

