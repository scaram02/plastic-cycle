import PlasticCard from "./PlasticCard";
import React from "react";
import { useSelector } from "react-redux";

const PlasticList = ({ toggleEdit, graphData, setGraphData}) => {

  const store = useSelector((state) => state.plastic.plastic);

  

  return (
    <div>
      {store &&
        store.map((plastic) => (
          <PlasticCard
            plastic={plastic}
            key={plastic.id}
            toggleEdit={toggleEdit}
            graphData={graphData}
            setGraphData={setGraphData}
           
          />
        ))}
    </div>
  );
};

export default PlasticList;
