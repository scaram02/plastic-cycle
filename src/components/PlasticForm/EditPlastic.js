import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlasticForm from "./PlasticForm";
import { actionCreators } from "../../state/index";
import { bindActionCreators } from "redux";

const EditPlastic = ({plasticToEdit, editEnabled, setEditEnabled}) => {

    const dispatch = useDispatch();
    const { editPlastic } = bindActionCreators(actionCreators, dispatch);
    const store = useSelector((state) => state);

    const  [thePlastic, setThePlastic] = useState(plasticToEdit)
    
    
    useEffect(() => {
        setThePlastic(plasticToEdit)
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        setEditEnabled(false)


        editPlastic(thePlastic, thePlastic.id) 
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setThePlastic({...thePlastic, [name]: value})
    }

    const buttonText = 'Save edit'

    return (
        <div>
            <h1>edit</h1>
            <PlasticForm 
            plastic={thePlastic} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            setPlastic={setThePlastic}
            buttonText={buttonText}
            />
        </div>
    )
}


export default EditPlastic