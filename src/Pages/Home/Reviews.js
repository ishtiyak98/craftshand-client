import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import "react-slideshow-image/dist/styles.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("https://craftshand-server.onrender.com/review").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-1 px-6 lg:px-24">
      <h2 className="text-5xl text-center lg:text-center font-semibold mb-12">
        Thoughts of our <span className="text-primary">Customers</span>
      </h2>

      <div className="">
        <Carousel
          infinite={true}
          responsive={responsive}
          autoPlaySpeed={1500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {reviews.map((review, index) => (
            <div
              className="card bg-base-100 shadow-xl mx-5 mb-20 py-5 h-[330px]"
              key={index}
            >
              <div className="px-3">
                <div className="avatar flex justify-center my-6">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://api.lorem.space/image/face?hash=3174"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-center text-lg text-slate-500 mb-4 h-[100px]">
                  "{review.description}"
                </p>
                <div className="mx-auto flex items-center justify-between px-2 mb-3">
                  <div className="flex text-primary">
                    {[...Array(parseInt(review.ratings))].map((item, index) => (
                      <FaStar key={index} />
                    ))}
                    {[...Array(5 - parseInt(review.ratings))].map(
                      (item, index) => (
                        <FaRegStar key={index} />
                      )
                    )}
                  </div>
                  <h4 className="text-center text-primary text-lg font-medium">
                    Ratings: {review.ratings}/5
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
