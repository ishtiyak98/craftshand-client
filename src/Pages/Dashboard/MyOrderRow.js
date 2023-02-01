import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyOrderRow = ({ order, index, refetch }) => {
  const handleCancel = (id) => {
    Swal.fire({
      title: "Cancel Order",
      text: `Do you want to cancel ${order.itemName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      iconColor: "#FF6A00",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://craftshand-server.onrender.com/order/${id}`, {
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
    <tr className="">
      <th>{index + 1}</th>
      <td>{order.itemName}</td>
      <td>{order.quantity}</td>
      <td>${order.price}</td>
      <td>
        <p>{order.paymentStatus}</p>
        <p className="text-primary">
          {order.transactionId && "Tran ID: " + order.transactionId}
        </p>
      </td>
      <td className="space-x-3">
        <Link to={`/dashboard/payment/${order._id}`}>
          <button
            className="btn btn-sm btn-primary text-white font-medium rounded-none disabled:disabled:bg-slate-200 disabled:text-black"
            disabled={order.paymentStatus === "paid"}
          >
            Payment
          </button>
        </Link>
        <button
          className="btn btn-sm btn-primary text-white font-medium rounded-none"
          onClick={() => {
            handleCancel(order._id);
          }}
        >
          cancel
        </button>
      </td>
    </tr>
  );
};

export default MyOrderRow;
