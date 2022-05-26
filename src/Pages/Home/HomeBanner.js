import React from "react";
import bannerImg from "../../Assets/images/banner5.jpg";
import Navbar from "../Shared/Navbar";

const HomeBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.1)), url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
      }}
      className="h-screen "
    >
      <Navbar></Navbar>
      <div className="px-6 lg:px-24 lg:w-3/5 h-screen flex items-center">
          <div className="space-y-5 ">
              <h4 className="text-2xl text-center lg:text-left text-white font-bold ">Fine Carpenter Tools</h4>
              <h1 className="text-4xl text-center lg:text-left lg:text-6xl text-primary font-bold">COMPLETE FURNISHING WITH BEST QUALITY</h1>
              <p className=" lg:text-xl text-center lg:text-left text-white ">
                We have an outstanding workmanship including a dedicated team of engineers and marketing professionals.
              </p>
              <button className="btn btn-primary rounded-none text-white block mx-auto lg:mx-0">Read More</button>
          </div>
      </div>
    </div>
  );
};

export default HomeBanner;
