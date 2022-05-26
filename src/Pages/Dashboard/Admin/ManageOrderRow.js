import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageOrderRow = ({ index, order, refetch }) => {
  const handleShipped = (id) => {
    fetch(`https://arcane-badlands-58139.herokuapp.com/orderShipped/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      // body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Order shipped");
        }
      });
  };

  //!------------- remove an unpaid order --------------
  const handleRemoveOrder = (id) => {
    Swal.fire({
      title: "Remove Order",
      text: `Do you want to remove ${order.itemName} order?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      iconColor: "#FF6A00",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://arcane-badlands-58139.herokuapp.com/order/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Item is cancelled");
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{order.itemName}</td>
      <td>{order.email}</td>
      <td>
        {order.paymentStatus === "paid" ? (
          <span className="text-green-500">{order.paymentStatus}</span>
        ) : (
          <span className="text-red-500">{order.paymentStatus}</span>
        )}
      </td>
      <td>
        {order.orderStatus ? (
          <span className="text-green-500">{order.orderStatus}</span>
        ) : (
          <span className="text-red-500">{"pending"}</span>
        )}
      </td>
      <td className="space-x-3">
        <button
          className="btn btn-sm btn-primary text-white font-medium rounded-none disabled:bg-slate-200 disabled:text-black"
          disabled={order.paymentStatus === "unpaid"}
          onClick={() => {
            handleShipped(order._id);
          }}
        >
          Shipped
        </button>
        <button
          className="btn btn-sm btn-primary text-white font-medium rounded-none disabled:bg-slate-200 disabled:text-black"
          disabled={order.paymentStatus === "paid"}
          onClick={() => {
            handleRemoveOrder(order._id);
          }}
        >
          Remove Order
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
