import Head from "next/head";
import React, { useEffect } from "react";

import IconImg2 from '../../public/images/icons/300x300_obj-cta-01.webp'
import IllustrationsImg3 from '../../public/images/illustrations/cta-img-01.webp'
import IllustrationsImg4 from '../../public/images/illustrations/cta-img-02.webp'
import WorkImg1 from '../../public/images/works/1200x1200_prj-details-01.webp'
import WorkImg2 from '../../public/images/works/1400x1000_prj-details-01.webp'
import WorkImg3 from '../../public/images/works/1400x1000_prj-details-02.webp'
import WorkImg4 from '../../public/images/works/1200x1200_prj-details-02.webp'



export default function Services() {


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
        <title>Project Detail</title>
        <meta name="description" content="" />
      </Head>

      {/* <!-- Section - Inner Page Headline Start --> */}
      <div className="mxd-section mxd-section-inner-headline padding-default">
        <div className="mxd-container grid-container">

          {/* <!-- Block - Inner Page Headline Start --> */}
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* <!-- Inner Headline Name Start --> */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-project-link loading__fade">
                    <a className="btn btn-anim btn-line-small btn-muted slide-right-up" href="#0">
                      <span className="btn-caption">Project Page</span>
                      <i className="ph ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
                {/* <!-- Inner Headline Name Start --> */}

                {/* <!-- Inner Headline Content Start --> */}
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline loading__item">
                      <h1 className="inner-headline__title">Studio template</h1>
                    </div>
                  </div>
                </div>
                {/* <!-- Inner Headline Content End --> */}

                {/* <!-- Inner Headline Aside Start --> */}
                <div className="col-12"></div>
                {/* <!-- Inner Headline Aside End --> */}

              </div>
              <div className="row g-0">
                <div className="col-12 col-xl-2"></div>

                {/* <!-- Inner Headline Paragraph & Data Start --> */}
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">

                  <div className="inner-headline__paragraph loading__item">
                    <p>Inspiring ideas, creative insights, and the latest in design and tech. Fueling
                      innovation for your digital journey.</p>
                  </div>

                  <div className="inner-headline__data">
                    <div className="mxd-data-list">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                            <div className="mxd-data-list__item">
                              <p className="mxd-data-list__name">Client</p>
                              <p className="mxd-data-list__content">Mix Design</p>
                            </div>
                            <div className="mxd-data-list__item">
                              <p className="mxd-data-list__name">Services</p>
                              <p className="mxd-data-list__content">Web development</p>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                            <div className="mxd-data-list__item">
                              <p className="mxd-data-list__name">Industries</p>
                              <p className="mxd-data-list__content">HTML template</p>
                            </div>
                            <div className="mxd-data-list__item">
                              <p className="mxd-data-list__name">Date</p>
                              <p className="mxd-data-list__content">January 2025</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                {/* <!-- Inner Headline Paragraph & Data End --> */}

                {/* <!-- Inner Headline Tags Start --> */}
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="inner-headline__tags loading__fade">
                    <span className="tag tag-default tag-outline-medium">Web design</span>
                    <span className="tag tag-default tag-outline-medium">UI/UX design</span>
                    <span className="tag tag-default tag-outline-medium">Development</span>
                    <span className="tag tag-default tag-outline-medium">Branding</span>
                  </div>
                </div>
              </div>
              {/* <!-- Inner Headline Tags End --> */}

            </div>
          </div>
          {/* <!-- Block - Inner Page Headline End --> */}

        </div>
      </div>
      {/* <!-- Section - Inner Page Headline End --> */}

      {/* <!-- Section - Parallax Divider Start --> */}
      <div className="mxd-section">
        <div className="mxd-container">
          <div className="mxd-divider loading__fade">
            <div className="mxd-divider__image prj-details-img-01 parallax-img"></div>
          </div>
        </div>
      </div>
      {/* <!-- Section - Parallax Divider End --> */}

      {/* <!-- Section - Project Details Start --> */}
      <div className="mxd-section mxd-project overflow-hidden">
        <div className="mxd-container grid-container">

          {/* <!-- Project Block - Challenge Description with H2 Title and Paragraph Start --> */}
          <div className="mxd-project__block pre-grid">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-project__subtitle">
                    <h2 className="reveal-type anim-uni-in-up">Challenge</h2>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-project__content">
                    <div className="mxd-project__paragraph">
                      <p className="t-large t-bright anim-uni-in-up">Donec maximus lorem quam, a aliquam erat aliquam
                        quis. Sed accumsan sagittis condimentum. Proin eu nulla.</p>
                      <p className="anim-uni-in-up">Nunc vel ligula tincidunt, fermentum velit ac, sodales eros. Vivamus ac leo in arcu accumsan condimentum. Nullam ac est quis dolor scelerisque interdum in at risus. Pellentesque mattis est vel maximus posuere. Integer tristique ipsum velit, vitae gravida purus laoreet.</p>
                      {/* <!-- <div className="mxd-project__controls anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up" href="#0">
                          <span className="btn-caption">More About Us</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Block - Challenge Description with H2 Title and Paragraph End --> */}

          {/* <!-- Project Block - Images Cards Start --> */}
          <div className="mxd-project__block no-margin">
            <div className="mxd-project-cards">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  {/* <!-- item --> */}
                  <div className="col-12 col-xl-5 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-project-cards__inner align-end bg-accent radius-m">
                      <img src={WorkImg1.src} alt="Project Preview" />
                    </div>
                  </div>
                  {/* <!-- item --> */}
                  <div className="col-12 col-xl-7 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-project-cards__inner align-end bg-base-tint radius-m">
                      <img src={WorkImg2.src} alt="Project Preview" />
                    </div>
                  </div>
                  {/* <!-- item --> */}
                  <div className="col-12 col-xl-7 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-project-cards__inner bg-base-tint radius-m">
                      <img src={WorkImg3.src} alt="Project Preview" />
                    </div>
                  </div>
                  {/* <!-- item --> */}
                  <div className="col-12 col-xl-5 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-project-cards__inner bg-base-tint radius-m">
                      <img src={WorkImg4.src} alt="Project Preview" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Block - Images Cards End --> */}

          {/* <!-- Project Block - Solution Description with H2 Title and Paragraph Start --> */}
          <div className="mxd-project__block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-project__subtitle">
                    <h2 className="reveal-type anim-uni-in-up">Solution</h2>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-project__content">
                    <div className="mxd-project__paragraph medium-text">
                      <p className="anim-uni-in-up">Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Quisque ut arcu pulvinar, rhoncus libero id, lobortis metus. Morbi
                        tristique dolor sit amet turpis faucibus malesuada.</p>
                      <p className="anim-uni-in-up">Morbi non ipsum vel risus scelerisque sagittis nec a ipsum.
                        Nulla odio neque, feugiat a arcu et, tristique cursus diam. Duis consectetur massa nibh,
                        ut rhoncus nibh vestibulum in. Sed imperdiet metus sed arcu efficitur posuere.</p>
                      {/* <!-- <div className="mxd-project__controls anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up" href="#0">
                          <span className="btn-caption">More About Us</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Block - Solution Description with H2 Title and Paragraph End --> */}

          {/* <!-- Project Block - Parallax Fullwidth Image Start --> */}
          <div className="mxd-project__block mxd-grid-item no-margin">
            <div className="mxd-divider">
              <div className="mxd-divider__image prj-details-img-02 parallax-img"></div>
            </div>
          </div>
          {/* <!-- Project Block - Parallax Fullwidth Image End --> */}

          {/* <!-- Project Block - Client’s feedback Description with H2 Title and Paragraph Start --> */}
          <div className="mxd-project__block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-project__subtitle">
                    <h2 className="reveal-type anim-uni-in-up">Client's<br />feedback</h2>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-project__content">
                    <div className="mxd-project__paragraph medium-text">
                      <p className="anim-uni-in-up">Working with Rayo team was an absolute pleasure! They took the
                        time to understand our business needs and translated them into a beautifully designed,
                        user-friendly website. The team's attention to detail, creativity, and technical
                        expertise exceeded our expectations. We've received so much positive feedback from
                        our customers already.</p>
                      <div className="mxd-project__client anim-uni-in-up">
                        <h5 className="anim-uni-in-up">Lea Tomato</h5>
                        <p className="t-small anim-uni-in-up">Senior designer in
                          <a className="" href="#">The Way</a>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Block - Client’s feedback Description with H2 Title and Paragraph End --> */}

          {/* <!-- Project Block - Project Link Start --> */}
          <div className="mxd-project__block no-margin">
            <div className="mxd-project__nav">
              <div className="mxd-project__divider anim-uni-in-up"></div>
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-6 mxd-project__navitem left mxd-grid-item no-margin anim-uni-in-up">
                    <a className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left" href="project-details.html">
                      <i className="ph ph-arrow-left"></i>
                      <span className="btn-caption">Prev</span>
                    </a>
                    <a className="mxd-project__link anim-uni-in-up" href="project-details.html">
                      <span>Mobile app design</span>
                    </a>
                  </div>
                  <div className="col-6 mxd-project__navitem right mxd-grid-item no-margin anim-uni-in-up">
                    <a className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right" href="project-details.html">
                      <span className="btn-caption">Next</span>
                      <i className="ph ph-arrow-right"></i>
                    </a>
                    <a className="mxd-project__link  anim-uni-in-up" href="project-details.html">
                      <span>AI experiments</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Block - Project Link End --> */}

        </div>
      </div>
      {/* <!-- Section - Project Details End --> */}

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
      {/* <!-- Section - CTA End --></div> */}
    </>
  );
}

