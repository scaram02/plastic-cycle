import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormGroup } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const PlasticForm = ({ plastic, handleSubmit, handleChange, setPlastic }) => {

  const classes = useStyles();
console.log("plastic on PlasticForom", plastic)

useEffect(() => {
  setPlastic(plastic)
}, [])

  return (
    <div>
      {/* <FormControl className={classes.formControl} onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit} className={classes.formControl} >


        <TextField
          type="text"
          placeholder="name this"
          name="plasticName"
          value={plastic.plasticName}
          onChange={handleChange}
        />

        <InputLabel htmlFor="usage">Type of Plastic</InputLabel>
        <Select name="usage" id="usage" onChange={handleChange} value={plastic.usage || ''}>
          <MenuItem value="beverage bottle">beverage bottle</MenuItem>
          <MenuItem value="food packaging">food packaging</MenuItem>
          <MenuItem value="laundry and cleaning packaging">
            other packaging
          </MenuItem>
          <MenuItem value="cosmetics">cosmetics</MenuItem>
          <MenuItem value="plastic bags">plastic bags</MenuItem>
          <MenuItem value="styrofoam">styrofoam</MenuItem>
          <MenuItem value="other">other</MenuItem>
        </Select>
   
   
        <InputLabel htmlFor="occasion">Occasion</InputLabel>
        <Select name="occasion" id="occasion" onChange={handleChange} value={plastic.occasion || ''}>
          <MenuItem value="meal">On-the-go</MenuItem>
          <MenuItem value="work">Work</MenuItem>
          <MenuItem value="cooking">Cooking</MenuItem>
          <MenuItem value="special occasion">Special occasion</MenuItem>
          <MenuItem value="cleaning">Cleaning</MenuItem>
          <MenuItem value="everyday use">Everyday use</MenuItem>
        </Select>
   

        <InputLabel htmlFor="typeOfPlastic">Type of Plastic</InputLabel>
        <Select name="typeOfPlastic" id="typeOfPlastic" onChange={handleChange} value={plastic.typeOfPlastic || ''}>
          <MenuItem value="pet">PET(E)</MenuItem>
          <MenuItem value="hdpe">HDPE</MenuItem>
          <MenuItem value="ldpe">LDPE</MenuItem>
          <MenuItem value="pvc">PVC</MenuItem>
          <MenuItem value="pp">PP</MenuItem>
          <MenuItem value="styrofoam">Styrofoam</MenuItem>
        </Select>

        <Button  color="secondary"
        type="submit"
        variant="contained"
        fullWidth>Add new plastic</Button>
      {/* </FormControl> */}
      </form>
    </div>
  );
};

export default PlasticForm;