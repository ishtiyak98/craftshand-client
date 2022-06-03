import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaFighterJet } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { BsTools } from "react-icons/bs";

const OurServices = () => {
  return (
    <div className="mt-16 mb-28 px-6 lg:px-24">
      <h2 className="text-5xl text-center lg:text-center font-semibold mb-12">
        Our <span className="text-primary">Services</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="card lg:card-side bg-base-100 shadow-xl group hover:ring-2 hover:ring-primary">
          <div className="p-10 lg:py-12 lg:px-20 bg-gray-900 text-white flex justify-center items-center group-hover:bg-primary">
            <BsTools size={"4.7em"} />
          </div>
          <div className="card-body">
            <h2 className="text-3xl font-medium mb-4 text-center lg:text-left">
              Custom Tools
            </h2>

            <p className="text-base text-center lg:text-left">
              We can provide the best custom tool that will give you real
              comfort while working.
            </p>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl group hover:ring-2 hover:ring-primary">
          <div className="p-10 lg:py-12 lg:px-20 bg-gray-900 text-white flex justify-center items-center group-hover:bg-primary">
            <FaSitemap size={"4.8em"} />
          </div>
          <div className="card-body">
            <h2 className="text-3xl font-medium mb-4 text-center lg:text-left">
              Tools Distribution
            </h2>

            <p className="text-base text-center lg:text-left">
              We give exiting offers for our close distributors to sell our
              product in their local market.
            </p>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl group hover:ring-2 hover:ring-primary">
          <div className="p-10 lg:py-12 lg:px-20 bg-gray-900 text-white flex justify-center items-center group-hover:bg-primary">
            <FaTruck size={"4.8em"} />
          </div>
          <div className="card-body">
            <h2 className="text-3xl font-medium mb-4 text-center lg:text-left">
              Ground Transport
            </h2>

            <p className="text-base text-center lg:text-left">
              We have our own ground transport system that will transport your
              product to your shop.
            </p>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl group hover:ring-2 hover:ring-primary">
          <div className="p-10 lg:py-12 lg:px-20 bg-gray-900 text-white flex justify-center items-center group-hover:bg-primary">
            <FaFighterJet size={"4.8em"} />
          </div>
          <div className="card-body">
            <h2 className="text-3xl font-medium mb-4 text-center lg:text-left">
              Logistic Service
            </h2>

            <p className="text-base text-center lg:text-left">
              We offers a host of logistic management services and supply chain
              solutions in all over the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
