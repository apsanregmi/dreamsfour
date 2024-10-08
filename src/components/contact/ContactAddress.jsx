import React from "react";

function ContactAddress() {
  return (
    <div className="contact-page pt-120">
      <div className="container-fluid">
        <div className="row justify-content-center g-4">
          <div className="col-xxl-6 col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div className="contact-wrap">
              <div className="contact-img">
                <img
                  src="https://restho-nextjs.vercel.app/assets/images/bg/contact-img-01.png"
                  alt="contact-img-01"
                />
              </div>
              <div className="contact-content">
                <h3>NewYork Branch</h3>
                <ul>
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icon/location.svg"
                        alt="location"
                      />
                    </div>
                    <div className="content">
                      <a>
                        Mirpur DOHS, House-167/170,
                        <br />
                        Road No-02, Avenue -01
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/phone.svg" alt="phone" />
                    </div>
                    <div className="content">
                      <a href="#">+990-7782200</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/envlope.svg" alt="envlope" />
                    </div>
                    <div className="content">
                      <a href="#">info@example.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-xxl-6 col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div className="contact-wrap">
              <div className="contact-img">
                <img
                  src="assets/images/bg/contact-img-02.png"
                  alt="contact-img-02"
                />
              </div>
              <div className="contact-content">
                <h3>Italian Branch</h3>
                <ul>
                  <li>
                    <div className="icon">
                      <img
                        src="assets/images/icon/location.svg"
                        alt="location"
                      />
                    </div>
                    <div className="content">
                      <a>
                        Khikhet DOHS, House-169/177,
                        <br />
                        Road No-04, Avenue -02
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/phone.svg" alt="phone" />
                    </div>
                    <div className="content">
                      <a href="#">+990-7782200</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/envlope.svg" alt="envlope" />
                    </div>
                    <div className="content">
                      <a href="#">info@example.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactAddress;
