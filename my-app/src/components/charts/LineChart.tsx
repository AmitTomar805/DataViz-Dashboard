"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { fetchLineChartData } from '../../services/chartDataService';  // Import the service

export default function LineChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState<any[]>([]);

  // Fetch the data from the API
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchLineChartData();  // Call the service function to fetch data
        setChartData(data);
      } catch (error) {
        console.error("Error fetching Line chart data:", error);
      }
    };

    getData();
  }, []);

  // Update the chart when data is available
  useEffect(() => {
    if (chartData.length > 0 && chartRef.current) {
      // Destroy the previous chart instance if it exists
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }

      // Transform the API response into the format needed for Chart.js
      const labels = chartData.map(item => item.label);
      const values = chartData.map(item => parseFloat(item.value));

      const context = (chartRef.current as any).getContext("2d");

      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: labels,  // Use the labels from the API response
          datasets: [
            {
              label: "Revenue",  // Customize the label as needed
              data: values,  // Use the values from the API response
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1
            }
          ]
        },
        options: {
          responsive: true
        }
      });

      (chartRef.current as any).chart = newChart;
    }
  }, [chartData]);  // Re-run this effect when `chartData` changes

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
