import React, {useEffect, useState} from 'react'

import Graph from '../Graph'
import PlasticList from '../PlasticList';

const Dashboard = ({toggleEdit}) => {




    return (
        <div>
            <Graph/>
            <PlasticList toggleEdit={toggleEdit}/>  
           
        </div>
    )
}

export default Dashboard