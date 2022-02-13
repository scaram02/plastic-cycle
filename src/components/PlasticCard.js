import Button from "@material-ui/core/Button";
import React from "react";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const PlasticCard = ({ plastic, toggleEdit, graphData, setGraphData }) => {
  const dispatch = useDispatch();
  const { removePlastic } = bindActionCreators(actionCreators, dispatch);

  const removeFromGraph = plastic => {

    const f = graphData.filter((d) => d.argument !== plastic.occasion)
    const n = graphData.map((d) => d.argument === plastic.occasion? d.value -= 1 : d.value)
// fix this, it removes multiple instances from graph
    setGraphData([...f, {argument: plastic.occasion, value: n}])
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
