import React from "react";

const MyOrderRow = ({ order, index }) => {
  return (
    <tr className="">
      <th>{index + 1}</th>
      <td>{order.itemName}</td>
      <td>{order.quantity}</td>
      <td>{order.price}</td>
      <td className="space-x-3">
        <button className="btn btn-sm btn-primary text-white font-medium rounded-none">Payment</button>
        <button className="btn btn-sm btn-primary text-white font-medium rounded-none">cancel</button>
      </td>
    </tr>
  );
};

export default MyOrderRow;
