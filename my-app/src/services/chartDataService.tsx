// Import Axios
import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8000/api';

// Define the endpoint paths for each chart type
const endpoints = {
  candlestick: `${API_BASE_URL}/candlestick/`,
  lineChart: `${API_BASE_URL}/line/`,
  barChart: `${API_BASE_URL}/bar/`,
  pieChart: `${API_BASE_URL}/pie/`,
};

// Function to fetch Candlestick chart data
export const fetchCandlestickData = async () => {
  try {
    const response = await axios.get(endpoints.candlestick);
    return response.data;  // Return the data from the response
  } catch (error) {
    console.error('Error fetching Candlestick data:', error);
    throw error;  // Propagate the error to the caller
  }
};

// Function to fetch Line chart data
export const fetchLineChartData = async () => {
  try {
    const response = await axios.get(endpoints.lineChart);
    return response.data;
  } catch (error) {
    console.error('Error fetching Line chart data:', error);
    throw error;
  }
};

// Function to fetch Bar chart data
export const fetchBarChartData = async () => {
  try {
    const response = await axios.get(endpoints.barChart);
    return response.data;
  } catch (error) {
    console.error('Error fetching Bar chart data:', error);
    throw error;
  }
};

// Function to fetch Pie chart data
export const fetchPieChartData = async () => {
  try {
    const response = await axios.get(endpoints.pieChart);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pie chart data:', error);
    throw error;
  }
};
