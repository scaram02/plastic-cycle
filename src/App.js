import './App.css';

import {
  Link,
  Route,
  Routes
} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

import AddPlastic from './components/PlasticForm/components/AddPlastic'
import Dashboard from './components/Dashboard/Dashboard'
import EditPlastic from './components/PlasticForm/components/EditPlastic';

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
  const [displayText, setDisplayText] = useState(false)
  const [graphData, setGraphData] = useState([]); 
// to do: sort graph data alphabetically so no order change upon change
  
  const toggleEdit = plastic => {
    setEditEnabled(!editEnabled)
    setPlastic(plastic)
    
  }
 
  const toggleShowForm = () => {
    
   setDisplayText(!displayText)

  }





  
console.log('graph data', graphData)
  
return (
    <div className="App">

      <Dashboard toggleEdit={toggleEdit} graphData={graphData} setGraphData={setGraphData} />

  <h1 onClick={toggleShowForm}>show/hide.</h1>
  <div style={{display: displayText? "block" : "none"}}>
      {editEnabled?  <EditPlastic plasticToEdit={plastic} editEnabled={editEnabled} setEditEnabled={setEditEnabled} graphData={graphData} setGraphData={setGraphData} />
      : <AddPlastic blankPlastic={blankPlastic}/>}
 </div>
  
 
    </div>
  );
}

export default App;
