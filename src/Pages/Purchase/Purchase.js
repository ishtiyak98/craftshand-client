import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Spinner from "../Shared/Spinner";

const Purchase = () => {
  const { _id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //!---------- fetch a single tool ------------
  const { data: toolItem, isLoading } = useQuery("toolItem", () =>
    fetch(`http://localhost:5000/tools/${_id}`).then((res) => res.json())
  );

  const [quantity, setQuantity] = useState(0)

  useEffect(()=>{
    if (toolItem) {
      setQuantity(toolItem.minOrder);
    }
  },[toolItem]);


  if (isLoading) {
    return <Spinner></Spinner>;
  }

  

  const handleDecrease = () => {

    if (quantity <= toolItem.minOrder) {
      toast.error("Minimum order-quantity reached");
    }
    else{
      setQuantity(quantity-1);
    }
    
  };

  const handleIncrease = () => {

    if (quantity >= toolItem.available) {
      toast.error("Maximum order-quantity reached");
    }
    else{
      setQuantity(quantity+1);
    }
  
  };

  const handlePurchase = (data) => {
    console.log(data);
  };

  console.log(toolItem);

  return (
    <section>
      <Navbar></Navbar>

      <div className="my-28 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="h-full flex items-center justify-center">
            <img className="w-4/5" src={toolItem.image} alt="" />
          </div>

          <div>
            <div className="space-y-3 mb-6">
              <h2 className="text-4xl font-medium text-primary">
                {toolItem.name}
              </h2>
              <p className="text-slate-500 font-normal">
                {toolItem.description}
              </p>
              <h4 className="text-xl font-medium">
                Minimum Order Quantity : {toolItem.minOrder}
              </h4>
              <h4 className="text-xl font-medium">
                Available Quantity : {toolItem.available}
              </h4>
              <h4 className="text-xl font-medium">
                Price : ${toolItem.price} (per/unit)
              </h4>
            </div>

            <div>
              <div className="flex justify-center lg:justify-start items-center ">
                <div className="card w-11/12 lg:w-[500px] bg-base-100 shadow-xl">
                  <div className="card card-body">
                    <form onSubmit={handleSubmit(handlePurchase)}>
                      <div className="form-control w-full max-w-lg">
                        <input
                          type="text"
                          placeholder="Name"
                          className="input input-bordered input-primary w-full max-w-lg"
                          {...register("name", { required: true })}
                        />
                        <label className="label">
                          <span className="label-text-alt text-red-500">
                            {errors.name?.type === "required" &&
                              "Name is required"}
                          </span>
                        </label>
                      </div>

                      <div className="form-control w-full max-w-lg">
                        <input
                          type="text"
                          placeholder="Email"
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
                            {errors.email?.type === "required" &&
                              "Email is required"}
                            {errors.email?.type === "pattern" &&
                              errors.email.message}
                          </span>
                        </label>
                      </div>

                      <div className="form-control w-full max-w-lg">
                        <input
                          type="text"
                          placeholder="Address"
                          className="input input-bordered input-primary w-full max-w-lg"
                          {...register("address", { required: true })}
                        />
                        <label className="label">
                          <span className="label-text-alt text-red-500">
                            {errors.address?.type === "required" &&
                              "Address is required"}
                          </span>
                        </label>
                      </div>

                      <div className="form-control w-full max-w-lg">
                        <input
                          type="number"
                          placeholder="Phone"
                          className="input input-bordered input-primary w-full max-w-lg"
                          {...register("phone", { required: true })}
                        />
                        <label className="label">
                          <span className="label-text-alt text-red-500">
                            {errors.phone?.type === "required" &&
                              "Address is required"}
                          </span>
                        </label>
                      </div>

                      <div className="form-control w-full max-w-lg">
                        <label className="label">
                          <p className="label-text text-base text-center">
                            Order Quantity
                          </p>
                        </label>
                        <div className="flex space-x-2 justify-center">
                          <div
                            className="btn btn-outline btn-primary text-white"
                            onClick={handleDecrease}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            value={quantity}
                            className="input input-bordered input-primary text-center max-w-[80px]"
                            {...register("orderQuantity", { required: true })}
                          />
                          <div
                            className="btn btn-outline btn-primary text-white"
                            onClick={handleIncrease}
                          >
                            +
                          </div>
                        </div>
                        <label className="label">
                          <span className="label-text-alt text-red-500 block mx-auto">
                            {errors.orderQuantity?.type === "required" &&
                              "Quantity is required"}
                          </span>
                        </label>
                      </div>

                      <div className="my-3 flex justify-center">
                        <input
                          className="btn btn-primary w-3/4 text-white  text-base font-normal"
                          type="submit"
                          value="Purchase"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
};

export default Purchase;
