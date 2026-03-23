import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
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


import IllustrationsImg1 from '../../public/images/illustrations/800x800_card-image-03.webp'
import IllustrationsImg2 from '../../public/images/illustrations/800x800_card-image-04.webp'
import IllustrationsImg3 from '../../public/images/illustrations/360x440_list-01.webp'
import IllustrationsImg4 from '../../public/images/illustrations/360x440_list-02.webp'
import IllustrationsImg5 from '../../public/images/illustrations/360x440_list-03.webp'
import IllustrationsImg6 from '../../public/images/illustrations/360x440_list-04.webp'
import IllustrationsImg7 from '../../public/images/illustrations/cta-img-01.webp'
import IllustrationsImg8 from '../../public/images/illustrations/cta-img-02.webp'
// import video1 from '../../public/video/1920x1080_video-07.webp'




import IconImg1 from '../../public/images/icons/300x300_obj-btn-02.webp'
import IconImg2 from '../../public/images/icons/icon-eye.svg'
import IconImg3 from '../../public/images/icons/300x300_obj-cta-01.webp'


export default function Services() {
  useEffect(() => {
    const el = document.getElementById("mxd-page-content");
    if (el) {
      el.classList.add("inner-page-content");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="" />
      </Head>
       
       {/* <!-- Section - Inner Page Headline Start --> */}
        <div className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
          <div className="mxd-container grid-container">

            {/* <!-- Block - Inner Page Headline Start --> */}
            <div className="mxd-block loading-wrap">
              <div className="container-fluid px-0">
                <div className="row gx-0">

                  {/* <!-- Inner Headline Name Start --> */}
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                    <div className="mxd-block__name name-inner-headline loading__item">
                      <p className="mxd-point-subtitle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                          <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                          c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                          c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                          c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                          c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                          c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                          c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"/>
                        </svg>
                        <span>Services</span>
                      </p>
                    </div>
                  </div>
                  {/* <!-- Inner Headline Name Start --> */}

                  {/* <!-- Inner Headline Content Start --> */}
                  <div className="col-12 col-xl-10 mxd-grid-item no-margin">

                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline">
                        <h1 className="inner-headline__title headline-img-before headline-img-04 loading__item">New standards in digital excellence</h1>
                        {/* <!-- <p className="inner-headline__text t-large t-bright"></p> --> */}
                      </div>
                    </div>

                  </div>
                  {/* <!-- Inner Headline Content End --> */}

                </div>
              </div>
            </div>
            {/* <!-- Block - Inner Page Headline End --> */}

          </div>
        </div>
        {/* <!-- Section - Inner Page Headline End --> */}

        {/* <!-- Section - Inner Page Statistics Start --> */}
        <div className="mxd-section mxd-section-inner-stats overflow-hidden">
          <div className="mxd-container grid-container">

            {/* <!-- Block - Inner Page Statistics Start --> */}
            <div className="mxd-block">
              <div className="container-fluid px-0">
                <div className="row gx-0">

                  {/* <!-- Inner Block Name Start --> */}
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                  {/* <!-- Inner Block Name Start --> */}

                  {/* <!-- Inner Block Content Start --> */}
                  <div className="col-12 col-xl-10">

                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-stats">
                        <div className="mxd-stats-cards loading__fade">
                          <div className="container-fluid px-0">
                            <div className="row gx-0">
                              {/* <!-- item --> */}
                              <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item">
                                <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                                  <div className="mxd-counter">
                                    <p id="stats-counter-3" className="mxd-counter__number mxd-stats-number">0</p>
                                    <p className="mxd-counter__descr t-140 t-bright">Years of professional experience in designing digital products</p>
                                  </div>
                                  <div className="mxd-stats-cards__btngroup">
                                    <a className="btn btn-anim btn-default btn-outline slide-right-up" href="contact.html">
                                      <span className="btn-caption">Start New Project</span>
                                      <i className="ph-bold ph-arrow-up-right"></i>
                                    </a>
                                  </div>
                                  <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                                    <img src={IllustrationsImg1.src} alt="Illustration" />
                                  </div>
                                </div>
                              </div>
                              {/* <!-- item --> */}
                              <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item">
                                <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                                  <div className="mxd-counter">
                                    <p id="stats-counter-4" className="mxd-counter__number mxd-stats-number">0</p>
                                    <p className="mxd-counter__descr t-140 t-bright">Successfully<br />completed projects</p>
                                  </div>
                                  <div className="mxd-stats-cards__btngroup">
                                    <a className="btn btn-anim btn-default btn-outline slide-right-up" href="works-simple.html">
                                      <span className="btn-caption">Works</span>
                                      <i className="ph-bold ph-arrow-up-right"></i>
                                    </a>
                                  </div>
                                  <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                                    <img src={IllustrationsImg2.src} alt="Illustration" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* <!-- Inner Block Content End --> */}

                </div>
              </div>
            </div>
            {/* <!-- Block - Inner Page Statistics End --> */}

          </div>
        </div>
        {/* <!-- Section - Inner Page Statistics End --> */}

        {/* <!-- Section - Services List Start --> */}
        <div className="mxd-section overflow-hidden padding-default">
          <div className="mxd-container grid-container">

            {/* <!-- Block - Services List Start --> */}
            <div className="mxd-block">
              <div className="mxd-services-list grid-top hover-reveal">
                {/* <!-- item --> */}
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <img className="hover-reveal__image" src={IllustrationsImg3.src} alt="" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin align-self-center">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p><span>UI/UX</span><br/>Design</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>We create visually compelling designs that enhance user experience.
                              From UI/UX design to stunning websites, mobile apps, and print materials,
                              we make sure your brand’s visuals resonate with your audience.</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>UI/UX</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Web design</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Applications</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Print design</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Packaging</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Motion</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>3D models</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                </div>
                {/* <!-- item --> */}
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <img className="hover-reveal__image" src={IllustrationsImg4.src} alt="" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin align-self-center">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p><span>Website</span><br/>Development</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>We build high-performance websites and applications using modern technologies.
                              Our solutions are designed to be scalable and functional for optimal performance.</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>Frontend</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Interactions</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Backend</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>E-Commerce</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Mobile Apps</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Maintenance</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Support</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                </div>
                {/* <!-- item --> */}
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <img className="hover-reveal__image" src={IllustrationsImg5.src} alt="" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin align-self-center">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p><span>WebApp</span> <br/> Development</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>From logo design to comprehensive brand strategies, we ensure your business stands
                              out with a unique visual identity and consistent messaging across all touchpoints.</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>Brand strategy</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Logo design</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Guidelines</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Visual identity</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Rebranding</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                </div>
                {/* <!-- item --> */}
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <img className="hover-reveal__image" src={IllustrationsImg6.src} alt="" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin align-self-center">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p><span>MobileApp</span> <br/> Development</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>We develop and execute tailored digital marketing strategies. SEO and content marketing,
                              social media management and paid campaigns - we help you reach and engage your target
                              audience effectively.</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>Strategy</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Social media</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>SEO</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Optimization</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Email</p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>Campaigns</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                </div>
              </div>
            </div>
            {/* <!-- Block - Services List End --> */}

          </div>
        </div>
        {/* <!-- Section - Services List End --> */}

        {/* <!-- Section - Parallax Divider Start --> */}
        <div className="mxd-section padding-pre-title">
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
                  poster="/video/1920x1080_video-07.webp"
                >
                  <source src="/video/1920x1080_video-07.mp4" type="video/mp4" />
                  <source src="/video/1920x1080_video-07.webm" type="video/webm" />
                  <source src="/video/1920x1080_video-07.ogv" type="video/ogv" />
                </video>
              </div>
              {/* <!-- <div className="mxd-divider__image divider-image-1 parallax-img"></div> --> */}
              <div className="mxd-divider__trigger">
                <a href="https://vimeo.com/65036292" id="showreel-trigger" className="btn-rotating btn-rotating-blur-outline showreel-trigger">
                  {/* <!-- SVG rotating text --> */}
                  <svg
                    version="1.1"
                    id="scrollDown"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 160 160"
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
                      <use xlinkHref="#textPath" fill="none" />
                      <text>
                        <textPath xlinkHref="#textPath">
                          Play showreel * Play showreel * Play showreel *
                        </textPath>
                      </text>
                    </g>
                  </svg>
                  {/* <!-- image --> */}
                  <img className="btn-rotating__image" src={IconImg1.src} alt="Object" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section - Parallax Divider End --> */}

        {/* <!-- Section - Blog Preview Start --> */}
        <div className="mxd-section padding-blog">
          <div className="mxd-container grid-container">

            {/* <!-- Block - Section Title Start --> */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type anim-uni-in-up">Recent insights</h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrdescr">
                        <p className="anim-uni-in-up">Inspiring ideas, creative insights, and the latest
                          in design and tech. Fueling innovation for your digital journey.</p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up" href="blog-standard.html">
                          <span className="btn-caption">All Articles</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Block - Section Title End --> */}

            {/* <!-- Block - Blog Preview Cards Start --> */}
            <div className="mxd-block">
              <div className="mxd-blog-preview">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    {/* <!-- item --> */}
                    <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                      <a className="mxd-blog-preview__media" href="blog-article.html">
                        <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small">
                          {/* <!-- <img className="parallax-img-small" src="img/blog/preview/1000x1250_prv-01.webp" alt="Blog Preview Image"> --> */}
                        </div>
                        <div className="mxd-preview-hover">
                          <i className="mxd-preview-hover__icon">
                            <img src={IconImg2.src} alt="Eye Icon" />
                          </i>
                        </div>
                        <div className="mxd-blog-preview__tags">
                          <span className="tag tag-default tag-permanent">Concept</span>
                          <span className="tag tag-default tag-permanent">Editorial</span>
                        </div>
                      </a>
                      <div className="mxd-blog-preview__data">
                        <a className="anim-uni-in-up" href="blog-article.html"><span>Frontend innovations</span> and user journeys</a>
                      </div>
                    </div>
                    {/* <!-- item --> */}
                    <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                      <a className="mxd-blog-preview__media" href="blog-article.html">
                        <div className="mxd-blog-preview__image blog-preview-image-2 parallax-img-small">
                          {/* <!-- <img className="parallax-img-small" src="img/blog/preview/1000x1250_prv-02.webp" alt="Blog Preview Image"> --> */}
                        </div>
                        <div className="mxd-preview-hover">
                          <i className="mxd-preview-hover__icon">
                            <img src={IconImg2.src} alt="Eye Icon" />
                          </i>
                        </div>
                        <div className="mxd-blog-preview__tags">
                          <span className="tag tag-default tag-permanent">UI/UX</span>
                          <span className="tag tag-default tag-permanent">Development</span>
                        </div>
                      </a>
                      <div className="mxd-blog-preview__data">
                        <a className="anim-uni-in-up" href="blog-article.html">Branding in creating <span>digital experiences</span></a>
                      </div>
                    </div>
                    {/* <!-- item --> */}
                    <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                      <a className="mxd-blog-preview__media" href="blog-article.html">
                        <div className="mxd-blog-preview__image blog-preview-image-3 parallax-img-small">
                          {/* <!-- <img className="parallax-img-small" src="img/blog/preview/1000x1250_prv-03.webp" alt="Blog Preview Image"> --> */}
                        </div>
                        <div className="mxd-preview-hover">
                          <i className="mxd-preview-hover__icon">
                            <img src={IconImg2.src} alt="Eye Icon" />
                          </i>
                        </div>
                        <div className="mxd-blog-preview__tags">
                          <span className="tag tag-default tag-permanent">News</span>
                          <span className="tag tag-default tag-permanent">AI</span>
                        </div>
                      </a>
                      <div className="mxd-blog-preview__data">
                        <a className="anim-uni-in-up" href="blog-article.html">Elevating <span>digital workshops</span> with engaging design</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Block - Blog Preview Cards End --> */}

          </div>
        </div>
        {/* <!-- Section - Blog Preview End --> */}

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
                        <img src={IconImg3.src} alt="Icon" />
                      </span>
                      <span className="mxd-promo__caption reveal-type">Let's talk about your project!</span>
                    </p>
                    <div className="mxd-promo__controls anim-uni-in-up">
                      <a className="btn btn-anim btn-default btn-large btn-additional slide-right-up" href="contact.html">
                        <span className="btn-caption">Say Hello</span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- parallax images --> */}
                  <div className="mxd-promo__images">
                    <img className="promo-image promo-image-1" src={IllustrationsImg7.src} alt="Image" />
                    <img className="promo-image promo-image-2" src={IllustrationsImg8.src} alt="Image" />
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

