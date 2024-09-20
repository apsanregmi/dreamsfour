import React from "react";

function About() {
  return (
    <div className="h2-about-area pb-120">
      <div className="about-left2">
        <img
          className="img-fluid"
          src="assets/images/bg/h2-about-img-full.png"
          alt="h2-about-img-full"
        />
      </div>
      <div className="about-left">
        <img
          className="img-fluid h2-about-img1"
          src="assets/images/bg/h2-about-img1.png"
          alt="h2-about-img1"
        />
        <img
          className="img-fluid h2-about-img3"
          src="assets/images/bg/h2-about-img3.png"
          alt="h2-about-img3"
        />
        <img
          className="img-fluid h2-about-img2"
          src="assets/images/bg/h2-about-img2.png"
          alt="h2-about-img2"
        />
        <img
          className="img-fluid h2-about-img4"
          src="assets/images/bg/h2-about-img4.png"
          alt="h2-about-img4"
        />
      </div>
      <div className="about-right">
        <div className="section-title">
          <span>
            <img
              className="left-vec"
              src="assets/images/icon/sub-title-vec.svg"
              alt="sub-title-vec"
            />
            About Us
            <img
              className="right-vec"
              src="assets/images/icon/sub-title-vec.svg"
              alt="sub-title-vec"
            />
          </span>
          <h2>A Fusion of Flavors: Celebrating Nepali and Indian Culinary Traditions</h2>
          <p>
          At 4Dreams Nepali and Indian Cuisine, we take pride in serving authentic dishes that reflect the rich culinary traditions of both Nepal and India. Our menu offers a diverse range of flavors, from the vibrant spices of India to the soulful, hearty dishes of Nepal. Every dish is crafted with care, using fresh ingredients and time-honored recipes. Whether you're craving a comforting Nepali curry or the bold tastes of Indian cuisine, we invite you to experience the true essence of both cultures in every bite. Come, taste the tradition of two countries under one roof!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
