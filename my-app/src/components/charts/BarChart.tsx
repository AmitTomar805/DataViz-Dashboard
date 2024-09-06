"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { fetchBarChartData } from '../../services/chartDataService';  

export default function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const getChartData = async () => {
      try {
        const data = await fetchBarChartData();  // Fetch chart data
        setChartData(data);
      } catch (error) {
        console.error("Error loading bar chart data:", error); 
      }
    };

    getChartData(); 
  }, []);

  useEffect(() => {
    if (chartData.length > 0 && chartRef.current) {
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy(); // Avoid duplicate chart rendering
      }

      const labels = chartData.map((item) => item.label); 
      const values = chartData.map((item) => parseFloat(item.value)); 

      const context = (chartRef.current as any).getContext("2d");

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

      (chartRef.current as any).chart = newChart;
    }
  }, [chartData]); 

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <canvas ref={chartRef} data-testid="bar-chart-canvas"></canvas>  
    </div>
  );
}
