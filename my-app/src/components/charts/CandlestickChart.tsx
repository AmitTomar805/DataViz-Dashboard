"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import ReactApexChart to avoid server-side rendering issues
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CandlestickChart() {
  // Data for the candlestick chart
  const chartData = [
    { x: new Date("2023-01-01"), y: [30, 40, 25, 35] },
    { x: new Date("2023-01-02"), y: [35, 45, 30, 40] },
    { x: new Date("2023-01-03"), y: [40, 50, 35, 45] },
    { x: new Date("2023-01-04"), y: [45, 55, 40, 50] },
    { x: new Date("2023-01-05"), y: [50, 60, 45, 55] }
  ];

  // ApexCharts options and data structure
  const [options] = useState({
    chart: {
      type: 'candlestick' as const, // Explicitly set type to "candlestick"
      height: 350
    },
    xaxis: {
      type: 'datetime' as const // Explicitly set type to "datetime"
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  });

  const [series] = useState([
    {
      data: chartData
    }
  ]);

  return (
    <div id="chart" style={{height: "100%", width: "100%"}}>
      <ApexChart options={options} series={series} type="candlestick"  />
    </div>
  );
}
