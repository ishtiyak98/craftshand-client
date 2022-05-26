import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner";
import UserRow from "./UserRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
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
        Total Users : {users.length}
      </h4>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-base">Sl.</th>
              <th className="text-base">Email</th>
              <th className="text-base">User Type</th>
              <th className="text-base">Manage User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={index}
                index={index}
                user={user}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
