import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { data : orders, isLoading, refetch } = useQuery("orders", () =>
    fetch(`http://localhost:5000/order/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        toast.error("Un-Authorized Access");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }


  console.log(orders);

  return (
    <div className="mx-6 lg:mx-20">
      <h4 className="text-primary text-2xl font-medium mb-5">
        My Total Orders : {orders.length}
      </h4>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-base">Sl.</th>
              <th className="text-base">Product Name</th>
              <th className="text-base">Quantity</th>
              <th className="text-base">Total Price</th>
              <th className="text-base">Manage Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <MyOrderRow
                refetch={refetch}
                index={index}
                key={order._id}
                order={order}
              ></MyOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
