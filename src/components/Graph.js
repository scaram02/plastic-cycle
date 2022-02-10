import {
  ArgumentAxis,
  BarSeries,
  Chart,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";
import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const Graph = () => {
  // https://devexpress.github.io/devextreme-reactive/react/chart/docs/reference/bar-series/

  const store = useSelector((state) => state.plastic.plastic);

  const [data, setData] = useState([]);


  const setOccasion = () => {
    const occasionCount =
    (store.length > 0) &&
    store
      .map((p) => p.occasion)
      .reduce((a, e) => {
        a[e] = a[e] ? a[e] + 1 : 1;
        return a;
      }, {});

      for (var occ in occasionCount) {
          console.log('hm')
       setData([...data, {argument: occ, value: occasionCount[occ]}])
      }
  };

  useEffect(() => {
   setOccasion()

  }, [store]);


  
  return (
        <Paper>
          <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis />
            <BarSeries
              valueField="value"
              argumentField="argument"
              color="hotPink"
            />
          </Chart>
        </Paper>

  );
};

export default Graph;
