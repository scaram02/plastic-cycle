import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlasticForm from "./PlasticForm";
import { actionCreators } from "../../../state/index";
import { bindActionCreators } from "redux";

const AddPlastic = ({blankPlastic}) => {

  
  
  const [plastic, setPlastic] = useState(blankPlastic);

  const dispatch = useDispatch();
  const { addPlastic } = bindActionCreators(actionCreators, dispatch);

  const store = useSelector((state) => state);

  const handleSubmit = e => {
    e.preventDefault();

    if (!plastic.plasticName || !plastic.usage || !plastic.occasion || !plastic.typeOfPlastic) return;

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

  const buttonText = 'Add new plastic'



  return (
    <div>
<h1>add</h1>
      <PlasticForm
        plastic={plastic}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setPlastic={setPlastic}
        buttonText={buttonText}
      />
    </div>
  );
};

export default AddPlastic;
