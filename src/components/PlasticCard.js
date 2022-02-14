import Button from "@material-ui/core/Button";
import React from "react";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const PlasticCard = ({ plastic, toggleEdit, graphData, setGraphData }) => {
  const dispatch = useDispatch();
  const { removePlastic } = bindActionCreators(actionCreators, dispatch);

  const removeFromGraph = plastic => {

    const o = graphData.map((p) => p.argument === plastic.occasion? {argument: p.argument, value: p.value -=1} : {argument: p.argument, value: p.value})
    
    setGraphData(o)
    removePlastic(plastic)
  }
 
  
  return (
    <div>
      <h1>Name: {plastic.plasticName}</h1>
      <p>Usage: {plastic.usage}</p>
      <p>Occasion: {plastic.occasion}</p>
      <p>Type: {plastic.typeOfPlastic}</p>
      <Button onClick={() => toggleEdit(plastic)}>Edit</Button>
      <Button
        color="secondary"
        onClick={
          () => removeFromGraph(plastic)
        }
      >
        Remove plastic!
      </Button>
    </div>
  );
};

export default PlasticCard;
