"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { fetchCandlestickData } from '../../services/chartDataService';  // Import the service

// Dynamically import ReactApexChart to avoid server-side rendering issues
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CandlestickChart() {
  // State to store chart data and ApexChart options
  const [series, setSeries] = useState([{ data: [] }]);
  const [options] = useState({
    chart: {
      type: 'candlestick' as const,
      height: 350
    },
    xaxis: {
      type: 'datetime' as const
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  });

  // Fetch data on component mount
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCandlestickData();  // Fetch data from the service

        // Transform the API response into the format ApexCharts expects
        const formattedData = data.map((item: any) => ({
          x: new Date(item.x),
          y: [parseFloat(item.open), parseFloat(item.high), parseFloat(item.low), parseFloat(item.close)]
        }));

        // Set the transformed data in the series
        setSeries([{ data: formattedData }]);
      } catch (error) {
        console.error('Error fetching candlestick chart data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div id="chart" style={{ height: "100%", width: "100%" }}>
      <ApexChart options={options} series={series} type="candlestick" />
    </div>
  );
}
