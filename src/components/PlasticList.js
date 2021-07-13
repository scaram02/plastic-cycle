import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';


const PlasticList = ({toggleEdit}) => {

    const dispatch = useDispatch();
    const { removePlastic } = bindActionCreators(actionCreators, dispatch);

    const store = useSelector((state) => state.plastic.plastic);

    useEffect(() => {
        console.log("i am the store", store)
    })


    return (
        <div>
                {store && store.map((plastic) => (
                    <div key={plastic.id}>
                    <h2>name: {plastic.plasticName}</h2>
                    <p>type: {plastic.typeOfPlastic}</p>
                    <Button onClick={() => toggleEdit(plastic)}>Edit</Button>
                    <Button color="secondary" onClick={() => removePlastic(plastic)}>Remove plastic!</Button>
                    </div>
                ))}

        </div>
    )
}


export default PlasticList