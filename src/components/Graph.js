import {
  ArgumentAxis,
  BarSeries,
  Chart,
  LineSeries,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@mui/material/Paper";

const Graph = () => {
  // https://devexpress.github.io/devextreme-reactive/react/chart/docs/reference/bar-series/

  const store = useSelector((state) => state.plastic.plastic);
  const sillyData = [
    { argument: 'Monday', value: 30 },
    { argument: 'Tuesday', value: 20 },
    { argument: 'Wednesday', value: 10 },
    { argument: 'Thursday', value: 50 },
    { argument: 'Friday', value: 60 },
  ];
  const [data, setData] = useState([]);

  const hm = [1, 3, 5, 3, 1];

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

console.log('LOOK HERE', data)
  
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
