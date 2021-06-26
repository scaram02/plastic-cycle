import React, {useState, useEffect} from 'react'
import PlasticForm from './PlasticForm'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../state/index'
import {useSelector, useDispatch} from 'react-redux'

const AddPlastic = () => {


    const [plastic, setPlastic] = useState('this is WRonG') // need to remove this, change all functions on this pate

    const dispatch = useDispatch()
    const {addPlastic} = bindActionCreators(actionCreators, dispatch)

    const wirSchauennn = useSelector((state) => state)
    console.log(wirSchauennn)

    const handleSubmit = e => {
        e.preventDefault()
        //add the reduxy part here 
        // check laater if handlesubmti can be moved to the form, ad just the redux part stays here to be passed down. idk
    }

    const handleChange = e => {
        const {name, value} = e.target;

        setPlastic({...plastic, [name]: value})
    }


    return (
        <div>
            <PlasticForm plastic={plastic} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>
    )
}


export default AddPlastic