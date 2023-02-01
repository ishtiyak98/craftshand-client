import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://craftshand-server.onrender.com/order", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="mx-6 lg:mx-20">
      <h4 className="text-primary text-2xl font-medium mb-5">
        Total Orders : {orders.length}
      </h4>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-base">Sl.</th>
              <th className="text-base">Item Name</th>
              <th className="text-base">Order Placed By</th>
              <th className="text-base">Payment Status</th>
              <th className="text-base">Shipping Status</th>
              <th className="text-base">Manage User</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <ManageOrderRow
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              ></ManageOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
