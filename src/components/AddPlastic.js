import React, { useState, useEffect } from "react";
import PlasticForm from "./PlasticForm";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector, useDispatch } from "react-redux";

const AddPlastic = ({blankPlastic}) => {

  
  
  const [plastic, setPlastic] = useState(blankPlastic);

  const dispatch = useDispatch();
  const { addPlastic } = bindActionCreators(actionCreators, dispatch);

  const store = useSelector((state) => state);

  const handleSubmit = e => {
    e.preventDefault();


    addPlastic({
      ...plastic,
      id: store.plastic.plastic.length + 1,
    });

    setPlastic(blankPlastic)
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setPlastic({ ...plastic, [name]: value });
  };

  return (
    <div>
<h1>add</h1>
      <PlasticForm
        plastic={plastic}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setPlastic={setPlastic}
      />
    </div>
  );
};

export default AddPlastic;
