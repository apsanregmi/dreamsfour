import React from "react";
import CountUp from "react-countup";

function AboutCounter() {
  return (
    <div className="about-counter mb-24">
      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="bg-gray-200 p-4">Item 1</div>
  <div className="bg-gray-200 p-4">Item 2</div>
  <div className="bg-gray-200 p-4">Item 3</div>
  <div className="bg-gray-200 p-4">Item 4</div>
</div> */}

      <div className="container mx-auto px-4 mb-4">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 "> */}
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="counter-single text-center ">
            <div className="counter-icon mb-4">
              <img src="assets/images/icon/chef.svg" alt="Professional Chef" className="mx-auto" />
            </div>
            <div className="countdown">
              <h3 className="text-3xl font-bold">
                <CountUp end={100} />
              </h3>
              <p className="mt-2 text-lg">Professional Chef</p>
            </div>
          </div>
          <div className="counter-single text-center">
            <div className="counter-icon mb-4">
              <img src="assets/images/icon/food.svg" alt="Food Category" className="mx-auto" />
            </div>
            <div className="countdown">
              <h3 className="text-3xl font-bold">
                <CountUp end={120} />
              </h3>
              <p className="mt-2 text-lg">Food Category</p>
            </div>
          </div>
          <div className="counter-single text-center">
            <div className="counter-icon mb-4">
              <img src="assets/images/icon/customer.svg" alt="Customer Satisfaction" className="mx-auto" />
            </div>
            <div className="countdown">
              <h3 className="text-3xl font-bold">
                <CountUp end={109} />
              </h3>
              <span className="text-2xl">k</span>
              <p className="mt-2 text-lg">Customer Satisfaction</p>
            </div>
          </div>
          <div className="counter-single text-center">
            <div className="counter-icon mb-4">
              <img src="assets/images/icon/award.svg" alt="Award Winning" className="mx-auto" />
            </div>
            <div className="countdown">
              <h3 className="text-3xl font-bold">
                <CountUp end={150} />
              </h3>
              <p className="mt-2 text-lg">Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCounter;
