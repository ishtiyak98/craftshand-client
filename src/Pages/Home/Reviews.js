import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/review").then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  console.log(reviews);
  return (
    <div className="my-28 px-6 lg:px-24">
      <h2 className="text-5xl text-center lg:text-center font-semibold mb-12">
        Thoughts of our <span className="text-primary">Customers</span>
      </h2>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="slide-container py-10">
            <Slide className=" mx-auto">
              {reviews.map((review, index) => (
                <div className="each-slide" key={index}>
                  <div className="px-32">
                    <div className="avatar flex justify-center my-6">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src="https://api.lorem.space/image/face?hash=3174"
                          alt=""
                        />
                      </div>
                    </div>
                    <p className="text-center italic text-2xl text-slate-500 font-semibold mb-4">
                      "{review.description}"
                    </p>
                    <h4 className="text-center italic text-primary text-xl font-medium">
                      {review.name}
                    </h4>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
