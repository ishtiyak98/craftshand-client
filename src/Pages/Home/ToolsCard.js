import React from "react";
import { useNavigate } from "react-router-dom";

const ToolsCard = ({ tool }) => {
  const navigate = useNavigate();

  const { _id, name, image, description, minOrder, available, price } = tool;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="">
          <img className="w-full h-full" src={image} alt={name} />
        </div>
        <div className="card-body">
          <h2 className="card-title font-medium text-3xl mb-2">{name}</h2>
          <p className="mb-2 text-slate-500">{description}</p>
          <div className="flex justify-between mb-2">
            <div>
              <span className="font-medium">Min. Order :</span> {minOrder}
            </div>
            <div>
              <span className="font-medium">Available :</span> {available}
            </div>
          </div>
          <div>
            <p className="text-center mb-2 font-medium">
              Price : ${price} (per/unit)
            </p>
          </div>
          <div className="">
            <button
              className="btn btn-primary block w-full text-white"
              onClick={() => navigate(`/purchase/${_id}`)}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
