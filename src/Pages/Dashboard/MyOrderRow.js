import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyOrderRow = ({ order, index, refetch }) => {

  const handleCancel = (id) => {
    Swal.fire({
      title: "Cancel Order",
      text: `Do you want to cancel ${order.itemName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      iconColor : "#FF6A00"
    }).then((result) => {

      if (result.isConfirmed) {
          fetch(`http://localhost:5000/order/${id}`, {
            method:"DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
          })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
              toast.success("Item is cancelled")
              refetch();  
            }
          })
      }
    })
  }



  return (
    <tr className="">
      <th>{index + 1}</th>
      <td>{order.itemName}</td>
      <td>{order.quantity}</td>
      <td>{order.price}</td>
      <td className="space-x-3">
        <button className="btn btn-sm btn-primary text-white font-medium rounded-none">Payment</button>
        <button className="btn btn-sm btn-primary text-white font-medium rounded-none" onClick={()=>{handleCancel(order._id)}}>cancel</button>
      </td>
    </tr>
  );
};

export default MyOrderRow;
