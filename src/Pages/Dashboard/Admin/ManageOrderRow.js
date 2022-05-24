import React from 'react';

const ManageOrderRow = ({index, order}) => {
    return (
        <tr>
      <td>{index + 1}</td>
      <td>{order.itemName}</td>
      <td>{order.email}</td>
      <td>{order.paymentStatus}</td>
      <td>
          {
            order.paymentStatus==="paid" ?"shipped" :"waiting for payment"
          }
      </td>
      <td className="space-x-3">
        <button
          className="btn btn-sm btn-primary text-white font-medium rounded-none disabled:bg-slate-200 disabled:text-black"
        >
          Shipped
        </button>
        <button className="btn btn-sm btn-primary text-white font-medium rounded-none">
          Remove Order
        </button>
      </td>
    </tr>
    );
};

export default ManageOrderRow;