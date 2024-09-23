// import all css
import { useEffect } from "react";
import SmoothPageScroll from "../components/common/SmoothPageScroll";
import "../styles/main.css";
import "../../styles/global.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/js/bootstrap.bundle.min.js");
  });
  return (
    <>
      <SmoothPageScroll />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
