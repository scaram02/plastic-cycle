import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


const PlasticList = () => {

    const store = useSelector((state) => state.plastic.plastic);

    useEffect(() => {
        console.log("i am the store", store)
    })


    return (
        <div>

                {store && store.map((plastic) => (
                    <div key={plastic.id}>
                    <h2>{plastic.plasticName}</h2>
                    <p>{plastic.typeOfPlastic}</p>
                    </div>
                ))}

        </div>
    )
}


export default PlasticList