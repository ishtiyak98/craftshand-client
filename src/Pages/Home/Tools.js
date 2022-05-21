import React, { useEffect, useState } from "react";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  console.log(tools);
  return (
    <div className="my-28 px-6 lg:px-24">
      <h2 className="text-5xl text-center lg:text-left font-semibold mb-12">Our <span className="text-primary">Tools</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        {
            tools.map(tool => <ToolsCard tool={tool}></ToolsCard>)
        }
      </div>
    </div>
  );
};

export default Tools;
