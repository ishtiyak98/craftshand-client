import React from "react";
import bannerImg from "../../Assets/images/banner2.jpg";
import { GiEclipseSaw } from "react-icons/gi";

const ContactUs = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0,0.8 )), url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
      }}
      className="h-[350px] lg:h-[600px] mt-40 mb-16 px-6 lg:px-24 flex items-center"
    >
      <div className="lg:w-3/4 mx-auto ">
        <div>
          <div className="flex items-center justify-center text-2xl lg:text-4xl mb-6 font-semibold text-primary">
            <GiEclipseSaw size={"1.4em"} />
            <div className="ml-1">CraftsHand</div>
          </div>
          <div className="space-y-3 mb-8">
            <h2 className="text-3xl lg:text-6xl text-white text-center lg:text-center font-semibold">
              World's Leading Carpentry
            </h2>
            <h2 className="text-3xl lg:text-6xl text-white text-center lg:text-center font-semibold">
              Tools Provider
            </h2>
          </div>
          <button className="btn btn-primary rounded-none text-white block mx-auto">
            CONNECT WITH US
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
