import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import './infoGraph.css';

export default function InfoGraph({chartData}) {
  return  (
    <div className='graficoBar'>
        <Bar data={chartData}/>
        <Bar data={chartData}/>
        <Bar data={chartData}/>
        <Bar data={chartData}/>
    </div>
  );
}