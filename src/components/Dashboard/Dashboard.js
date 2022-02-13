import React, {useEffect, useState} from 'react'

import Graph from '../Graph'
import PlasticList from '../PlasticList';

const Dashboard = ({toggleEdit, graphData, setGraphData}) => {





    return (
        <div>
            <Graph  graphData={graphData} setGraphData={setGraphData} />
            <PlasticList toggleEdit={toggleEdit} graphData={graphData} setGraphData={setGraphData} />  
           
        </div>
    )
}

export default Dashboard