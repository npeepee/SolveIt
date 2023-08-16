import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function Dashboard() {
  return (
      <>
        <link rel="stylesheet" href="../css/styles.css" />
        <link rel="stylesheet" href="../css/Bootstrap.css" />
        <div className="row pb-4 justify-content-center">
          <div className="col-12">
            <h1 className="font-weight700 color-white m-auto font-size60 line-height-1-15">
              The Best Cybersecurity
              <br />
              Learning Platform.
              <br />
              For Students, By Students.
            </h1>
          </div>
        </div>
        <div className="col-12">
          <p className="font-size20 max-w-540 m-auto pt-4 pb-4">
            Here at SolveIt, we aim to provide beginners to Cybersecurity
            <br className="d-none d-lg-block" />
            Their very first experience at CTFs
            <span className="color-white">
                        — in a user-friendly environment.
                    </span>
          </p>
        </div>

        <div className="col-md-5 pb-lg-0 pb-4 top-card hover hover-up-10">
          <a className="text-decoration-none cursor-pointer arrow-link" href="to the challenges page, activate only if user is registered">
            <div className="pb-4 pb-lg-0 px-0 bg-color-blue-nav-active hero-box border-radius-6 position-relative">
              <div className="position-relative container-top px-0 lottie-box">
                <lottie-player className="background-top-video" src="i need to find image" background="transparent" speed="1" loop autoplay></lottie-player>
              </div>
              <div className="bg-color-blue-nav-active">
                <h2 className="color-white font-size36-md font-size32 font-weight800">
                  Try our CTFs!
                </h2>
                <p className="font-size18-md font-size16 font-weight400">
                  Anyone can have a go at our specially created CTF challenges for beginners!
                  <br className="d-none d-lg-block" />
                  (Please do ensure that you have a registered account)
                </p>
                <div className="d-flex justify-content-center align-items-center pb-4">
                                <span className="color-white font-size18 font-weight600 mr-2 sub">
                                    Click here to go to try us out!
                                </span>
                  <svg className="arrow-icon " width="16" height="16" viewBox="0 -3 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="arrow-icon-right" fill="#ffffff" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                    <path className="arrow-icon-stem" stroke="#ffffff" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-5 pb-lg-0 pb-4 top-card hover hover-up-10">
          <a className="text-decoration-none cursor-pointer arrow-link" href="to the about us page, no matter who is logged in">
            <div className="pb-4 pb-lg-0 px-0 bg-color-blue-nav-active hero-box border-radius-6 position-relative">
              <div className="position-relative container-top px-0 lottie-box">
                <lottie-player className="background-top-video" src="i need to find more images" background="transparent" speed="1" loop autoplay></lottie-player>
              </div>
              <div className="bg-color-blue-nav-active">
                <h2 className="color-white font-size36-md font-size32 font-weight800">
                  Bundles
                </h2>
                <p className="font-size18-md font-size16 font-weight400">
                  Interested in what else we offer?
                  <br className="d-none d-lg-block" />
                  You may find our bundles here!
                </p>
                <div className="d-flex justify-content-center align-items-center pb-4">
                                <span className="color-white font-size18 font-weight600 mr-2 sub">
                                    <Link to="pricing">
                                    Click here to view our bundles!
                                    </Link>
                                </span>
                  <svg className="arrow-icon " width="16" height="16" viewBox="0 -3 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="arrow-icon-right" fill="#ffffff" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                    <path className="arrow-icon-stem" stroke="#ffffff" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </>
  );
}
