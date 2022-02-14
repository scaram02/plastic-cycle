import {
  ArgumentAxis,
  BarSeries,
  Chart,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const Graph = ({ graphData, setGraphData }) => {
  // https://devexpress.github.io/devextreme-reactive/react/chart/docs/reference/bar-series/

  const store = useSelector((state) => state.plastic.plastic);

  const [count, setCount] = useState({})

  const setOccasion = () => {
    const occasionCount =
      store.length > 0 &&
      store
        .map((p) => p.occasion)
        .reduce((a, e) => {
          a[e] = a[e] ? a[e] + 1 : 1;
          return a;
        }, {});
        setCount(occasionCount)
      
    // {cooking: 2, work: 1}

    for (var occ in occasionCount) {
      // remove all objs with same occ,  just use the one with the final count and setgraphdata to it
      setGraphData([
        ...graphData.filter((d) => d.argument !== occ),
        { argument: occ, value: occasionCount[occ] },
      ]);
    }
  };

  console.log(" THE count", count);



  useEffect(() => {
    setOccasion();
  }, [store]);
console.log('stre', store)
  return (
      <div>
      { !graphData ? <p>nothing yet</p> : 
    <Paper>
      <Chart data={graphData}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="value" argumentField="argument" color="hotPink" barWidth=".25" />
      </Chart>
    </Paper>
      }
      </div>
  );
};

export default Graph;
