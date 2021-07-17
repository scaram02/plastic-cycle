import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector, useDispatch } from "react-redux";

const PlasticCard = ({plastic, toggleEdit}) => {

    const dispatch = useDispatch();
    const { removePlastic } = bindActionCreators(actionCreators, dispatch);


    return (
        <div>
            <h1>Name: {plastic.plasticName}</h1>
            <p>Usage: {plastic.usage}</p>
            <p>Type: {plastic.typeOfPlastic}</p>
            <Button onClick={() => toggleEdit(plastic)}>Edit</Button>
            <Button color="secondary" onClick={() => removePlastic(plastic)}>Remove plastic!</Button>
        </div>
    )
}

export default PlasticCard