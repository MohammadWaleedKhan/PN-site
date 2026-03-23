/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";

export default function TestimonialsSlider() {
  return (
    <>
      <div className="testimonials-slider overflow-hidden anim-uni-in-up">
        {/* <!-- slider main container --> */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Parallax]}
          slidesPerView={"auto"}
          grabCursor={true}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          parallax={true}
          // loopFillGroupWithBlank={true}
          pagination={{
            el: ".swiper-pagination",
            type: "fraction",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper-testimonials"
        >
          <SwiperSlide>
            <div className="mxd-testimonials-card bg-base-tint radius-m">
              <div className="mxd-testimonials-card__content">
                <div className="mxd-testimonials-card__media anim-uni-in-up">
                  {/* <div className="mxd-testimonials-card__photo">
                    <img
                      src="/images/avatars/300x300_ava-05.webp"
                      alt="Author Photo"
                    />
                  </div> */}
                  <div className="mxd-testimonials-card__company">
                    <img src="/images/imgi_55_Amari-2.png" alt="Company Logo" />
                  </div>
                </div>
                <div className="mxd-testimonials-card__text">
                  <p className="anim-uni-in-up">
                    Working with PulseNative was a pleasure. Their meticulous
                    attention to detail and dedication to meeting our
                    requirements were impressive. The team was consistently
                    available, communicated effectively regarding revisions, and
                    delivered exactly what we wanted. We will certainly work
                    with PulseNative again.
                  </p>
                  {/* <a
                    className="btn btn-anim btn-default btn-small btn-outline slide-right-up anim-uni-in-up"
                    href="#0"
                  >
                    <span className="btn-caption">Project Page</span>
                    <i className="ph ph-arrow-up-right"></i>
                  </a> */}
                </div>
              </div>
              <div className="mxd-testimonials-card__author">
                <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                  Amari Agency
                </h5>
                {/* <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                  Senior designer in
                  <a className="" href="#">
                    The Way
                  </a>
                </p> */}
              </div>
            </div>
          </SwiperSlide>
          {/* <!-- single slide --> */}
          <SwiperSlide>
            <div className="mxd-testimonials-card bg-base-tint radius-m">
              <div className="mxd-testimonials-card__content">
                <div className="mxd-testimonials-card__media anim-uni-in-up">
                  <div className="mxd-testimonials-card__photo">
                    <img
                      src="/images/ellipse5.png"
                      alt="Author Photo"
                    />
                  </div>
                  {/* <div className="mxd-testimonials-card__company">
                    <img src="/images/brands/envato.svg" alt="Company Logo" />
                  </div> */}
                </div>
                <div className="mxd-testimonials-card__text">
                  <p className="anim-uni-in-up">
                    My experience with PulseNative was outstanding. The
                    communication throughout the project was excellent, and the
                    final result was a successfully completed project that
                    exceeded our expectations. I look forward to collaborating
                    with PulseNative again soon. Highly recommended.
                  </p>
                  {/* <a
                    className="btn btn-anim btn-default btn-small btn-outline slide-right-up anim-uni-in-up"
                    href="#0"
                  >
                    <span className="btn-caption">Project Page</span>
                    <i className="ph ph-arrow-up-right"></i>
                  </a> */}
                </div>
              </div>
              <div className="mxd-testimonials-card__author">
                <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                  Alejandro Nunez.
                </h5>
                {/* <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                  SEO in
                  <a className="" href="#">
                    Eye Candy
                  </a>
                </p> */}
              </div>
            </div>
          </SwiperSlide>
          {/* <!-- single slide --> */}
          <SwiperSlide>
            <div className="mxd-testimonials-card bg-base-tint radius-m">
              <div className="mxd-testimonials-card__content">
                <div className="mxd-testimonials-card__media anim-uni-in-up">
                  <div className="mxd-testimonials-card__photo">
                    <img
                      src="/images/ellipse5.png"
                      alt="Author Photo"
                    />
                  </div>
                  {/* <div className="mxd-testimonials-card__company">
                    <img src="/images/brands/envato.svg" alt="Company Logo" />
                  </div> */}
                </div>
                <div className="mxd-testimonials-card__text">
                  <p className="anim-uni-in-up">
                    This was my second time working with PulseNative for a Figma
                    design, and it went great as always. They worked super fast,
                    were willing to make changes, and the overall design looked
                    fantastic. There was some room for improvement in following
                    initial instructions, but the team was happy to make changes
                    after providing examples. I’ll definitely be back.
                  </p>
                  {/* <a
                    className="btn btn-anim btn-default btn-small btn-outline slide-right-up anim-uni-in-up"
                    href="#0"
                  >
                    <span className="btn-caption">Project Page</span>
                    <i className="ph ph-arrow-up-right"></i>
                  </a> */}
                </div>
              </div>
              <div className="mxd-testimonials-card__author">
                <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                  Ryan Hurly.
                </h5>
                {/* <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                  SEO in
                  <a className="" href="#">
                    Instant Design
                  </a>
                </p> */}
              </div>
            </div>
          </SwiperSlide>
          {/* <!-- single slide --> */}
          <SwiperSlide>
            <div className="mxd-testimonials-card bg-base-tint radius-m">
              <div className="mxd-testimonials-card__content">
                <div className="mxd-testimonials-card__media anim-uni-in-up">
                  {/* <div className="mxd-testimonials-card__photo">
                    <img
                      src="/images/avatars/300x300_ava-03.webp"
                      alt="Author Photo"
                    />
                  </div> */}
                  <div className="mxd-testimonials-card__company">
                    <img src="/images/imgi_53_Kayode.png" alt="Company Logo" />
                  </div>
                </div>
                <div className="mxd-testimonials-card__text">
                  <p className="anim-uni-in-up">
                    We engaged PulseNative to design a website for our SaaS
                    platform. They patiently gathered all requirements and
                    delivered a fantastic website that not only met but
                    surpassed our expectations. We are extremely happy with the
                    results and will surely hire PulseNative again if the need
                    arises.
                  </p>
                </div>
              </div>
              <div className="mxd-testimonials-card__author">
                <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                  Kayode Olusegun.
                </h5>
              </div>
            </div>
          </SwiperSlide>
          {/* <!-- single slide --> */}
          <SwiperSlide>
            <div className="mxd-testimonials-card bg-base-tint radius-m">
              <div className="mxd-testimonials-card__content">
                <div className="mxd-testimonials-card__media anim-uni-in-up">
                  {/* <div className="mxd-testimonials-card__photo">
                    <img
                      src="/images/avatars/300x300_ava-03.webp"
                      alt="Author Photo"
                    />
                  </div> */}
                  <div className="mxd-testimonials-card__company">
                    <img src="/images/imgi_69_Thomas-2.png" alt="Company Logo" />
                  </div>
                </div>
                <div className="mxd-testimonials-card__text">
                  <p className="anim-uni-in-up">
                    PulseNative was incredibly professional and communicated
                    extremely well with us throughout the project. Not only was
                    the project completed in a timely manner, but all revisions
                    were accepted and executed quickly without hassle. We will
                    definitely hire PulseNative again and look forward to their
                    help in managing future growth opportunities with graphic
                    design.
                  </p>
                </div>
              </div>
              <div className="mxd-testimonials-card__author">
                <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                  Thomas Bean.
                </h5>
              </div>
            </div>
          </SwiperSlide>
          {/* <!-- single slide --> */}
          <SwiperSlide>
            <div className="mxd-testimonials-card bg-base-tint radius-m">
              <div className="mxd-testimonials-card__content">
                <div className="mxd-testimonials-card__media anim-uni-in-up">
                  {/* <div className="mxd-testimonials-card__photo">
                    <img
                      src="/images/avatars/300x300_ava-03.webp"
                      alt="Author Photo"
                    />
                  </div> */}
                  <div className="mxd-testimonials-card__company">
                    <img src="/images/imgi_49_Rich-2.png" alt="Company Logo" />
                  </div>
                </div>
                <div className="mxd-testimonials-card__text">
                  <p className="anim-uni-in-up">
                    PulseNative did a fantastic job providing us with a couple
                    of different looks to choose from. They worked closely with
                    us throughout the process, tweaking designs, trying
                    different images, and modifying text as needed. The
                    turnaround time was quick, and we were extremely impressed
                    with the quality of work we received, especially for the
                    price.
                  </p>
                </div>
              </div>
              <div className="mxd-testimonials-card__author">
                <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                  Rich Crandall.
                </h5>
              </div>
            </div>
          </SwiperSlide>
          {/* <!-- single slide --> */}
          <SwiperSlide>
            <div className="mxd-testimonials-card bg-base-tint radius-m">
              <div className="mxd-testimonials-card__content">
                <div className="mxd-testimonials-card__media anim-uni-in-up">
                  {/* <div className="mxd-testimonials-card__photo">
                    <img
                      src="/images/avatars/300x300_ava-03.webp"
                      alt="Author Photo"
                    />
                  </div> */}
                  <div className="mxd-testimonials-card__company">
                    <img src="/images/imgi_48_Victoria-2.png" alt="Company Logo" />
                  </div>
                </div>
                <div className="mxd-testimonials-card__text">
                  <p className="anim-uni-in-up">
                    PulseNative is highly skilled in design and incredibly
                    flexible with on-the-spot changes. The quality of their work
                    is fantastic, and we will definitely rehire them for future
                    projects.
                  </p>
                </div>
              </div>
              <div className="mxd-testimonials-card__author">
                <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                  Victoria O.
                </h5>
              </div>
            </div>
          </SwiperSlide>
          {/* <!-- single slide --> */}
          <SwiperSlide>
            <div className="mxd-testimonials-card bg-base-tint radius-m">
              <div className="mxd-testimonials-card__content">
                <div className="mxd-testimonials-card__media anim-uni-in-up">
                  {/* <div className="mxd-testimonials-card__photo">
                    <img
                      src="/images/avatars/300x300_ava-03.webp"
                      alt="Author Photo"
                    />
                  </div> */}
                  <div className="mxd-testimonials-card__company">
                    <img src="/images/imgi_51_Andy-2.png" alt="Company Logo" />
                  </div>
                </div>
                <div className="mxd-testimonials-card__text">
                  <p className="anim-uni-in-up">
                    We recently worked with PulseNative to create a PowerPoint
                    deck, and the team understood our vision well. Their
                    communication was clear and proactive throughout the
                    process. Despite a tight deadline and mid-project changes,
                    they remained flexible and responsive. The final
                    presentation perfectly reflected our company’s
                    professionalism.
                  </p>
                </div>
              </div>
              <div className="mxd-testimonials-card__author">
                <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                  Andy Pate, SCG.
                </h5>
              </div>
            </div>
          </SwiperSlide>
          {/* <!-- navigation buttons --> */}
          <div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-round-prev animate-card-2">
            <a
              className="btn btn-round btn-round-small btn-outline slide-left anim-no-delay"
              href="#0"
            >
              <i className="ph ph-arrow-left"></i>
            </a>
          </div>
          <div className="swiper-button-next mxd-slider-btn mxd-slider-btn-round-next animate-card-2">
            <a
              className="btn btn-round btn-round-small btn-outline slide-right anim-no-delay"
              href="#0"
            >
              <i className="ph ph-arrow-right"></i>
            </a>
          </div>
        </Swiper>

        <div className="testimonials-slider__shadow"></div>
      </div>
    </>
  );
}
