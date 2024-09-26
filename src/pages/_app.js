// import all css
import { useEffect } from "react";
import SmoothPageScroll from "../components/common/SmoothPageScroll";
import 'swiper/swiper-bundle.css';
import { BrowserRouter as Router } from 'react-router-dom'; 
import "../styles/main.css";
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
  });
  return (
    <>
    {/* <Router> */}
      <SmoothPageScroll />
      <Component {...pageProps} />
      {/* </Router> */}
    </>
  );
}

export default MyApp;
