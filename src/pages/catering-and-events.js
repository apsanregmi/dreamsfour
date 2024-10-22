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


function About() {
  return (
    <Layout>
      <Breadcrumb pageName="Catering And Events" pageTitle="Catering And Events" />
      <About1 />
      {/* <AboutCounter /> */}
      <ContactForm />

      {/* <Testimonial1 /> */}

      {/* <TesimonialVideo /> */}
      {/* <Experties1 /> */}
      {/* <Gallery1 /> */}
    </Layout>
  );
}

export default About;