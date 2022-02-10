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
  

  const toggleEdit = plastic => {
    setEditEnabled(!editEnabled)
    setPlastic(plastic)
    
  }

  const toggleShowForm = () => {
    
   setDisplayText(!displayText)

   if (displayText) {
     // something
   }
  }


  return (
    <div className="App">
      <>
       {/* <Routes>
        <Route path="/list" element={<Graph/>}/>
      </Routes> */}
      </>

      <Dashboard toggleEdit={toggleEdit}/>

  <h1 onClick={toggleShowForm}>dfghjkm,.</h1>
  <div style={{display: displayText? "block" : "none"}}>
      {editEnabled?  <EditPlastic plasticToEdit={plastic} editEnabled={editEnabled} setEditEnabled={setEditEnabled}/>
      : <AddPlastic blankPlastic={blankPlastic}/>}
 </div>
  
 
    </div>
  );
}

export default App;
