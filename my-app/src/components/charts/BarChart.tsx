"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { fetchBarChartData } from '../../services/chartDataService';  // Import the function from the service

export default function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data using the service function
    const getChartData = async () => {
      try {
        const data = await fetchBarChartData();  // Call the service function
        setChartData(data);  // Set the fetched data
      } catch (error) {
        console.error("Error loading bar chart data:", error);
      }
    };

    getChartData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0 && chartRef.current) {
      // Destroy the existing chart instance if it exists
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }

      // Extract labels and values from the fetched data
      const labels = chartData.map((item) => item.label);
      const values = chartData.map((item) => parseFloat(item.value));

      const context = (chartRef.current as any).getContext("2d");

      // Create a new chart instance
      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "# of Sales",
              data: values,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Save the new chart instance
      (chartRef.current as any).chart = newChart;
    }
  }, [chartData]);  // Re-run when `chartData` changes

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
