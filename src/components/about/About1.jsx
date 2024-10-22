import React from "react";
import AboutCounter from "../../components/about/AboutCounter";


function About1() {
  return (
    <div className="home1-introduction-area pt-80 mb-11">
      {/* <div className="container-lg container-fluid">
        <div className="row mb-40">
          <div className="col-lg-12">
            <div className="section-title">
              <span>
                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Introduction of Restho
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
              </span>
              <h2>We Are Experienced Restaurant.</h2>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        <div className="row gy-5">
          <div className="col-lg-4">
            <div className="into-left-img magnetic-wrap">
              <img
                className="img-fluid magnetic-item"
                src="https://restho-nextjs.vercel.app/assets/images/bg/h1-intro-left-img.png"
                alt="h1-intro-left-img"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="our-mission">
              {/* <div className="icon">
                <img src="assets/images/icon/mission.svg" alt="" />
                <h4>Our Mission</h4>
              </div> */}
              <div className="description">
                <p>
                  We offer affordable services to make your special ocassion truly memorable.
                  As your all-in-one event solution, we provide catering for a wide variety of events Whether its a 
                </p>
              </div>
            </div>
            <div className="intro-right">
              <div className="features-author">
                <div className="intro-features">
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" />
                      Wedding
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      Anniversary
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      Festival
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" />
                      Birthday
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />
                      Corporate Event
                    </li>
                    {/* <li>
                      <i className="bi bi-check-circle" />
                      Quality Food.{" "}
                    </li> */}
                  </ul>
                </div>
                <AboutCounter />

                {/* <div className="author-area">
                  <div className="author-content">
                    <p>
                      “Welcome our restaurant! Our Restaurant is the best as
                      like delicious food, nutrition food etc in world-wide.”{" "}
                    </p>
                  </div>

                  <div className="author-img-name">
                    <div className="author-img">
                      <img src="assets/images/bg/h1-intro-author.png" alt="" />
                    </div>
                    <div className="author-name">
                      <h4>Mr. Hamilton</h4>
                      <span>CEO &amp;Founder</span>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div className="intro-right-img magnetic-wrap">
                <img
                  className="img-fluid magnetic-item"
                  src="assets/images/bg/h1-intro-right-img.png"
                  alt="h1-intro-right-img"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;