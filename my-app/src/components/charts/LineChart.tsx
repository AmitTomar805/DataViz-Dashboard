"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { fetchLineChartData } from '../../services/chartDataService';  

export default function LineChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchLineChartData();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching Line chart data:", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0 && chartRef.current) {
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy(); // Destroy existing chart instance
      }

      const labels = chartData.map(item => item.label); 
      const values = chartData.map(item => parseFloat(item.value)); 

      const context = (chartRef.current as any).getContext("2d");

      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Revenue", 
              data: values, 
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

      (chartRef.current as any).chart = newChart;  // Save chart instance
    }
  }, [chartData]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <canvas ref={chartRef} data-testid="line-chart-canvas"></canvas>
    </div>
  );
}
