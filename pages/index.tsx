import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Row, Container, Tab, Nav, Accordion } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Spline from "@splinetool/react-spline";
import MarqueeImages from "@/components/MarqueeImages";
import AwardsList from "@/components/AwardsList";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ShowreelMagnific from "@/components/TemplateScripts/init/ShowreelPopupInit";
import PartnerMarqueeImages from "@/components/OurPartnerMarquee";
import ClientStories from "@/components/ClientStories";
import FAQ from "@/components/Faq";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
      </Head>

      {/* <!-- Hero Section Start --> */}
      <section className="mxd-section mxd-hero-section mxd-hero-fullheight">
        <div className="mxd-hero-01">
          <div className="mxd-hero-01__wrap loading-wrap">
            {/* <!-- top group --> */}
            <div className="mxd-hero-01__top">
              <div className="mxd-hero-01__title-wrap">
                {/* <!-- title images --> */}
                <div className="mxd-hero-01__images mxd-floating-img">
                  <div className="hero-01-image image-01 mxd-floating-img__item loading__fade">
                    <img
                      className="mxd-pulse"
                      src="/images/react-js-3d-icon.svg"
                      alt="Hero Image"
                    />
                  </div>
                  <div className="hero-01-image image-02 mxd-floating-img__item loading__fade">
                    <img
                      className="mxd-move"
                      src="/images/figma-logo-3d-icon-render-image.svg"
                      alt="Hero Image"
                    />
                  </div>
                  {/* <div className="hero-01-image image-03 mxd-floating-img__item loading__fade">
                    <img
                      className="mxd-rotate"
                      src="/images/hero/03_hero-img.webp"
                      alt="Hero Image"
                    />
                  </div> */}
                </div>
                {/* <!-- title marquee --> */}
                <div className="mxd-hero-01__marquee loading__item">
                  <div className="marquee marquee-right--gsap">
                    <div className="marquee__toright marquee-flex">
                      {/* <!-- single item --> */}
                      <div className="marquee__item item-regular text">
                        <p>Your Digital</p>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 80 80"
                          fill="currentColor"
                        >
                          <path
                            fill="currentColor"
                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                            c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                            c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                            C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                            c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                            s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                            c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                            "
                          />
                        </svg>
                        {/* <!-- <img className="inject-me" src="/images/icons/20x20-rayo-star.svg" alt="Divider Icon"> --> */}
                      </div>
                      {/* <!-- single item --> */}
                      <div className="marquee__item item-regular text">
                        <p>Your Digital</p>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 80 80"
                          fill="currentColor"
                        >
                          <path
                            fill="currentColor"
                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                            c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                            c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                            C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                            c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                            s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                            c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                            "
                          />
                        </svg>
                        {/* <!-- <img className="inject-me" src="/images/icons/20x20-rayo-star.svg" alt="Divider Icon"> --> */}
                      </div>
                      {/* <!-- single item --> */}
                      <div className="marquee__item item-regular text">
                        <p>Your Digital</p>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 80 80"
                          fill="currentColor"
                        >
                          <path
                            fill="currentColor"
                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                            c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                            c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                            C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                            c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                            s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                            c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                            "
                          />
                        </svg>
                        {/* <!-- <img className="inject-me" src="/images/icons/20x20-rayo-star.svg" alt="Divider Icon"> --> */}
                      </div>
                      {/* <!-- single item --> */}
                      <div className="marquee__item item-regular text">
                        <p>Your Digital</p>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 80 80"
                          fill="currentColor"
                        >
                          <path
                            fill="currentColor"
                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                            c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                            c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                            C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                            c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                            s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                            c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                            "
                          />
                        </svg>
                        {/* <!-- <img className="inject-me" src="/images/icons/20x20-rayo-star.svg" alt="Divider Icon"> --> */}
                      </div>
                      {/* <!-- single item --> */}
                      <div className="marquee__item item-regular text">
                        <p>Your Digital</p>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 80 80"
                          fill="currentColor"
                        >
                          <path
                            fill="currentColor"
                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                            c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                            c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                            C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                            c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                            s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                            c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                            "
                          />
                        </svg>
                        {/* <!-- <img className="inject-me" src="/images/icons/20x20-rayo-star.svg" alt="Divider Icon"> --> */}
                      </div>
                      {/* <!-- single item --> */}
                      <div className="marquee__item item-regular text">
                        <p>Your Digital</p>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 80 80"
                          fill="currentColor"
                        >
                          <path
                            fill="currentColor"
                            d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                            c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                            c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                            C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                            c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                            s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                            c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                            "
                          />
                        </svg>
                        {/* <!-- <img className="inject-me" src="/images/icons/20x20-rayo-star.svg" alt="Divider Icon"> --> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- title text --> */}
                <h1 className="hero-01-title">
                  <span className="hero-01-title__row loading__item">
                    <em className="hero-01-title__item">Bringing</em>
                    <em className="hero-01-title__item title-item-transparent">
                      Your Digital
                    </em>
                  </span>
                  <span className="hero-01-title__row loading__item">
                    <em className="hero-01-title__item title-item-image">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 20 20"
                      >
                        <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                      </svg>
                      {/* <!-- <img className="inject-me" src="/images/icons/20x20-rayo-star.svg" alt="Divider Icon"> --> */}
                    </em>
                    <em className="hero-01-title__item">Dreams To Life</em>
                  </span>
                </h1>
              </div>
            </div>
            {/* <!-- bottom group --> */}
            <div className="mxd-hero-01__bottom">
              <div className="mxd-hero-01__data-wrap">
                <div className="mxd-hero-01__dash-line dash-line loading__fade"></div>
                <div className="mxd-hero-01__data-btn loading__fade">
                  <a
                    href="#projects"
                    className="btn-rotating btn-rotating-120-160"
                  >
                    {/* <!-- SVG rotating text --> */}
                    <svg
                      version="1.1"
                      id="scrollDown"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 160 160"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform:
                          "translate3d(0px, 0px, 0px) rotate(327.138deg)",
                      }}
                      xmlSpace="preserve"
                      className="btn-rotating__text animate-rotation"
                      data-value="360"
                    >
                      <defs>
                        <path
                          id="textPath"
                          d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                        ></path>
                      </defs>
                      <g>
                        <use xlinkHref="#textPath" fill="none"></use>
                        <text>
                          {/* <!-- button text here!!! --> */}
                          <textPath xlinkHref="#textPath">
                            Scroll for More * Scroll for More * Scroll for More
                            *{" "}
                          </textPath>
                        </text>
                      </g>
                    </svg>
                    {/* <!-- image --> */}
                    <img
                      className="btn-rotating__image"
                      src="/images/blue-arrow-pointing-up-with-word-x-it.svg"
                      alt="Object"
                    />
                  </a>
                </div>
                <div className="mxd-hero-01__data-descr loading__fade">
                  <p className="t-bright">
                    We are a creative digital agency specializing in innovative
                    design and cutting-edge development.
                  </p>
                   <a
                      className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                      href="contact.html"
                    >
                      <span className="btn-caption">Connect with Specialist Now</span>
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </a>
                </div>
                <div className="mxd-hero-01__data-socials loading__fade">
                  <ul>
                    <li>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                          c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                          c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                          C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                          c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                          s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                          c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                          "
                        />
                      </svg>
                      <a href="https://dribbble.com/" target="_blank">
                        Linkedin
                      </a>
                    </li>
                   
                    <li>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 80 80"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                          c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                          c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                          C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                          c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                          s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                          c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                          "
                        />
                      </svg>
                      <a href="https://www.instagram.com/" target="_blank">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mxd-hero-01__video-wrap loading__item">
                <video
                  className="mxd-hero-01__video"
                  preload="auto"
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
                <div className="mxd-hero-01__video-btn">
                  <a
                    id="showreel-trigger"
                    className="btn btn-round btn-round-medium btn-accent slide-right anim-no-delay showreel-trigger"
                    href="https://vimeo.com/65036292"
                  >
                    <i className="ph-fill ph-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}
      
      
      {/* <!-- Section - Parallax Divider Start --> */}
      <section className="mxd-section padding-hero-01 padding-pre-manifest mobile-point-subtitle">
        <div className="mxd-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image divider-image-1 parallax-img">
              {/* <!-- <img className="parallax-img" src="/images/illustrations/1920x1080_divider-01.webp" alt=""> --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section - Parallax Divider End --> */}
{/* <!-- Section - Marquee Text One Line Start --> */}
      <section className="mxd-section padding-mtext-pre-pinned">
        <div className="mxd-container fullwidth-container">
          {/* <!-- Block - Marquee Text One Line Start --> */}
          <div className="mxd-block">
            <div className="marquee marquee-right--gsap muted-extra">
              <div className="marquee__toright">
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">About Us</p>
                  <div className="marquee__image">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 80 80"
                      fill="currentColor"
                    >
                      <path
                        fill="currentColor"
                        d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                      />
                    </svg>
                  </div>
                </div>
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">About Us</p>
                  <div className="marquee__image">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 80 80"
                      fill="currentColor"
                    >
                      <path
                        fill="currentColor"
                        d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                      />
                    </svg>
                  </div>
                </div>
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">About Us</p>
                  <div className="marquee__image">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 80 80"
                      fill="currentColor"
                    >
                      <path
                        fill="currentColor"
                        d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                      />
                    </svg>
                  </div>
                </div>
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">About Us</p>
                  <div className="marquee__image">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 80 80"
                      fill="currentColor"
                    >
                      <path
                        fill="currentColor"
                        d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                      />
                    </svg>
                  </div>
                </div>
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">About Us</p>
                  <div className="marquee__image">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 80 80"
                      fill="currentColor"
                    >
                      <path
                        fill="currentColor"
                        d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                        c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                        c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                        C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                        c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                        s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                        c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                        "
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Marquee Text One Line End --> */}
        </div>
      </section>
      {/* <!-- Section - Marquee Text One Line End --> */}
      {/* <!-- Section - About Start --> */}
      <section className="mxd-section padding-pre-grid">
        <div className="mxd-container grid-container">
          {/* <!-- Block - About Description with Manifest Start --> */}
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-manifest">
                    <p className="mxd-point-subtitle anim-uni-in-up">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                          c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                          c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                          c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                          c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                          c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                          c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
                        />
                      </svg>
                      <span>Get to Know About Us</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__manifest">
                      <p className=" reveal-type anim-uni-in-up">
                        Welcome to PulseNative, your trusted partner for exceptional software services. At PulseNative, we are passionate about crafting compelling digital experiences that captivate users and drive business growth. With our expertise in UI/UX design and development, we specialize in creating intuitive and engaging interfaces for web and mobile applications
                      </p>
                      <div className="mxd-manifest__controls anim-uni-in-up">
                        <a
                          className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                          href="contact.html"
                        >
                          <span className="btn-caption">Lets Work</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - About Description with Manifest End --> */}
        </div>
      </section>
      {/* <!-- Section - About End --> */}

      {/* <!-- Section - Statistics Cards Start --> */}
      <section className="mxd-section padding-grid-pre-mtext overflow-hidden">
        <div className="mxd-container grid-container">
          {/* <!-- Block - Statistics Cards Start --> */}
          <div className="mxd-block">
            <div className="mxd-stats-cards">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  {/* <!-- item --> */}
                  <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                      <div className="mxd-counter align-end">
                        <p
                          id="stats-counter-1"
                          className="mxd-counter__number mxd-stats-number"
                        >
                          0
                        </p>
                        <p className="mxd-counter__descr t-140 t-bright">
                          Years Experience
                        </p>
                      </div>
                      {/* <div className="mxd-stats-cards__btngroup">
                        <a
                          className="btn btn-anim btn-default btn-outline  slide-right-up"
                          href="about-us.html"
                        >
                          <span className="btn-caption">Studio</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div> */}
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-1">
                        <img
                          src="/images/experience.png"
                          alt="Experience"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- item --> */}
                  <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-stats-cards__inner align-end bg-accent radius-m padding-4">
                      <div className="mxd-stats-cards__btngroup">
                        <div className="mxd-avatars">
                          <div className="mxd-avatars__item">
                            <img
                              src="/images/avatars/300x300_ava-02.webp"
                              alt="Avatar"
                            />
                          </div>
                          <div className="mxd-avatars__item bg-base-opp">
                            <svg
                              className="mxd-avatars__icon"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              width="60px"
                              height="60px"
                              viewBox="0 0 60 60"
                              xmlSpace="preserve"
                            >
                              <path
                                className="icon-star"
                                d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7c-1.4-1-2.7-2.3-3.6-3.7
                                c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1
                                c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5
                                c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7
                                c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
                                c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3c1.4-1,3.1-1.5,4.8-1.7
                                c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z"
                              />
                            </svg>
                          </div>
                          <div className="mxd-avatars__item">
                            <img
                              src="/images/avatars/300x300_ava-01.webp"
                              alt="Avatar"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mxd-counter align-end">
                        <p
                          id="stats-counter-2"
                          className="mxd-counter__number mxd-stats-number opposite"
                        >
                          0
                        </p>
                        <p className="mxd-counter__descr t-140 t-bright opposite">
                          Professionals In
                          <br />Our Team
                        </p>
                      </div>
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-2">
                        <img
                          src="/images/our_team.png"
                          alt="Our Team"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- item --> */}
                  <div className="col-12 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                      <div className="mxd-counter">
                        <p
                          id="stats-counter-3"
                          className="mxd-counter__number mxd-stats-number"
                        >
                          0
                        </p>
                        <p className="mxd-counter__descr t-140 t-bright">
                          Projects Done
                        </p>
                      </div>
                      {/* <div className="mxd-stats-cards__btngroup">
                        <a
                          className="btn btn-anim btn-default btn-outline slide-right-down"
                          href="contact.html"
                        >
                          <span className="btn-caption">Start New Project</span>
                          <i className="ph-bold ph-arrow-down-right"></i>
                        </a>
                      </div> */}
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                        <img
                          src="/images/projects_done.png"
                          alt="Projects Done"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- item --> */}
                  {/* <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                      <div className="mxd-counter">
                        <p
                          id="stats-counter-4"
                          className="mxd-counter__number mxd-stats-number"
                        >
                          0
                        </p>
                        <p className="mxd-counter__descr t-140 t-bright">
                          Successfully
                          <br />
                          completed projects
                        </p>
                      </div>
                      <div className="mxd-stats-cards__btngroup">
                        <a
                          className="btn btn-anim btn-default btn-outline slide-right-up"
                          href="works-simple.html"
                        >
                          <span className="btn-caption">Works</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div>
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                        <img
                          src="/images/illustrations/800x800_card-image-04.webp"
                          alt="Illustration"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Statistics Cards End --> */}
        </div>
      </section>
      {/* <!-- Section - Statistics Cards End --> */}

      

      {/* <!-- Section - Projects Pinned #01 Start --> */}
      <section id="projects" className="mxd-section padding-pre-stack">
        <div className="mxd-container grid-container">
          {/* <!-- Block - Projects Pinned #01 with Section Title Start --> */}
          <div className="mxd-block">
            <div className="mxd-pinned-projects">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-pinned-projects__static">
                    <div className="mxd-pinned-projects__static-inner no-margin">
                      {/* <!-- Section Title Start --> */}
                      <div className="mxd-section-title no-margin-desktop">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__title anim-uni-in-up">
                                <h2 className="reveal-type">
                                  Featured
                                  <br />
                                  projects
                                </h2>
                              </div>
                            </div>
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__descr anim-uni-in-up">
                                <p>
                                  Explore a selection of projects blending
                                  <br />
                                  creativity with practical design
                                </p>
                              </div>
                            </div>
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__controls anim-uni-in-up">
                                <a
                                  className="btn btn-anim btn-default btn-outline slide-right-up"
                                  href="works-simple.html"
                                >
                                  <span className="btn-caption">All Works</span>
                                  <i className="ph-bold ph-arrow-up-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Section Title Start --> */}
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 mxd-pinned-projects__scroll">
                    <div className="mxd-pinned-projects__scroll-inner mxd-grid-item no-margin">
                      {/* <!-- item --> */}
                      <div className="mxd-project-item">
                        <a
                          className="mxd-project-item__media anim-uni-in-up"
                          href="project-details.html"
                        >
                          <div className="mxd-project-item__name">Vela Sail Website</div>
                          <div className="mxd-project-item__preview preview-image-1 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              UI/UX
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Web design
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Illustrations
                            </span>
                          </div>
                        </a>
                        {/* <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <a
                              className="anim-uni-in-up"
                              href="project-details.html"
                            >
                              <span>Creative studio</span> template for modern
                              agencies
                            </a>
                          </div>
                        </div> */}
                      </div>
                      {/* <!-- item --> */}
                      <div className="mxd-project-item">
                        <a
                          className="mxd-project-item__media anim-uni-in-up"
                          href="project-details.html"
                        >
                          <div className="mxd-project-item__name">Paws Contest Mobile App</div>
                          <div className="mxd-project-item__preview preview-image-2 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              Sora
                            </span>
                            <span className="tag tag-default tag-permanent">
                              AI
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Editorial
                            </span>
                          </div>
                        </a>
                      
                      </div>
                      {/* <!-- item --> */}
                      <div className="mxd-project-item">
                        <a
                          className="mxd-project-item__media"
                          href="project-details.html"
                        >
                          <div className="mxd-project-item__name">Pop Photography Website</div>
                          <div className="mxd-project-item__preview preview-image-3 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              UI/UX
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Design
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Android
                            </span>
                          </div>
                        </a>
                      
                      </div>
                      {/* <!-- item --> */}
                      <div className="mxd-project-item">
                        <a
                          className="mxd-project-item__media anim-uni-in-up"
                          href="project-details.html"
                        >
                          <div className="mxd-project-item__name">Exit Ramp Dashboard</div>
                          <div className="mxd-project-item__preview preview-image-4 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              Brand identity
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Style guides
                            </span>
                          </div>
                        </a>
                       
                      </div>
                      {/* <!-- item --> */}
                      {/* <div className="mxd-project-item">
                        <a
                          className="mxd-project-item__media anim-uni-in-up"
                          href="project-details.html"
                        >
                          <div className="mxd-project-item__preview preview-image-5 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              Illustrations
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Design
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Packaging
                            </span>
                          </div>
                        </a>
                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <a
                              className="anim-uni-in-up"
                              href="project-details.html"
                            >
                              <span>Illustrations set</span> developed for
                              digital and print use.
                            </a>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Projects Pinned #01 with Section Title Start --> */}
        </div>
      </section>
      {/* <!-- Section - Projects Pinned #01 End --> */}

      {/* <!-- Section - Services/Features Stacking Cards Start --> */}
      <section className="mxd-section padding-stacked-section">
        <div className="mxd-container grid-container">
          {/* <!-- Block - Services/Features Stacking Cards Start --> */}
          <div className="mxd-block mxd-grid-item no-margin">
            <div className="content__block">
              <div className="stack-wrapper in-content-stack">
                <div className="stack-offset"></div>
                <div className="services-stack">
                  {/* <!-- services stack single item --> */}
                  <div className="stack-item">
                    <div className="mxd-services-stack__inner justify-between bg-base-opp">
                      <div className="mxd-services-stack__controls">
                        <a
                          className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                          href="services.html"
                        >
                          <i className="ph ph-arrow-up-right"></i>
                        </a>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3 className="opposite">
                          UI/UX Design
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline-opposite">
                            UI/UX
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Website Design
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Web App Design
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Mobile App Design
                          </span>
                         
                        </div>
                        <p className="t-small-mobile t-opposite">
                          Your digital presence starts with a captivating and user-friendly design. We create visually appealing and intuitive user interfaces that enhance user experiences, ensuring your website or app stands out.
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img
                          className="service-img service-img-s"
                          src="/images/uiux_image.png"
                          alt="Service/Feature Image"
                        />
                        <img
                          className="service-img service-img-m"
                          src="/images/uiux_image.png"
                          alt="Service/Feature Image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- services stack single item --> */}
                  <div className="stack-item">
                    <div className="mxd-services-stack__inner justify-between bg-accent">
                      <div className="mxd-services-stack__controls">
                        <a
                          className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                          href="services.html"
                        >
                          <i className="ph ph-arrow-up-right"></i>
                        </a>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3 className="opposite">
                          Website Development
                         
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline-opposite">
                            Web Development
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Custom Website Solutions
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Responsive UI/UX
                          </span>
                         
                        </div>
                        <p className="t-small-mobile t-opposite">
                          We build responsive, high-performance websites tailored to your unique business needs, ensuring a seamless online experience.
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img
                          className="service-img service-img-s"
                          src="/images/development_image.png"
                          alt="Service/Feature Image"
                        />
                        <img
                          className="service-img service-img-m"
                          src="/images/development_image.png"
                          alt="Service/Feature Image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- services stack single item --> */}
                  <div className="stack-item">
                    <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                      <div className="mxd-services-stack__controls">
                        <a
                          className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                          href="services.html"
                        >
                          <i className="ph ph-arrow-up-right"></i>
                        </a>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3>
                          Mobile App Developement
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline">
                            Mobile App Solutions
                          </span>
                          <span className="tag tag-default tag-outline">
                            IOS & Android App Development
                          </span>
                          <span className="tag tag-default tag-outline">
                            UI/UX mobile Design
                          </span>
                         
                        </div>
                        <p className="t-small-mobile">
                         We craft mobile apps that are not just functional but engaging, providing your users with a seamless and enjoyable experience.
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img
                          className="service-img service-img-s"
                          src="/images/app_image.png"
                          alt="Service/Feature Image"
                        />
                        <img
                          className="service-img service-img-m"
                          src="/images/app_image.png"
                          alt="Service/Feature Image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- services stack single item --> */}
                  <div className="stack-item">
                    <div className="mxd-services-stack__inner justify-between bg-accent">
                      <div className="mxd-services-stack__controls">
                        <a
                          className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                          href="services.html"
                        >
                          <i className="ph ph-arrow-up-right"></i>
                        </a>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3 className="opposite">
                          Social Media Marketing
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline-opposite">
                            Social Media Management
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Brand Engagement
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Paid Ads
                          </span>
                          
                        </div>
                        <p className="t-small-mobile t-opposite">
                          In the age of social media, effective marketing on platforms like Facebook, Instagram, and Twitter is essential. Our team crafts engaging social media strategies to increase your brand’s reach and engagement.
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img
                          className="service-img service-img-s"
                          src="/images/social_image.png"
                          alt="Service/Feature Image"
                        />
                        <img
                          className="service-img service-img-m"
                          src="/images/social_image.png"
                          alt="Service/Feature Image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- services stack single item --> */}
                  <div className="stack-item">
                    <div className="mxd-services-stack__inner justify-between bg-base-opp">
                      <div className="mxd-services-stack__controls">
                        <a
                          className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                          href="services.html"
                        >
                          <i className="ph ph-arrow-up-right"></i>
                        </a>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3 className="opposite">
                          Graphic Design
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline-opposite">
                            Visual Branding
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Professional Logo
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Identity Design
                          </span>
                        
                        </div>
                        <p className="t-small-mobile t-opposite">
                          Visual identity is a powerful tool for brand recognition. We craft eye-catching visuals, logos, and marketing collateral that reflect your brand’s personality and captivate your audience.
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img
                          className="service-img service-img-s"
                          src="/images/graphic_image.png"
                          alt="Service/Feature Image"
                        />
                        <img
                          className="service-img service-img-m"
                          src="/images/graphic_image.png"
                          alt="Service/Feature Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Services/Features Stacking Cards End --> */}
        </div>
      </section>
      {/* <!-- Section - Services/Features Stacking Cards End --> */}

      {/* <!-- Section - Approach and Philosophy Start --> */}
      <section className="mxd-section padding-pre-grid mobile-grid-s">
        <div className="mxd-container grid-container">
          {/* <!-- Block - Section Title Start --> */}
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle anim-uni-in-up">
                      <h2 className="reveal-type">Approach and philosophy</h2>
                    </div>
                  </div>
                  {/* <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">Design</p>
                      <p className="anim-uni-in-up">Development</p>
                      <p className="anim-uni-in-up">Mastership</p>
                    </div>
                  </div> */}
                  <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                      <a
                        className="btn btn-anim btn-default btn-outline slide-right-up"
                        href="contact.html"
                      >
                        <span className="btn-caption">Get Started</span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Section Title End --> */}

          {/* <!-- Block - Approach and Philosophy List Start --> */}
          <div className="mxd-block">
            <div className="mxd-approach-list">
              {/* <!-- item --> */}
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img
                            src="/images/perfection_icon.svg"
                            alt="Icon"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>Perfection</h6>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            From pixel-perfect designs to flawless code, every
                            aspect of our projects is crafted with care to
                            ensure the highest standards of quality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
              {/* <!-- item --> */}
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img
                            src="/images/innovative_icon.svg"
                            alt="Icon"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>Innovative</h6>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            We stay ahead of design trends, offering modern and
                            visually impactful solutions that set your brand
                            apart.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
              {/* <!-- item --> */}
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img
                            src="/images/expertise_icon.svg"
                            alt="Icon"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>Expertise</h6>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            We are passionate about integrating the latest
                            technologies and trends, including interactive
                            animations and mobile-first strategies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
              {/* <!-- item --> */}
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img
                            src="/images/full-cycle_icon.svg"
                            alt="Icon"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>Full-Cycle services</h6>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            From web design to development, branding, SEO, and
                            UX/UI, we provide a full range of services that
                            cover all your digital needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
              {/* <!-- item --> */}
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img
                            src="/images/clientsuccess_icon.svg"
                            alt="Icon"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>Client Success</h6>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            Our clients consistently see improved engagement,
                            conversion rates, and business growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
            </div>
          </div>
          {/* <!-- Block - Approach and Philosophy List Start --> */}
        </div>
      </section>
      {/* <!-- Section - Approach and Philosophy End --> */}

      {/* <!-- Section - Marquee Images Two Lines Start --> */}
      <section className="mxd-section padding-pre-title">
        <div className="mxd-container fullwidth-container">
          {/* <!-- Block - Marquee Images Two Lines Start --> */}
          <div className="mxd-block">
            <MarqueeImages />
          </div>
          {/* <!-- Block - Marquee Images Two Lines End --> */}
        </div>
      </section>
      {/* <!-- Section - Marquee Images Two Lines End --> */}

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

       {/* <!-- Section - Marquee Text One Line Start --> */}
      <section className="mxd-section padding-mtext-pre-grid">
        <div className="mxd-container fullwidth-container">

          {/* <!-- Block - Marquee Text One Line Start --> */}
          <div className="mxd-block">
            <div className="marquee marquee-right--gsap muted-extra">
              <div className="marquee__toright">
                {/* <!-- single item --> */}
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">Our Partners</p>
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
                  <p className="marquee__text">Our Partners</p>
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
                  <p className="marquee__text">Our Partners</p>
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
                  <p className="marquee__text">Our Partners</p>
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
      </section>
      {/* <!-- Section - Marquee Text One Line End --> */}

        {/* <!-- Section - Partners Cards Start --> */}
      <section className="mxd-section padding-pre-title">
        <div className="mxd-container fullwidth-container">

          {/* <!-- Block - Partners Cards Start --> */}
          <div className="mxd-block">
            <PartnerMarqueeImages />
           
          </div>
          {/* <!-- Block - Partners Cards End --> */}

        </div>
      </section>
      {/* <!-- Section - Partners Cards End --> */}

       {/* <!-- Section - Blog Preview Start --> */}
      <section className="mxd-section padding-blog">
        <div className="mxd-container grid-container">

          {/* <!-- Block - Section Title Start --> */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up">Client Stories In Their Own Words</h2>
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
                  <div className="col-12 col-xl-6 mxd-review-preview__item mxd-grid-item animate-card-3">
                    <div className="mxd-review-preview__media">
                      <div className="mxd-review-preview__video parallax-img-small">
                        <iframe src="https://www.youtube.com/watch?v=hoEJN4ynoHQ" allowFullScreen />
                      </div>
                      <div className="mxd-review-preview__content">
                        <h4>Alyessa shares her amazing experience with Pulse Native! 🌟✨</h4>
                      </div>
                    </div>
                  </div>
                
                  {/* <!-- item --> */}
                  <div className="col-12 col-xl-6 mxd-blog-preview__item mxd-grid-item animate-card-3">
                    <a className="mxd-blog-preview__media" href="blog-article.html">
                      <div className="mxd-blog-preview__image blog-preview-image-3 parallax-img-small">
                        {/* <!-- <img className="parallax-img-small" src="/images/blog/preview/1000x1250_prv-03.webp" alt="Blog Preview Image"> --> */}
                      </div>
                      <div className="mxd-preview-hover">
                        <i className="mxd-preview-hover__icon">
                          <img src="/images/icons/icon-eye.svg" alt="Eye Icon" />
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
      </section>
      {/* <!-- Section - Blog Preview End --> */}

      <ClientStories/>
      <FAQ/>
      <Form/>

       {/* <!-- Section - CTA Start --> */}
      <section className="mxd-section overflow-hidden">
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
                      <img src="/images/icons/300x300_obj-cta-01.webp" alt="Icon" />
                    </span>
                    <span className="mxd-promo__caption reveal-type">Let&apos;s talk about your project!</span>
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
                  <img className="promo-image promo-image-1" src="/images/illustrations/cta-img-01.webp" alt="Image" />
                  <img className="promo-image promo-image-2" src="/images/illustrations/cta-img-02.webp" alt="Image" />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Block - CTA End --> */}

        </div>
      </section>
      {/* <!-- Section - CTA End --> */}
    </>
  );
}
