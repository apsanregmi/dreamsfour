import React from "react";
import AboutCounter from "../../components/about/AboutCounter";

function About1() {
  return (
    <div className="home1-introduction-area pt-80 mb-11">
      <div className="container-fluid flex justify-center"> {/* Center the content */}
        <div className="row gy-5 w-full max-w-6xl"> {/* Control maximum width */}
          <div className="col-lg-4">
            <div className="into-left-img magnetic-wrap h-96">
              <img
                className="img-fluid magnetic-item object-cover w-full h-full"
                src="https://restho-nextjs.vercel.app/assets/images/bg/h1-intro-left-img.png"
                alt="h1-intro-left-img"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="our-mission pt-8 px-4  ">
              <div className="description mb-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                  HAVING A PARTY OR AN EVENT?
                </h2>
                <p className="text-lg md:text-xl text-gray-700">
                  We offer affordable services to make your special occasion truly memorable. 
                  As your all-in-one event solution, we provide catering and event services for a wide variety of events. Whether it's a:
                </p>
              </div>
            </div>

            <div className="intro-right mt-6">
              <div className="features-author">
                <div className="intro-features flex flex-wrap gap-4">
                  <ul className="w-1/2">
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
                  <ul className="w-1/2">
                    <li>
                      <i className="bi bi-check-circle" /> Birthday
                    </li>
                    <li>
                      <i className="bi bi-check-circle" /> Corporate Event
                    </li>
                  </ul>
                </div>

                {/* Add Contact Us Button */}
                <div className="contact-button mt-6 mb-4">
                  <p className="italic text-sm text-gray-600"> Contact us for your catering needs</p>
                  <a href="/contact" className="btn bg-yellow-500 rounded-md py-3 px-6 text-white hover:bg-yellow-600 transition-all ease-in-out">
                    Contact Us
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutCounter />

    </div>
  );
}

export default About1;
