import './App.css';

import React, {useEffect, useState} from 'react'

import AddPlastic from './components/PlasticForm/AddPlastic'
import EditPlastic from './components/PlasticForm/EditPlastic';
import PlasticList from './components/PlasticList'

const App = () => {


  const blankPlastic = {
    id: null,
    plasticName: "",
    usage: null,
    occasion: null,
    typeOfPlastic: null,
  };

  const [plastic, setPlastic] = useState(blankPlastic)
  const [editEnabled, setEditEnabled] = useState(false)

  const toggleEdit = plastic => {
    setEditEnabled(!editEnabled)
    setPlastic(plastic)
    
  }


  return (
    <div className="App">
      {editEnabled?  <EditPlastic plasticToEdit={plastic} editEnabled={editEnabled} setEditEnabled={setEditEnabled}/>
      : <AddPlastic blankPlastic={blankPlastic}/> }
      
     
      <PlasticList toggleEdit={toggleEdit}/>
    </div>
  );
}

export default App;
