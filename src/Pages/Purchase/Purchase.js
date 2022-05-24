import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Spinner from "../Shared/Spinner";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { _id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //!---------- fetch a single tool ------------
  const { data: toolItem, isLoading, refetch } = useQuery("toolItem", () =>
    fetch(`http://localhost:5000/tools/${_id}`).then((res) => res.json())
  );

  const [quantity, setQuantity] = useState(0);

  //!---------- set Quantity ----------
  useEffect(() => {
    if (toolItem) {
      setQuantity(toolItem.minOrder);
    }
  }, [toolItem]);


  //!---------- loading spinner ----------
  if (isLoading) {
    return <Spinner></Spinner>;
  }


  //!---------- Quantity decrease button ---------- 
  const handleDecrease = () => {
    if (quantity <= toolItem.minOrder) {
      toast.error("Minimum order-quantity reached");
    } else {
      setQuantity(quantity - 1);
    }
  };


  //!---------- Quantity increase button ---------- 
  const handleIncrease = () => {
    if (quantity >= toolItem.available) {
      toast.error("Maximum order-quantity reached");
    } else {
      setQuantity(quantity + 1);
    }
  };

  //!---------- Quantity input field ----------
  const quantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };


  //!---------- handle submit ----------
  const handlePurchase = (data) => {

    const orderDetails = {
      customerName : data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
      itemName:  toolItem.name,

      quantity: quantity,
      price: (parseInt(toolItem.price))*(parseInt(quantity)),
    }
    console.log(orderDetails);

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orderDetails),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged) {
        toast.success("Order Placed successfully");
        reset();
        const updateDetails = {
          name: toolItem.name,
          image: toolItem.image,
          description: toolItem.description,
          minOrder:toolItem.minOrder,
          available: toolItem.available - quantity,
          price:toolItem.price

        }

        updateItem(updateDetails);

      }
    })

    const updateItem = (updateDetails)=>{

      fetch(`http://localhost:5000/tools/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDetails),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          refetch();
        }
      });

    };

  };

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
              {/* <h4 className=" font-medium">
                1 unit = 5 items
              </h4> */}
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
                          value={user?.displayName}
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
                          value={user?.email}
                          className="input input-bordered input-primary w-full max-w-lg"
                          {...register("email", {
                            required: true,
                          })}
                        />
                        <label className="label">
                          <span className="label-text-alt text-red-500">
                            {errors.email?.type === "required" &&
                              "Email is required"}
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
                              "Phone is required"}
                          </span>
                        </label>
                      </div>

                      <div className="form-control w-full max-w-lg">
                        <div className="flex">
                          <label className="label">
                            <p className="label-text text-base">Price : </p>
                          </label>
                          <input
                            type="text"
                            value={(parseInt(toolItem.price))*(parseInt(quantity))}
                            className="input input-bordered input-primary max-w-[110px]"
                            {...register("price", { required: true })}
                          />
                        </div>
                        <label className="label">
                          <span className="label-text-alt text-red-500">
                            {errors.price?.type === "required" &&
                              "price is required"}
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
                            type="number"
                            value={quantity}
                            className="input input-bordered input-primary text-center max-w-[80px]"
                            {...register("orderQuantity", { required: true })}
                            onChange={quantityChange}
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
                          className="btn btn-primary w-3/4 text-white  text-base font-normal disabled:bg-slate-200 disabled:text-black"
                          type="submit"
                          value="Purchase"
                          disabled={
                            quantity < toolItem.minOrder || quantity > toolItem.available
                          }
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
