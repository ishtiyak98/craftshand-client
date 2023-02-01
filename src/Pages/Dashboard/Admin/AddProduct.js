import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);

    const ItemDetails = {
      name: data.name,
      image: data.image,
      description: data.description,
      minOrder: parseInt(data.minOrder),
      available: parseInt(data.available),
      price: parseInt(data.price),
    };

    fetch("https://craftshand-server.onrender.com/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(ItemDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Item uploaded successfully");
          reset();
        }
      });
  };

  return (
    <div className="mx-6 lg:mx-20 ">
      <div className="card w-full lg:w-[600px] mx-auto bg-base-100 shadow-xl mb-10">
        <div className="card card-body">
          <h4 className="text-primary text-center text-2xl font-medium mb-5">
            Add a new Product
          </h4>
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Tool Name"
                className="input input-bordered input-primary w-full"
                {...register("name", { required: true })}
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.name?.type === "required" && "Tool name is required"}
                </span>
              </label>
            </div>

            <div className="form-control w-full ">
              <input
                type="text"
                placeholder="Image"
                className="input input-bordered input-primary w-full"
                {...register("image", { required: true })}
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.image?.type === "required" &&
                    "Image link is required"}
                </span>
              </label>
            </div>

            <div className="form-control w-full">
              <textarea
                placeholder="Description"
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
                placeholder="Minimum Order Limit"
                className="input input-bordered input-primary w-full"
                {...register("minOrder", { required: true })}
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.minOrder?.type === "required" &&
                    "Minimum order limit is required"}
                </span>
              </label>
            </div>

            <div className="form-control w-full">
              <input
                type="number"
                placeholder="Available Items"
                className="input input-bordered input-primary w-full"
                {...register("available", { required: true })}
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.available?.type === "required" &&
                    "Available items quantity is required"}
                </span>
              </label>
            </div>

            <div className="form-control w-full">
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered input-primary w-full"
                {...register("price", { required: true })}
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.price?.type === "required" && "Price is required"}
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
  );
};

export default AddProduct;
