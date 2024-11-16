import React from "react";
import About1 from "../components/about/About1";
import AboutCounter from "../components/about/AboutCounter";
import Breadcrumb from "../components/common/Breadcrumb";
import Experties1 from "../components/cookingExperties/Experties1";
import Gallery1 from "../components/gallary/Gallery1";
import TesimonialVideo from "../components/testimonial/TesimonialVideo";
import Testimonial1 from "../components/testimonial/Testimonial1";
import Layout from "../layout/Layout";
import ContactForm from "../components/contact/ContactForm";
import Reservation2 from "../components/reservation/Reservation2";
import Home3Testimonial from '../components/testimonial/Home3Testimonial';




function About() {
  return (
    <Layout>
      <Breadcrumb pageName="Catering And Events" pageTitle="Catering And Events" />
      <About1 />
      {/* <AboutCounter /> */}
      <div className="-mt-32">
      {/* <ContactForm /> */}
<Reservation2/>

      </div>

      {/* <Testimonial1 /> */}

      {/* <TesimonialVideo /> */}
      {/* <Experties1 /> */}
      {/* <Gallery1 /> */}
      <Home3Testimonial />
    </Layout>
  );
}

export default About;