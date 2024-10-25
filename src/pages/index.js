import Head from "next/head";
import React from "react";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Gallary2 from "../components/gallary/Gallary2";
import Header from "../components/header/Header";
import MenuList2 from "../components/MenuList/MenuList2";
import Product1 from "../components/product/Product1";
import Reservation2 from "../components/reservation/Reservation2";
import NewItem2 from "../components/tems/NewItem2";
import Banner3 from "../components/banner/Banner3";

import { BrowserRouter as Router } from 'react-router-dom'; 
// import NewItem1 from "../components/tems/NewItem1";

function IndexPage() {
  return (
    <>
    {/* <Router> */}
      <Head>
        <title>4Dreams Nepali and Indian Cusine</title>
        <meta name="description" content="Discover your perfect blend of authentic & flavorful foods!" />
        <link rel="icon" href="assets/images/icon/logo-icon.svg" />
        {/* <link rel="icon" href="assets/images/icon/logo-icon.svg" /> */}
      </Head>
      <Header />


      <div>


        <Banner3/>

        

      </div>


      <Product1 />
      {/* <Banner /> */}
      <NewItem2 />


      {/* <NewItem1/> */}
      <MenuList2 />
      <Gallary2 />
      <Reservation2 />
      <About />

      <Footer />
      {/* </Router> */}
    </>
  );
}

export default IndexPage;
