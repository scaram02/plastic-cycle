import React, { useEffect } from "react";

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {occasions} from '../../dataTypes/occasions'
import {plasticTypes} from '../../dataTypes/plasticTypes'
import {plasticUses} from '../../dataTypes/plasticUses'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    border: '2px solid pink',
  },
  menu: {
    marginTop: 30
  },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // }
}));



const PlasticForm = ({ plastic, handleSubmit, handleChange, setPlastic, buttonText }) => {


  const classes = useStyles();

useEffect(() => {
  setPlastic(plastic)
}, [])

  return (
    <div>
  
      <form onSubmit={handleSubmit} className={classes.formControl} >
    {/* <FormControl className={classes.formControl} onSubmit={handleSubmit}> */}
<div>
        <TextField
          // className={classes.menu}
          type="text"
          placeholder="name this"
          name="plasticName"
          value={plastic.plasticName}
          onChange={handleChange}
        />

        <InputLabel htmlFor="usage" className={classes.menu}>Usage</InputLabel>
        <Select name="usage" id="usage" onChange={handleChange} value={plastic.usage || ''} >
          {plasticUses.map((use) => {
            return <MenuItem value={use}>{use}</MenuItem>
          })}
        </Select>
   
   
        <InputLabel htmlFor="occasion" className={classes.menu}>Occasion</InputLabel>
        <Select name="occasion" id="occasion" onChange={handleChange} value={plastic.occasion || ''} >
        {occasions.map((o) => {
            return <MenuItem value={o}>{o}</MenuItem>
          })}
        </Select>
   

        <InputLabel htmlFor="typeOfPlastic" className={classes.menu}>Type of Plastic</InputLabel>
        <Select name="typeOfPlastic" id="typeOfPlastic" onChange={handleChange} value={plastic.typeOfPlastic || ''} >
          {plasticTypes.map((plastic) => {
            return <MenuItem value={plastic}>{plastic}</MenuItem>
          })}
        </Select>

</div>
        <Button 
        className={classes.menu}
        color="secondary"
        type="submit"
        variant="contained"
        size='medium'
       >{buttonText}
       </Button>
   {/* </FormControl> */}
      </form>
   
    </div>
  );
};

export default PlasticForm;