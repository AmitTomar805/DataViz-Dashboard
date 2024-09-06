"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }

      const context = (chartRef.current as any).getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: ["Product A", "Product B", "Product C"],
          datasets: [
            {
              label: "# of Sales",
              data: [100, 150, 200],
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
          scales: {
            y: {
              beginAtZero: true
            }
          }
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
