"use client";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import CandlestickChart from './charts/CandlestickChart';
import PieChart from './charts/PieChart';
import TitleBar from './TitleBar';
import { styled } from '@mui/material';

// Styled component for the Paper element
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

export default function Dashboard() {
  return (
    <Grid container spacing={2} sx={{ width: 1 }}>
      {/* Title bar occupies full width */}
      <Grid item xs={12} sx={{ marginBottom: "20px" }}>
        <Item><TitleBar /></Item>
      </Grid>

      {/* Grid for charts, 2 columns layout */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Item><LineChart /></Item>  {/* Line chart */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item><BarChart /></Item>  {/* Bar chart */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item><PieChart /></Item>  {/* Pie chart */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item><CandlestickChart /></Item>  {/* Candlestick chart */}
        </Grid>
      </Grid>
    </Grid>
  );
}
