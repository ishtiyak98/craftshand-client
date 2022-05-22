import React, { useState } from "react";
import { SyncLoader } from "react-spinners";

const Spinner = () => {
  let [loading] = useState(true);
  let [color] = useState("#FF6A00");

  return (
    <div className="sweet-loading h-screen flex justify-center items-center">
      <SyncLoader color={color} loading={loading} size={20} margin={5} />
    </div>
  );
};

export default Spinner;
