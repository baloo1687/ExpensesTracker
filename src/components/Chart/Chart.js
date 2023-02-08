import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
  const datePointsValues = props.datePoints.map(datePoint => datePoint.value);

  return (
    <div className="chart">
      {
        props.datePoints.map(datePoint => {
          return (
            <ChartBar 
              key={datePoint.month}
              maxValue={Math.max(...datePointsValues)}
              label={datePoint.month}
              value={datePoint.value}
            />
          )
        })
      }
    </div>
  )
}

export default Chart;