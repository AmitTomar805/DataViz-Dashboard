import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { ApexOptions } from 'apexcharts';  // Import ApexOptions type
import { fetchCandlestickData } from '../../services/chartDataService';

// Dynamically import ApexChart to prevent SSR issues
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CandlestickChart() {
  const [series, setSeries] = useState([{ data: [] }]);
  
  const options: ApexOptions = {
    chart: {
      type: 'candlestick',  // Explicitly set type to 'candlestick'
      height: 350,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCandlestickData();

        // Transform the API response into the format ApexCharts expects
        const formattedData = data.map((item: any) => ({
          x: new Date(item.x),
          y: [parseFloat(item.open), parseFloat(item.high), parseFloat(item.low), parseFloat(item.close)],
        }));

        setSeries([{ data: formattedData }]);
      } catch (error) {
        console.error('Error fetching candlestick chart data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div id="chart" style={{ height: "100%", width: "100%" }}>
      <ApexChart options={options} series={series} type="candlestick" />  {/* Explicitly set type here */}
    </div>
  );
}
