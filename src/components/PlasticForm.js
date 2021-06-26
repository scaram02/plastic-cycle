import React, {useState, useEffect} from 'react'

const PlasticForm = ({plastic, handleSubmit, handleChange}) => {


    return (
        <div>
        <form onSubmit={handleSubmit}>

            <input 
            type="text" 
            placeholder="name this"
            name="plasticName"
            value={plastic.plasticName}
            onChange={handleChange}
            />
            
            <button>Add new plastic</button>
        </form>
        </div>
    )
}

export default PlasticForm