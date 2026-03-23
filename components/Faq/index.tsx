
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Accordion } from "react-bootstrap";

import FaqImg from '../../public/images/faq_img.png'


export default function FAQ() {
    return (
        <>

            <section className="mxd-section  padding-hero-01">
                <div className="mxd-container grid-container">
                    {/* <!-- Block - About Description with Manifest Start --> */}
                    <div className="mxd-block">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-xl-5 mxd-grid-item">
                                    <div className="mxd-block__name name-manifest">
                                        <h2 className="reveal-type">
                                            Frequently  
                                            <br />
                                            Asked
                                            <br />
                                            Question
                                        </h2>
                                    </div>

                                    <div className="mxd-manifest__controls anim-uni-in-up">
                                        <a
                                            className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                                            href="contact.html"
                                        >
                                            <span className="btn-caption">Lets Work</span>
                                            <i className="ph-bold ph-arrow-up-right"></i>
                                        </a>
                                    </div>
                                    <div className="faqimg">  
                                        <img src={FaqImg.src} alt="FAQ" />
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 mxd-grid-item">
                                    <div className="mxd-block__content">
                                        <div className="mxd-block__manifest">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header className="t-bright">After my site is built, how will it be updated or maintained?</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p className="t-bright">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.

                                                        </p>
                                                    </Accordion.Body>


                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>How much does a website cost?</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.

                                                        </p>
                                                    </Accordion.Body>
                                                </Accordion.Item>


                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>How much does a website cost?</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.

                                                        </p>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>How much does a website cost?</Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.

                                                        </p>
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>

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
