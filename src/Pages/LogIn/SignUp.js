import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Spinner from "../Shared/Spinner";
import LogInWithApp from "./LogInWithApp";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [signupMessage, setSignupMessage] = useState(""); 
  const [textColor, setTextColor] = useState("");

  const navigate = useNavigate();

  //!-------- handle successful Signup --------
  useEffect(()=>{
    if (user) {
      Swal.fire({
        title: "Account created!",
        text: "You can login now",
        icon: "success",
      });
      navigate("/login");
    }
  }, [user, navigate]);


  //!-------- handle Signup error --------
  useEffect(()=>{
    if (error) {
      setSignupMessage(error.message);
      setTextColor("text-red-500");
    }
}, [error]);

//!-------- loading-spinner --------
if (loading || updating) {
  return <Spinner></Spinner>;
};

  const handleSignUp = async(data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  }

  return (
    <div>

      <div className="flex h-screen justify-center items-center  bg-slate-100">
        <div className="card w-11/12 lg:w-[500px] bg-base-100 shadow-xl">
          <div className="card card-body">
            <span className="text-4xl font-medium text-center text-primary hover:cursor-pointer mb-2" onClick={()=>{navigate("/")}}>CraftsHand</span>
            <h4 className="text-xl font-medium text-center">Signup</h4>
            <form onSubmit={handleSubmit(handleSignUp)}>

            <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text text-base">User Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-primary w-full max-w-lg"
                  {...register("name", {
                    required: true
                  })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.name?.type === "required" && "Name field cannot be empty"}
                  </span>
                </label>
              </div>

              
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
                    {errors.email?.type === "required" && "Email field cannot be empty"}
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
                      "Password field cannot be empty"}
                    {errors.password?.type === "minLength" &&
                      errors.password.message}
                  </span>
                </label>
              </div>

              <div className="my-3">
                <input
                  className="btn btn-primary text-white w-full text-base font-normal"
                  type="submit"
                  value="Signup"
                />
              </div>
              <p className={`text-center ${textColor} text-sm`}>
                  {signupMessage && signupMessage}
              </p>
            </form>

            <div className="">
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to={"/login"} className="text-primary">
                  Login
                </Link>
              </p>
            </div>
            <div>
                <LogInWithApp></LogInWithApp>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default SignUp;
