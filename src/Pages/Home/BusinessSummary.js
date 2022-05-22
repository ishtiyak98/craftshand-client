import React from "react";
import { FaSitemap } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import worldMap from "../../Assets/images/world.png"

const BusinessSummary = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${worldMap})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="my-28 py-14 px-6 lg:mx-16"
    >
      <h2 className="text-5xl text-center lg:text-center font-semibold mb-8">
        Our Goals in <span className="text-primary">Numbers</span>
      </h2>
      <p className="text-center text-slate-500 text-lg w-3/4 mx-auto mb-24">
        CraftsHand is the world's driving worldwide coordinations supplier — we
        uphold industry and exchange the worldwide trade of merchandise through
        land transport.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        <div className="space-y-2">
          <div className="flex justify-center text-primary mb-3">
            <FaSitemap size={"4.1em"} />
          </div>

          <h2 className="text-5xl text-center">30+</h2>
          <h3 className="text-xl text-center font-medium">
            Warehouses Managed
          </h3>
          <p className="text-center text-slate-500">
            We help you mitigate supply chain disruptions.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-center text-primary mb-3">
            <AiFillSetting size={"4.1em"} />
          </div>
          <h2 className="text-5xl text-center">150+</h2>
          <h3 className="text-xl text-center font-medium">Supply Engineers</h3>
          <p className="text-center text-slate-500">
            We help you mitigate supply chain disruptions.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-center text-primary mb-3">
            <FaGlobe size={"4.1em"} />
          </div>
          <h2 className="text-5xl text-center">60+</h2>
          <h3 className="text-xl text-center font-medium">Countries Covered</h3>
          <p className="text-center text-slate-500">
            We help you mitigate supply chain disruptions.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-center text-primary mb-3">
            <FaShippingFast size={"4.1em"} />
          </div>
          <h2 className="text-5xl text-center">500+</h2>
          <h3 className="text-xl text-center font-medium">Shops We Help</h3>
          <p className="text-center text-slate-500">
            We help you mitigate supply chain disruptions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
