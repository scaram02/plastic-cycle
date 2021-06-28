// import React, {useEffect, useState} from 'react'
import AddPlastic from './components/AddPlastic'
import EditPlastic from './components/EditPlastic';
import PlasticList from './components/PlasticList'
import './App.css';

const App = () => {




  return (
    <div className="App">
      <AddPlastic/>
      <EditPlastic/>
      <PlasticList/>
    </div>
  );
}

export default App;
