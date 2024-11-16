import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Reservation2() {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState("08:00 am");
  const [eventDate, setEventDate] = useState(null);
  const [guests, setGuests] = useState(100);
  const [eventType, setEventType] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    const reservationData = {
      firstName,
      lastName,
      email,
      phone,
      eventDate,
      startTime,
      guests,
      eventType,
      additionalMessage,
    };

    try {
      const response = await fetch("/api/sendReservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        setSuccess("Reservation submitted successfully!");
        alert("Reservation Completion");
        
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setEventDate("");
        setStartTime("");
        setGuests("");
        setEventType("");
        setAdditionalMessage("");
      } else {
        throw new Error("Failed to submit reservation. Please try again.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h2-reservarion-area mb-120">
      <div className="bg-vector"></div>
      <div className="w-full">
        <div className="row d-flex align-items-center justify-content-center mb-40 pt-6">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <div className="flex">
                  <img
                    className="left-vec"
                    src="assets/images/icon/sub-title-vec.svg"
                    alt="sub-title-vec"
                  />
                  Online Reserve
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
          <div className="col-lg-10 -mt-8">
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="text" placeholder="First Name*" required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="text" placeholder="Last Name*" required  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="email" placeholder="Email Address*" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input type="text" placeholder="Phone Number*"  value={phone} required onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="
                  form-inner date-icon">
                    <ReactDatePicker
                      selected={eventDate}
                      onChange={(date) => setEventDate(date)}
                      placeholderText="Event Date"
                      className="calendar"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <select
                      className="time-select"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    >
                      <option value="08:00 am">08:00 am</option>
                      <option value="09:00 am">09:00 am</option>
                      <option value="10:00 am">10:00 am</option>
                      <option value="11:00 am">11:00 am</option>
                      <option value="12:00 pm">12:00 pm</option>
                      <option value="01:00 pm">01:00 pm</option>
                      <option value="02:00 pm">02:00 pm</option>
                      <option value="03:00 pm">03:00 pm</option>
                      <option value="04:00 pm">04:00 pm</option>
                      <option value="05:00 pm">05:00 pm</option>
                      <option value="06:00 pm">06:00 pm</option>
                      <option value="07:00 pm">07:00 pm</option>
                      <option value="08:00 pm">08:00 pm</option>
                      <option value="09:00 pm">09:00 pm</option>
                      <option value="10:00 pm">10:00 pm</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="number"
                      placeholder="Number of Guests Attending*"
                      // value={guests}
                      onChange={(e) => setGuests(Math.max(1, e.target.value))}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="text"
                      placeholder="Type of Event*"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="text"
                      placeholder="Any Additional Message"
                      value={additionalMessage}
                      onChange={(e) => setAdditionalMessage(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-inner">
                    <button type="submit">Send</button>
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

export default Reservation2;
