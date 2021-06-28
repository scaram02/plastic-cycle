import React, { useState, useEffect } from "react";
import PlasticForm from "./PlasticForm";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector, useDispatch } from "react-redux";

const AddPlastic = () => {
  const blankPlastic = {
    id: null,
    plasticName: "",
    usage: null,
    occasion: null,
    typeOfPlastic: null,
  };
  const [plastic, setPlastic] = useState(blankPlastic);

  const dispatch = useDispatch();
  const { addPlastic } = bindActionCreators(actionCreators, dispatch);

  const store = useSelector((state) => state);
  console.log("this is the permanent store: ", store.plastic.plastic);

  const handleSubmit = (e) => {
    e.preventDefault();
    //add the reduxy part here
    // check laater if handlesubmti can be moved to the form, ad just the redux part stays here to be passed down. idk
    const { name, value } = e.target;

    addPlastic({
      ...plastic,
      [name]: value,
      id: store.plastic.plastic.length + 1,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPlastic({ ...plastic, [name]: value });
  };

  return (
    <div>
      <PlasticForm
        plastic={plastic}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default AddPlastic;
