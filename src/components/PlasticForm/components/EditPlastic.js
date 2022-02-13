import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlasticForm from "./PlasticForm";
import { actionCreators } from "../../../state/index";
import { bindActionCreators } from "redux";

const EditPlastic = ({plasticToEdit, setEditEnabled, graphData, setGraphData}) => {

    const dispatch = useDispatch();
    const { editPlastic } = bindActionCreators(actionCreators, dispatch);
    const store = useSelector((state) => state);

    const  [thePlastic, setThePlastic] = useState(plasticToEdit)

 
// [{argument: 'blah', value: 2}, {argument: 'asd', val: 4}]
    
    useEffect(() => {
        setThePlastic(plasticToEdit)
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        setEditEnabled(false)


        editPlastic(thePlastic, thePlastic.id) 
        // NEED TO SETGRAPHDATA Here
        handleGraphEdit(thePlastic)
            
        
     
    }

    // to do: clean this up 
    const handleGraphEdit = thePlastic => {
        // arguments added:
        const newOcc = thePlastic.occasion;
        const oldOcc = store.plastic.plastic.filter((d) => d.id === thePlastic.id)[0].occasion
        
        const f = newOcc && graphData.filter((d) => d.argument !== newOcc)

        // vals added:
        const addedTo =  newOcc && graphData.filter((d) => d.argument === newOcc).length === 0? 1 : graphData.filter((d) => d.argument === newOcc)[0].value += 1
        const removed = graphData.filter((d) => d.argument === oldOcc).length === 0? 0 : graphData.filter((d) => d.argument === oldOcc)[0].value -= 1

        setGraphData([...f, {argument: newOcc, value: addedTo}, {argument: oldOcc, value: removed}])
        
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