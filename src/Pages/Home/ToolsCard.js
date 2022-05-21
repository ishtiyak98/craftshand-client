import React from "react";

const ToolsCard = ({ tool }) => {
  const { name, image, description, minOrder, available, price } = tool;
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div className="">
          <img className="w-full h-full" src={image} alt={name} />
        </div>
        <div class="card-body">
          <h2 class="card-title font-medium text-3xl mb-2">{name}</h2>
          <p className="mb-2">{description}</p>
          <div className="flex justify-between mb-2">
              <div><span className="font-medium">Min. Order :</span> {minOrder}</div>
              <div><span className="font-medium">Available :</span> {available}</div>
          </div>
          <div>
              <p className="text-center mb-2 font-medium">
                  Price : ${price} (per/unit)
              </p>
          </div>
          <div class="">
            <button class="btn btn-primary block w-full text-white">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
