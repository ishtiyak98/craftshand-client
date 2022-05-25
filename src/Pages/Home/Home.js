import React from "react";
import Footer from "../Shared/Footer";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
import HomeBanner from "./HomeBanner";
import OurServices from "./OurServices";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <OurServices></OurServices>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
