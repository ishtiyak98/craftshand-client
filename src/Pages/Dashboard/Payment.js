import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3ETmCy3s5eQvTMnzg5Mk2E2oycsIk9YUE8o61Wl60KPSBHpttqCk5QPO2CokchgCVkUCs87x6nyI5HwUTcegyI00W7orFGJF"
);

const Payment = () => {
  const { id } = useParams();

  //!---------- fetch a single tool ------------
  const {
    data: orderItem,
    isLoading,
    refetch,
  } = useQuery("orderItem", () =>
    fetch(`https://arcane-badlands-58139.herokuapp.com/orderItem/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  console.log(orderItem);

  return (
    <div className="mx-6 lg:mx-20">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="mb-10">
            <h2 className="text-2xl font-medium">
              Customer Name : {orderItem.customerName}
            </h2>
            <h4 className="text-xl">Item Name : {orderItem.itemName}</h4>
            <h4 className="text-xl">Quantity : {orderItem.quantity}</h4>
            <h4 className="text-xl">Total Price : ${orderItem.price}</h4>
          </div>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm orderItem={orderItem} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
