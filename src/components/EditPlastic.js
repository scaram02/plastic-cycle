import React, { useState, useEffect } from "react";
import PlasticForm from "./PlasticForm";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector, useDispatch } from "react-redux";

const EditPlastic = ({plasticToEdit, editEnabled, setEditEnabled}) => {

    const dispatch = useDispatch();
    const { editPlastic } = bindActionCreators(actionCreators, dispatch);
    const store = useSelector((state) => state);

    const  [thePlastic, setThePlastic] = useState(plasticToEdit)

    const handleSubmit = e => {
        e.preventDefault()
        setEditEnabled(false)
        editPlastic() // ???
    }

    const handleChange = e => {
        const { name, value } = e.target;

        // somethign mroe here
    }

    return (
        <div>
            <h1>edit</h1>
        </div>
    )
}


export default EditPlastic