import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageProductRow = ({ tools, index, refetch }) => {
  const handleRemoveTools = (id) => {
    Swal.fire({
      title: "Delete Item",
      text: `Do you want to remove ${tools.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      iconColor: "#FF6A00",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://craftshand-server.onrender.com/toolsItem/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Product is Deleted");
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{tools.name}</td>
      <td>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={tools.image} alt="" />
          </div>
        </div>
      </td>
      <td>{tools.available}</td>
      <td>${tools.price}</td>
      <td>
        <button
          className="btn btn-sm btn-primary text-white font-medium rounded-none disabled:bg-slate-200 disabled:text-black"
          onClick={() => {
            handleRemoveTools(tools._id);
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ManageProductRow;
