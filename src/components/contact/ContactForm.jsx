import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/sendContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully! A confirmation email has been sent to your address.');
        // Reset the form
        setFormData({
          name: '',
          email: '',
          message: '',
          consent: false,
        });
      } else {
        alert("Can't send, please check and try again.");
      }
    } catch (error) {
      console.error('Send Email error:', error);
      alert('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="contact-form mb-120 mt-120">
        <div className="row d-flex align-items-center justify-content-center mb-40">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span>
                <div className='flex'>
                  <img className="left-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />
                  Contact Us
                  <img className="right-vec" src="assets/images/icon/sub-title-vec.svg" alt="sub-title-vec" />
                </div>
              </span>
              <h2>Get In Touch</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name*"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-25">
                  <div className="form-inner">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-inner">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message ..."
                      rows={3}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 mb-40">
                  <div className="form-inner2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                    />
                    <label htmlFor="consent">
                      Please save my name, email for the next time when I comment.
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-inner">
                    <button type="submit" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;