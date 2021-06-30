import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const PlasticList = ({toggleEdit}) => {

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
                    <button onClick={() => toggleEdit(plastic)}>Edit</button>
                    </div>
                ))}

        </div>
    )
}


export default PlasticList