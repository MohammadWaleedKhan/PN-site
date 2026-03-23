/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import FormImg from '../../public/images/development_image.png' 
import FormImg from '../../public/images/illustrations/800x800_pinned-image-04.webp' 

export default function FORM() {
    return (
        <>

            <section className="mxd-section  padding-hero-01 setMarginBt100">
                <div className="mxd-container grid-container">
                    {/* <!-- Block - About Description with Manifest Start --> */}
                    <div className="mxd-block">
                        <div className="container-fluid px-0">
                            <div className="row gx-0 row-bg">
                                <div className="col-6 mxd-grid-item">
                                    <div className="mxd-block__name name-manifest">
                                        <h3 className="reveal-type form-heading">
                                            Let’s Work Together
                                        </h3>


                                        <form action="/submit" method="POST">

                                            <div className="mb-5">
                                                <label className="form-label">Name</label>
                                                <input type="text" name="name" className="form-control" required />
                                            </div>

                                            <div className="my-5">
                                                <label className="form-label">Email</label>
                                                <input type="email" name="email" className="form-control" required />
                                            </div>

                                            <div className="my-5">
                                                <label className="form-label">Phone Number</label>
                                                <input type="tel" name="phone" className="form-control" required />
                                            </div>

                                            <div className="my-5">
                                                <label className="form-label">Message</label>
                                                <textarea name="message" className="form-control" ></textarea>
                                            </div>


                                            <div className="d-grid">
                                                {/* <button type="submit" className="btn btn-primary">
                                                Let's Work
                                            </button> */}

                                                <div className="mxd-manifest__controls anim-uni-in-up">
                                                    <a
                                                        className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up form-btn-outline"
                                                        href="contact.html"
                                                    >
                                                        <button type="submit" className="btn btn-primary form-btn">
                                                            Let's Work
                                                        </button>
                                                        <i className="ph-bold ph-arrow-up-right"></i>
                                                    </a>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </div>

                                <div className="col-6  mxd-grid-item align-self-center">
                                    <div className="mxd-block__content">
                                        <div className="mxd-block__manifest">

                                            <div className="contactForm">
                                                <img src={FormImg.src} alt="contact form image" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}