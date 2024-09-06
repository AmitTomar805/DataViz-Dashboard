"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }
      
      const context = (chartRef.current as any).getContext("2d");
      
      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr"], // Updated labels
          datasets: [
            {
              label: "My Dataset", // You can update this label if needed
              data: [10, 20, 30, 40], // Updated data
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
  }, []);

  return (
    <div style={{height: "100%", width: "100%"}}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}