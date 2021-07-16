import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import PlasticCard from './PlasticCard'

const PlasticList = ({toggleEdit}) => {

    const dispatch = useDispatch();

    const store = useSelector((state) => state.plastic.plastic);

    useEffect(() => {
        console.log("i am the store", store)
    })


    return (
        <div>
                {store && store.map((plastic) => (
                    <PlasticCard plastic={plastic} key={plastic.id} toggleEdit={toggleEdit}/>
                ))}

        </div>
    )
}


export default PlasticList