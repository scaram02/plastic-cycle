import Button from "@material-ui/core/Button";
import React from "react";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const PlasticCard = ({ plastic, toggleEdit, graphData, setGraphData }) => {
  const dispatch = useDispatch();
  const { removePlastic } = bindActionCreators(actionCreators, dispatch);

 
  
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
          () => removePlastic(plastic)
        }
      >
        Remove plastic!
      </Button>
    </div>
  );
};

export default PlasticCard;
