"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { fetchPieChartData } from '../../services/chartDataService';  // Import the data fetching service

export default function PieChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState<any[]>([]);

  // Fetch the data from the API
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPieChartData();  // Call the service to fetch data
        setChartData(data);
      } catch (error) {
        console.error("Error fetching Pie chart data:", error);
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
        type: "pie",
        data: {
          labels: labels,  // Use the labels from the API response
          datasets: [
            {
              label: "# of Sales",
              data: values,  // Use the values from the API response
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          radius: "50%",
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
