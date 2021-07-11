import React, { useState, useEffect } from "react";

const PlasticForm = ({ plastic, handleSubmit, handleChange, setPlastic }) => {

console.log("plastic on PlasticForom", plastic)

useEffect(() => {
  setPlastic(plastic)
}, [])

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

        <label htmlFor="usage">Type of Plastic</label>
        <select name="usage" id="usage" onChange={handleChange} value={plastic.usage || ''}>
          <option value="beverage bottle">beverage bottle</option>
          <option value="food packaging">food packaging</option>
          <option value="laundry and cleaning packaging">
            other packaging
          </option>
          <option value="cosmetics">cosmetics</option>
          <option value="plastic bags">plastic bags</option>
          <option value="styrofoam">styrofoam</option>
          <option value="other">other</option>
        </select>

        <label htmlFor="occasion">Occasion</label>
        <select name="occasion" id="occasion" onChange={handleChange} value={plastic.occasion || ''}>
          <option value="meal">On-the-go</option>
          <option value="work">Work</option>
          <option value="cooking">Cooking</option>
          <option value="special occasion">Special occasion</option>
          <option value="cleaning">Cleaning</option>
          <option value="everyday use">Everyday use</option>
        </select>

        <label htmlFor="typeOfPlastic">Type of Plastic</label>
        <select name="typeOfPlastic" id="typeOfPlastic" onChange={handleChange} value={plastic.typeOfPlastic || ''}>
          <option value="pet">PET(E)</option>
          <option value="hdpe">HDPE</option>
          <option value="ldpe">LDPE</option>
          <option value="pvc">PVC</option>
          <option value="pp">PP</option>
          <option value="styrofoam">Styrofoam</option>
        </select>

        <button>Add new plastic</button>
      </form>
    </div>
  );
};

export default PlasticForm;