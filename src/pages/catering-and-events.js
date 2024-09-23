import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactAddress from "../components/contact/ContactAddress";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import Layout from "../layout/Layout";
function CateringAndEvents() {
  return (
    <Layout>
      <Breadcrumb pageName="Catering And Events" pageTitle="Catering & Events" />
      <ContactAddress />
      <ContactForm />
      <ContactMap />
    </Layout>
  );
}

export default CateringAndEvents;
