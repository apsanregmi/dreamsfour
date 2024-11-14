import React from "react";
import ReservationForm from "../components/category/ReservationForm";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
import Reservation2 from "../components/reservation/Reservation2";
import MenuList2 from "../components/MenuList/MenuList2";
import NewItem2 from "../components/tems/NewItem2";



function reservation() {
  return (
    <Layout>
      {/* <Breadcrumb pageName="Reservation" pageTitle="Reservation" /> */}
      <div>
        <div className="w-full ">
        {/* ========== Reservation end============= */}
        <ReservationForm />
      {/* <Reservation2 /> */}
      </div>

        {/* ========== Reservation end============= */}
        {/* <div className="best-offer-area1 mb-120">
          <div className="container">
            <div className="row d-flex justify-content-center mb-40">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <span>
                    <div className="flex">
                    <img
                      className="left-vec"
                      src="assets/images/icon/sub-title-vec.svg"
                      alt="sub-title-vec"
                    />
                    Best Offer
                    <img
                      className="right-vec"
                      src="assets/images/icon/sub-title-vec.svg"
                      alt="sub-title-vec"
                    />
                    </div>
                  </span>
                  <h2>Choose Your Best Offer</h2>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 col-md-6">
                <div className="best-offer-wrap clearfix">
                  <div className="best-offer-img">
                    <img
                      className="img-fluid"
                      src="https://restho-nextjs.vercel.app/assets/images/bg/best-offer-img1.png"
                      alt="best-offer-img1"
                    />
                    <div className="price-tag">
                      <span>$55</span>
                    </div>
                  </div>
                  <div className="best-offer-content">
                    <h3>Buy One Get One Free</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum need.{" "}
                    </p>
                    <a className="primary-btn3 btn-sm">Limited Offer</a>
                    <ol className="features">
                      <li>Prawn with Noodls.</li>
                      <li>Special Drinks.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="best-offer-wrap clearfix">
                  <div className="best-offer-img">
                    <img
                      className="img-fluid"
                      src="https://restho-nextjs.vercel.app/assets/images/bg/best-offer-img2.png"
                      alt="best-offer-img1"
                    />
                    <div className="price-tag">
                      <span>$55</span>
                    </div>
                  </div>
                  <div className="best-offer-content">
                    <h3>Buy One Get One Free</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum need.{" "}
                    </p>
                    <a className="primary-btn3 btn-sm">Limited Offer</a>
                    <ol className="features">
                      <li>Fried Chicken.</li>
                      <li>Watermelon Juice.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <MenuList2/>

        <NewItem2/>
      </div>
    </Layout>
  );
}

export default reservation;