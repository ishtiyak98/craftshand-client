import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    fetch("https://arcane-badlands-58139.herokuapp.com/tools").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="my-28 px-6 lg:px-24">
      <h2 className="text-5xl text-center lg:text-left font-semibold mb-12">
        Our <span className="text-primary">Tools</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
        {[...tools]
          .reverse()
          .slice(0, 6)
          .map((tool) => (
            <ToolsCard key={tool._id} tool={tool}></ToolsCard>
          ))}
      </div>
    </div>
  );
};

export default Tools;
