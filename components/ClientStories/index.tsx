/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import videoImg from '../../public/images/video/1920x1080_video-07.webp'

export default function CLIENTSTORIES() {

    const [play, setPlay] = useState(false);
    return (
        <>

            <section className="mxd-section ">
                <div className="mxd-container grid-container">
                    <div className="mxd-block">
                        <div className="container-fluid px-0">
                            <div className="row custom-row-gap">
                                <h3 className="reveal-type center-text">
                                    Client Stories In Their Own Words
                                </h3>
                                <div className="col-6 mxd-grid-item col-bg">
                                    <div className="mxd-block__name name-manifest">

                                        <div className="mxd-services-stack__controls">
                                            <a className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay card-btn" href="https://youtu.be/hoEJN4ynoHQ?si=stkVlQrFI9vqcGl8">
                                                <i className="ph ph-arrow-up-right"></i></a>
                                        </div>
                                        <div className="youtubeIframeWrap">
                                            <iframe height="315" src="https://www.youtube.com/embed/hoEJN4ynoHQ?si=1bvXHgRiSwe9lXA_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                        <p>Alyessa shares her amazing experience with Pulse Native! 🌟✨</p>

                                    </div>

                                </div>

                                <div className="col-6  mxd-grid-item col-bg">
                                    <div className="mxd-block__name name-manifest">

                                        <div className="mxd-services-stack__controls">
                                            <a className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay card-btn" href="https://youtu.be/k24V0YWHk-U?si=5CSWFSD90TpvoAe6">
                                                <i className="ph ph-arrow-up-right"></i></a>
                                        </div>

                                        <div className="youtubeIframeWrap">

                                            <iframe height="315" src="https://www.youtube.com/embed/k24V0YWHk-U?si=HbnfeM63GSNKc2aj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                            
                                        </div>
                                        <p>Transformative Learning Experience: A Client's Journey with Custom LMS</p>



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