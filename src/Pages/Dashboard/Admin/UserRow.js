import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const handleAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire({
            icon: "error",
            title: "Not Authorized",
            text: "You don't have authorization to make an admin",
            iconColor: "#FF6A00"
          });
          
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          refetch();
          toast.success("successfully made an admin");
        }
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>{role ? role : "User"}</td>
      <td className="space-x-3">
        <button
          className="btn btn-sm btn-primary text-white font-medium rounded-none disabled:bg-slate-200 disabled:text-black"
          disabled={role === "admin"}
          onClick={handleAdmin}
        >
          Make Admin
        </button>
        <button className="btn btn-sm btn-primary text-white font-medium rounded-none">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
