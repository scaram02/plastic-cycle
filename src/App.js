import React, {useEffect, useState} from 'react'
import AddPlastic from './components/AddPlastic'
import EditPlastic from './components/EditPlastic';
import PlasticList from './components/PlasticList'
import './App.css';

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

  const toggleEdit = plasticId => {
    setEditEnabled(!editEnabled)
    setPlastic(plasticId)
    
  }
console.log('hmm,', plastic)

  return (
    <div className="App">
      <AddPlastic blankPlastic={blankPlastic}/>
      <EditPlastic plasticToEdit={plastic} editEnabled={editEnabled} setEditEnabled={setEditEnabled}/>
      <PlasticList toggleEdit={toggleEdit}/>
    </div>
  );
}

export default App;
