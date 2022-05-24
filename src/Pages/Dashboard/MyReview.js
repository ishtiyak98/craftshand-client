import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyReview = () => {
    const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const reviewSubmit = (data) => {
    console.log(data);

    const review = {
        name: user.displayName,
        email: user.email,
        description: data.description,
        ratings: data.ratings,
    }

    fetch("http://localhost:5000/review",{
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
    .then((res) => res.json())
    .then(data => {
      if (data.acknowledged) {
        toast.success("Review Posted");
        reset();
      }
    })

    console.log(review);
  };
  return (
    <div className="mx-6 lg:mx-20">
      <div className="flex justify-center items-center ">
        <div className="card w-11/12 lg:w-[700px] bg-base-100 shadow-xl">
          <div className="card card-body">
            <h4 className="text-2xl font-medium mb-2">Share Your Thoughts</h4>
            <form onSubmit={handleSubmit(reviewSubmit)}>
              <div className="form-control w-full">
                <textarea
                  placeholder="Descroption"
                  className="textarea textarea-primary textarea-bordered w-full "
                  {...register("description", { required: true })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.description?.type === "required" &&
                      "Description is required"}
                  </span>
                </label>
              </div>

              <div className="form-control w-full">
                <input
                  type="number"
                  placeholder="Ratings"
                  min="1" max="5"
                  className="input input-bordered input-primary w-full"
                  {...register("ratings", { required: true })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.ratings?.type === "required" && "Ratings is required"}
                  </span>
                </label>
              </div>

              <div className="my-3 flex justify-center">
                <input
                  className="btn btn-primary w-3/4 text-white  text-base font-normal disabled:bg-slate-200 disabled:text-black"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
