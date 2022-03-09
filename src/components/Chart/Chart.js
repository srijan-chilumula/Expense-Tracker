import React from 'react';
import ChartBar from './ChartBar.js';
import './Chart.css';
const Chart=props=>
{
    const dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMax=Math.max(...dataPointsValues);
    return (<div className='chart'>
        {props.dataPoints.map(dataPoint=>
        <ChartBar value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}
        />)}
    </div>);
}
export default Chart;