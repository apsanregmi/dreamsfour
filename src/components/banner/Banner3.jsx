import Link from "next/link";
import React from "react";

function Banner3() {
  return (
    <div className="home3-banner  ">
      {/* Social Media Icons Section */}
      <div className="social-area">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <i className="bx bxl-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="bx bxl-instagram-alt" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/">
              <i className="bx bxl-tiktok" />
            </a>
          </li>
          <li>
            <a href="https://yelp.com/">
              <i className="bx bxl-yelp" />
            </a>
          </li>
        </ul>
      </div>

      {/* Opening Hours Section */}
      <div className="open-time">
        {/* <div className="left-vect">
          <img src="assets/images/bg/open-vec-left..png" alt="Decoration" />
        </div>
        <div className="right-vect">
          <img src="assets/images/bg/open-vec-right.png" alt="Decoration" />
        </div> */}
        <div className="flex space-x-4">

        
          <img
            className="left-vec w-16"
            src="assets/images/icon/h3-open-vec.svg"
            alt="Left Decoration"
          />
          <p className="text-white">
          Our Restho Restaurant is Open from 9:30 AM to 9:00 PM
          </p>
          <img
            className="right-vec w-16"
            src="assets/images/icon/h3-open-vec.svg"
            alt="Right Decoration"
          />
        
        </div>

      </div>

      {/* Video Banner Section */}
      <div className="video-wrap d-flex align-items-center justify-content-center">
        <video autoPlay loop muted preload="auto">
          <source src="assets/video/myVid.mp4" type="video/mp4" />
        </video>

        {/* Banner Content */}
        <div className="  banner-content text-center">
          <div className="banner-subtitle flex items-center justify-center">
            <img
              className="left-vec"
              src="assets/images/icon/h3-sub-title-vec.svg"
              alt="Left Decoration"
            /><div className="text-xl  px-4 text-white font-bold  ">
            Welcome To Restho
          </div>
            <img
              className="right-vec"
              src="assets/images/icon/h3-sub-title-vec.svg"
              alt="Right Decoration"
            />
          </div>
          <h1>Find Your Best Healthy &amp; Tasty Food.</h1>

          {/* Discover More Button */}
          <Link legacyBehavior href="/menu1">
            <a className="primary-btn7 btn-md2">
              <i className="bi bi-arrow-up-right-circle" /> Discover More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
