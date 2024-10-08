import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReservationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventDate: null,
    eventStartTime: "",
    numberOfGuests: "",
    typeOfEvent: "",
    additionalComments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, eventDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate EmailJS here later for sending form data
    console.log("Form Data: ", formData);
    alert("Reservation submitted successfully!");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      eventDate: null,
      eventStartTime: "",
      numberOfGuests: "",
      typeOfEvent: "",
      additionalComments: "",
    });
  };

  return (
    <div className="container">
      <div className="reservation-1 mb-120 mt-120">
        <div className="row d-flex align-items-center justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <div className="flex"> 

                <img
                  className="left-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                Online Reservation
                <img
                  className="right-vec"
                  src="assets/images/icon/sub-title-vec.svg"
                  alt="sub-title-vec"
                />
                </div>

              </span>
              <h2>For Online Reservation</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-center">
                {/* First Name */}
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name*"
                      required
                    />
                  </div>
                </div>
                
                {/* Last Name */}
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                </div>
                
                {/* Email Address */}
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address*"
                      required
                    />
                  </div>
                </div>
                
                {/* Phone Number */}
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number*"
                      required
                    />
                  </div>
                </div>
                
                {/* Event Date */}
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner date-icon">
                    <ReactDatePicker
                      selected={formData.eventDate}
                      onChange={handleDateChange}
                      placeholderText="Event Date*"
                      className="claender"
                      required
                    />
                  </div>
                </div>

                {/* Event Start Time */}
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="time"
                      name="eventStartTime"
                      value={formData.eventStartTime}
                      onChange={handleChange}
                      placeholder="Event Start Time*"
                      required
                    />
                  </div>
                </div>
                
                {/* Number of Guests Attending */}
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="number"
                      name="numberOfGuests"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      placeholder="Number of Guests*"
                      required
                    />
                  </div>
                </div>
                
                {/* Type of Event */}
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="text"
                      name="typeOfEvent"
                      value={formData.typeOfEvent}
                      onChange={handleChange}
                      placeholder="Type of Event*"
                      required
                    />
                  </div>
                </div>
                
                {/* Additional Comments */}
                <div className="col-lg-12 mb-25">
                  <div className="form-inner">
                    <textarea
                      name="additionalComments"
                      value={formData.additionalComments}
                      onChange={handleChange}
                      placeholder="Additional Comments"
                      rows={4}
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-inner">
                    <button type="submit">Send Reservation</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
