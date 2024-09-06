"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { fetchCandlestickData } from '../../services/chartDataService';

// Dynamically import the chart component to avoid SSR issues
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CandlestickChart() {
  const [series, setSeries] = useState([{ data: [] }]); // Chart data state
  const [options] = useState({
    chart: {
      type: 'candlestick',
      height: 350
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCandlestickData();

        // Format API response to match chart requirements
        const formattedData = data.map((item: any) => ({
          x: new Date(item.x),
          y: [parseFloat(item.open), parseFloat(item.high), parseFloat(item.low), parseFloat(item.close)]
        }));

        setSeries([{ data: formattedData }]); // Update chart data
      } catch (error) {
        console.error('Error fetching candlestick chart data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div id="chart" style={{ height: "100%", width: "100%" }}>
      <ApexChart options={options} series={series} type="candlestick"/>
    </div>
  );
}
