import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { HiOutlineClock } from "react-icons/hi";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="py-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 py-5 px-6 lg:px-24 gap-y-10">
        <div>
          <h4 className="text-xl font-semibold mb-6 mb">Quick Information</h4>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <div className="text-primary">
                <HiOutlineLocationMarker size={"1.1em"} />
              </div>
              <p className="text-slate-400 text-sm mb-0 pb-0">
                2491 Reel Avenue Albuquerque, NM
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="text-primary">
                <HiOutlinePhone size={"1.1em"} />
              </div>
              <p className="text-slate-400 text-sm mb-0 pb-0">
                +880 2377 23231
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="text-primary">
                <BiMailSend size={"1.2em"} />
              </div>
              <p className="text-slate-400 text-sm mb-0 pb-0">
                handscraft@gmail.com
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="text-primary">
                <HiOutlineClock size={"1.1em"} />
              </div>
              <p className="text-slate-400 text-sm mb-0 pb-0">
                Mon-Sat 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6">Information</h4>
          <div className="space-y-4">
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>About</Link> <br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Order Tracking</Link> <br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Terms & Condition</Link><br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Store Location</Link><br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Privacy Policy</Link><br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Delivery Information</Link><br />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6">Customer Service</h4>
          <div className="space-y-4">
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Products</Link><br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Help Center</Link><br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Blog</Link><br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Accessibility</Link><br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Contact</Link><br />
            <Link className="inline-block text-slate-400 text-sm hover:text-primary" to={"/"}>Live Chat</Link><br />
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6">Download App On Mobile</h4>
          <div>
              <span className="inline-block mb-5 text-slate-400 text-sm hover:text-primary">
                30% discount on your first order
              </span>
              <div>
                  <p className="mb-2">We Accept Payment Via</p>
                  <div className="flex space-x-4">
                    <FaCcVisa size={"3rem"}/>
                    <FaCcMastercard size={"3rem"}/>
                    <FaCcPaypal size={"3rem"}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="divider px-0"></div>
      <div>
          <p className="text-primary text-center">Copyright © 2022 Rifat-Ishtiyak</p>
      </div>
    </section>
  );
};

export default Footer;
