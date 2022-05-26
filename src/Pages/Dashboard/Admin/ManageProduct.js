import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner";
import ManageProductRow from "./ManageProductRow";

const ManageProduct = () => {
  const {
    data: allTools,
    isLoading,
    refetch,
  } = useQuery("allTools", () =>
    fetch("https://arcane-badlands-58139.herokuapp.com/tools").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="mx-6 mb-10 lg:mx-20">
      <h4 className="text-primary text-2xl font-medium mb-5">
        Total Products : {allTools.length}
      </h4>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-base">Sl.</th>
              <th className="text-base">Item Name</th>
              <th className="text-base">Image</th>
              <th className="text-base">Available Quantity</th>
              <th className="text-base">price</th>
              <th className="text-base">Manage Item</th>
            </tr>
          </thead>
          <tbody>
            {allTools.map((tools, index) => (
              <ManageProductRow
                key={tools._id}
                index={index}
                tools={tools}
                refetch={refetch}
              ></ManageProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
