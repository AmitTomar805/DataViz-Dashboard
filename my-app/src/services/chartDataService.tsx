// Import Axios for HTTP requests
import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'http://localhost:8000/api';

// API endpoints for different chart types
const endpoints = {
  candlestick: `${API_BASE_URL}/candlestick/`,
  lineChart: `${API_BASE_URL}/line/`,
  barChart: `${API_BASE_URL}/bar/`,
  pieChart: `${API_BASE_URL}/pie/`,
};

// Function to show a popup with the error message
const showErrorPopup = (errorMessage: string) => {
  window.alert(`Error: ${errorMessage}`);
};

// Fetch Candlestick chart data
export const fetchCandlestickData = async () => {
  try {
    const response = await axios.get(endpoints.candlestick);
    return response.data; // Return the fetched data
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
    console.error('Error fetching Candlestick data:', errorMessage);
    showErrorPopup(errorMessage); // Show popup with error message
    throw error; // Propagate the error
  }
};

// Fetch Line chart data
export const fetchLineChartData = async () => {
  try {
    const response = await axios.get(endpoints.lineChart);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
    console.error('Error fetching Line chart data:', errorMessage);
    showErrorPopup(errorMessage);
    throw error;
  }
};

// Fetch Bar chart data
export const fetchBarChartData = async () => {
  try {
    const response = await axios.get(endpoints.barChart);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
    console.error('Error fetching Bar chart data:', errorMessage);
    showErrorPopup(errorMessage);
    throw error;
  }
};

// Fetch Pie chart data
export const fetchPieChartData = async () => {
  try {
    const response = await axios.get(endpoints.pieChart);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error';
    console.error('Error fetching Pie chart data:', errorMessage);
    showErrorPopup(errorMessage);
    throw error;
  }
};
