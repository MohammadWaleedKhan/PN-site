import Head from "next/head";
import React, { useEffect, useRef } from "react";


// import Link from "next/link";
// import { useRouter } from "next/router";
// import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import Spline from "@splinetool/react-spline";
// import MarqueeImages from "@/components/MarqueeImages";
// import AwardsList from "@/components/AwardsList";
// import TestimonialsSlider from "@/components/TestimonialsSlider";
// import ShowreelMagnific from "@/components/TemplateScripts/init/ShowreelPopupInit";
// import PartnerMarqueeImages from "@/components/OurPartnerMarquee";


import IconImg1 from '../../public/images/icons/300x300_obj-btn-03.webp'
import IconImg2 from '../../public/images/icons/300x300_obj-cta-01.webp'
import IllustrationsImg3 from '../../public/images/illustrations/cta-img-01.webp'
import IllustrationsImg4 from '../../public/images/illustrations/cta-img-02.webp'
import TestimonialsSlider from "@/components/TestimonialsSlider";
// import video1 from '../../public/video/1920x1080_video-07.webp'


export default function Services() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    let masonry: any;

    const initMasonry = async () => {
      const Masonry = (await import('masonry-layout')).default;
      const imagesLoaded = (await import('imagesloaded')).default;

      masonry = new Masonry(gridRef.current!, {
        percentPosition: true,
      });

      imagesLoaded(gridRef.current!).on('progress', () => {
        masonry.layout();

        if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.refresh();
        }
      });
    };

    initMasonry();

    return () => {
      if (masonry) masonry.destroy();
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById("mxd-page-content");
    if (el) {
      el.classList.add("inner-page-content");
      el.classList.add("workMansonry");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="" />
      </Head>

      {/* <!-- Section - Projects Masonry & Headline #01 Start --> */}
      <div className="mxd-section mxd-section-inner-headline grid-headline padding-default">
        <div className="mxd-container grid-l-container">

          {/* <!-- Block - Projects Masonry #01 with Section Title Start --> */}
          <div className="mxd-block loading-wrap">
            <div className="mxd-projects-masonry loading__item">
              <div className="container-fluid p-0">

                {/* <!-- Portfolio Gallery Start --> */}
                <div ref={gridRef} className="row g-0 mxd-projects-masonry__gallery" data-masonry='{"percentPosition": true }'>
                  {/* <!-- portfolio gallery title --> */}
                  <div className="col-12 col-xl-6 mxd-projects-masonry__title headline-title">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title headline-img-before headline-img-07">Projects<br />to explore</h1>
                    </div>
                  </div>
                  {/* <!-- portfolio gallery single item --> */}
                  <div className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item">
                    <a className="mxd-project-item__media masonry-media" href="project-details.html">
                      <div className="mxd-project-item__name">Vela Sail Website</div>
                      <div className="mxd-project-item__preview masonry-preview preview-image-1 parallax-img-small">
                        {/* <!-- <img src="img/works/preview/1400x1400_prv-02.webp" alt="Image"> --> */}
                      </div>
                      <div className="mxd-project-item__tags">
                        <span className="tag tag-default tag-permanent">Sora</span>
                        <span className="tag tag-default tag-permanent">AI</span>
                        <span className="tag tag-default tag-permanent">Editorial</span>
                      </div>
                    </a>
                    <div className="mxd-project-item__promo masonry-promo">
                      {/* <div className="mxd-project-item__name"> */}
                        {/* <a href="project-details.html"><span>Interactive concept</span> powered by AI</a> */}
                      {/* </div> */}
                    </div>
                  </div>
                  {/* <!-- portfolio gallery single item --> */}
                  <div className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item">
                    <a className="mxd-project-item__media masonry-media" href="project-details.html">
                      <div className="mxd-project-item__name">Paws Contest Mobile App</div>
                      <div className="mxd-project-item__preview masonry-preview preview-image-2 parallax-img-small">
                        {/* <!-- <img src="img/works/preview/1400x1400_prv-01.webp" alt="Image"> --> */}
                      </div>
                      <div className="mxd-project-item__tags">
                        <span className="tag tag-default tag-permanent">UI/UX</span>
                        <span className="tag tag-default tag-permanent">Web design</span>
                        <span className="tag tag-default tag-permanent">Illustrations</span>
                      </div>
                    </a>
                    {/* <div className="mxd-project-item__promo">
                      <div className="mxd-project-item__name">
                        <a href="project-details.html"><span>Creative studio</span> template for modern agencies</a>
                      </div>
                    </div> */}
                  </div>
                  {/* <!-- portfolio gallery single item --> */}
                  <div className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item">
                    <a className="mxd-project-item__media masonry-media" href="project-details.html">
                      <div className="mxd-project-item__name">Pop Photography Website</div>
                      <div className="mxd-project-item__preview masonry-preview preview-image-3 parallax-img-small">
                        {/* <!-- <img src="img/works/preview/1400x1400_prv-03.webp" alt="Image"> --> */}
                      </div>
                      <div className="mxd-project-item__tags">
                        <span className="tag tag-default tag-permanent">UI/UX</span>
                        <span className="tag tag-default tag-permanent">Design</span>
                        <span className="tag tag-default tag-permanent">Android</span>
                      </div>
                    </a>
                    {/* <div className="mxd-project-item__promo">
                      <div className="mxd-project-item__name">
                        <a href="project-details.html"><span>Mobile app design</span> for a cross-platform solution</a>
                      </div>
                    </div> */}
                  </div>
                  {/* <!-- portfolio gallery single item --> */}
                  <div className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item">
                    <a className="mxd-project-item__media masonry-media" href="project-details.html">
                      <div className="mxd-project-item__name">Exit Ramp Dashboard</div>
                      <div className="mxd-project-item__preview masonry-preview preview-image-4 parallax-img-small">
                        {/* <!-- <img src="img/works/preview/1400x1400_prv-04.webp" alt="Image"> --> */}
                      </div>
                      <div className="mxd-project-item__tags">
                        <span className="tag tag-default tag-permanent">Brand identity</span>
                        <span className="tag tag-default tag-permanent">Style guides</span>
                      </div>
                    </a>
                    {/* <div className="mxd-project-item__promo">
                      <div className="mxd-project-item__name">
                        <a href="project-details.html"><span>NFT project</span> branding</a>
                      </div>
                    </div> */}
                  </div>
                  {/* <!-- portfolio gallery single item --> */}
                  <div className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item">
                    <a className="mxd-project-item__media masonry-media" href="project-details.html">
                      <div className="mxd-project-item__name">
                        Illustrations set for digital and print use
                      </div>
                      <div className="mxd-project-item__preview masonry-preview preview-image-5 parallax-img-small">
                        {/* <!-- <img src="img/works/preview/1400x1400_prv-05.webp" alt="Image"> --> */}
                      </div>
                      <div className="mxd-project-item__tags">
                        <span className="tag tag-default tag-permanent">Illustrations</span>
                        <span className="tag tag-default tag-permanent">Design</span>
                        <span className="tag tag-default tag-permanent">Packaging</span>
                      </div>
                    </a>
                    {/* <div className="mxd-project-item__promo">
                      <div className="mxd-project-item__name">
                        <a href="project-details.html"><span>Illustrations set</span> for digital and print use</a>
                      </div>
                    </div> */}
                  </div>
                  {/* <!-- portfolio gallery single item --> */}
                  <div className="col-12 col-xl-6 mxd-project-item mxd-projects-masonry__item">
                    <a className="mxd-project-item__media masonry-media" href="project-details.html">
                      <div className="mxd-project-item__name">
                        VR vision experience concept
                      </div>
                      <div className="mxd-project-item__preview masonry-preview preview-image-6 parallax-img-small">
                        {/* <!-- <img src="img/works/preview/1400x1400_prv-06.webp" alt="Image"> --> */}
                      </div>
                      <div className="mxd-project-item__tags">
                        <span className="tag tag-default tag-permanent">Midjourney</span>
                        <span className="tag tag-default tag-permanent">AI model</span>
                      </div>
                    </a>
                    {/* <div className="mxd-project-item__promo">
                      <div className="mxd-project-item__name">
                        <a href="project-details.html"><span>VR vision</span> experience concept</a>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* <!-- Portfolio Gallery End --> */}

                {/* <!-- Portfolio Link Start --> */}
                <div className="mxd-projects-masonry__btngroup anim-uni-in-up">
                  <a className="btn-rotating btn-rotating-180 ver-02" href="contact.html">
                    {/* <!-- SVG rotating text --> */}
                    <svg
                      version="1.1"
                      id="scrollDown"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 160 160"
                      // style={{ enableBackground: "new 0 0 160 160" }}
                      xmlSpace="preserve"
                      className="btn-rotating__text animate-rotation"
                      data-value="360"
                    >
                      <defs>
                        <path
                          id="textPath"
                          d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                        />
                      </defs>

                      <g>
                        <use href="#textPath" fill="none" />

                        <text>
                          <textPath href="#textPath">
                            {"Let's start new project * Let's start new project * "}
                          </textPath>
                        </text>
                      </g>
                    </svg>
                    {/* <!-- image --> */}
                    <img className="btn-rotating__image" src={IconImg1.src} alt="Object" />
                  </a>
                </div>
                {/* <!-- Portfolio Link End --> */}

              </div>
            </div>
          </div>
          {/* <!-- Block - Projects Masonry #01 with Section Title Start --> */}

        </div>
      </div>
      {/* <!-- Section - Projects Masonry & Headline #01 End --> */}

      {/* <!-- Section - Parallax Divider Start --> */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container">
          <div className="mxd-divider">
            <div className="mxd-divider__video">
              <video
                className="video parallax-video"
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
                poster="/video/1920x1080_video-05.webp"
              >
                <source src="/video/1920x1080_video-05.mp4" type="video/mp4" />
                <source src="/video/1920x1080_video-05.webm" type="video/webm" />
                <source src="/video/1920x1080_video-05.ogv" type="video/ogv" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Section - Parallax Divider End --> */}

      {/* <!-- Section - Marquee Text One Line Start --> */}
      <div className="mxd-section padding-mtext">
        <div className="mxd-container fullwidth-container">

          {/* <!-- Block - Marquee Text One Line Start --> */}
          <div className="mxd-block">
            <div className="marquee marquee-right--gsap muted-extra">
              <div className="marquee__toright">
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">Clients Approve</p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "/>
                    </svg>
                  </div>
                </div>
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">Clients Approve</p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "/>
                    </svg>
                  </div>
                </div>
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">Clients Approve</p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Marquee Text One Line End --> */}

        </div>
      </div>
      {/* <!-- Section - Marquee Text One Line End --> */}

      {/* <!-- Section - Testimonials Slider #03 Start --> */}
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
      {/* <!-- Section - Testimonials Slider #03 End --> */}

      {/* <!-- Section - CTA Start --> */}
      <div className="mxd-section overflow-hidden">
        <div className="mxd-container">

          {/* <!-- Block - CTA Start --> */}
          <div className="mxd-block">
            <div className="mxd-promo">
              <div className="mxd-promo__inner anim-zoom-out-container">
                {/* <!-- background --> */}
                <div className="mxd-promo__bg"></div>
                {/* <!-- caption --> */}
                <div className="mxd-promo__content">
                  <p className="mxd-promo__title anim-uni-in-up">
                    <span className="mxd-promo__icon">
                      <img src={IconImg2.src} alt="Icon" />
                    </span>
                    <span className="mxd-promo__caption reveal-type">Let's talk about your project!</span>
                  </p>
                  <div className="mxd-promo__controls anim-uni-in-up">
                    <a className="btn btn-anim btn-default btn-large btn-additional slide-right-up" href="contact.html">
                      <span className="btn-caption">Contact Us</span>
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
                {/* <!-- parallax images --> */}
                <div className="mxd-promo__images">
                  <img className="promo-image promo-image-1" src={IllustrationsImg3.src} alt="Image" />
                  <img className="promo-image promo-image-2" src={IllustrationsImg4.src} alt="Image" />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - CTA End --> */}

        </div>
      </div>
      {/* <!-- Section - CTA End --> */}
    </>
  );
}

