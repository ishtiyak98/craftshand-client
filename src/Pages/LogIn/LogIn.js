import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import LogInWithApp from "./LogInWithApp";

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginMessage, setLoginMessage] = useState("");
    const [textColor, setTextColor] = useState("");


    const handleLogin = () => {

    }

  return (
    <section>
      <Navbar></Navbar>

      <div className="flex h-screen justify-center items-center  bg-slate-100">
        <div className="card w-11/12 lg:w-[500px] bg-base-100 shadow-xl">
          <div className="card card-body">
            <h2 className="text-4xl font-medium text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Email</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-primary w-full max-w-lg"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.email?.type === "required" && "Email is required"}
                    {errors.email?.type === "pattern" && errors.email.message}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered input-primary w-full max-w-lg"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Minimum length must be 6",
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.password?.type === "required" &&
                      "Password is required"}
                    {errors.password?.type === "minLength" &&
                      errors.password.message}
                  </span>
                </label>
              </div>

              <div className="my-3">
                <input
                  className="btn btn-primary text-white w-full text-base font-normal"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className={`text-center ${textColor} text-sm`}>
                  {loginMessage && loginMessage}
              </p>
            </form>

            <div className="">
              <p className="text-center text-sm">
                New to CraftsHand?{" "}
                <Link to={"/signup"} className="text-primary">
                  Create new account
                </Link>
              </p>
            </div>

            <div>
                <LogInWithApp></LogInWithApp>
            </div>

          </div>
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
};

export default LogIn;
