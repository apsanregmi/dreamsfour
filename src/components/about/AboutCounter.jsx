import React from "react";
import CountUp from "react-countup";
function AboutCounter() {
  return (
    <div className="about-counter mb-120">
      <div className="container">
        <div className="row justify-content-center g-md-4 gy-5">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/chef.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer" data-odometer-final={100}>
                    <CountUp end={100} />
                  </h3>
                </div>
                <p>Professional Chef</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/food.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer" data-odometer-final={250}>
                    <CountUp end={120} />
                  </h3>
                </div>
                <p>Food Category</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/customer.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer" data-odometer-final={10}>
                    <CountUp end={109} />
                  </h3>
                  <span>k</span>
                </div>
                <p>Customer Satisfy</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
            <div className="counter-single">
              <div className="counter-icon">
                <img src="assets/images/icon/award.svg" alt="image" />
              </div>
              <div className="coundown">
                <div className="d-flex align-items-center gap-2">
                  <h3 className="odometer" data-odometer-final={100}>
                    <CountUp end={150} />
                  </h3>
                </div>
                <p>Award Wining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCounter;