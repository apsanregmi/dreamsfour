import React from "react";
import AboutCounter from "../../components/about/AboutCounter";

function About1() {
  return (
    <div className="home1-introduction-area pt-80 mb-11">
      <div className="container-fluid">
        <div className="row gy-5">
          <div className="col-lg-4">
            <div className="into-left-img magnetic-wrap h-96">
              <img
                className="img-fluid magnetic-item"
                src="https://restho-nextjs.vercel.app/assets/images/bg/h1-intro-left-img.png"
                alt="h1-intro-left-img"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="our-mission">
              <div className="description h-10 mb-4">
                <p>
                  We offer affordable services to make your special occasion truly memorable.
                  As your all-in-one event solution, we provide catering and event services for a wide variety of events. Whether it's a:
                </p>
              </div>
            </div>
            <div className="intro-right">
              <div className="features-author">
                <div className="intro-features">
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" /> Wedding
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Anniversary
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Festival
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" /> Birthday
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Corporate Event
                    </li>
                  </ul>
                </div>

                {/* Add Contact Us Button */}
                <div className="contact-button mt-4 mb-4">
                  <a href="/contact" className="btn bg-yellow-500 rounded-md  text-white hover:bg-yellow-600">
                    Contact Us
                  </a>
                  <p className="italic text-sm"> Contact us for your catering needs</p>
                </div>
 
                <AboutCounter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
