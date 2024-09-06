"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import CandlestickChart from './charts/CandlestickChart';
import PieChart from './charts/PieChart';
import HamburgerMenu from './HamburgerMenu';
import TitleBar from './TitleBar';
const Item = styled(Paper)(({ theme }: { theme: any }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Dashboard() {
    return (
        <Box sx={{ width: 1 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
            {/* Full width item */}
            <Box sx={{ gridColumn: 'span 12' }}>
              <Item><TitleBar/></Item>
            </Box>
            
            {/* Left panel */}
            <Box sx={{ gridColumn: 'span 2' }}>
              <Item><HamburgerMenu/></Item>
            </Box>
            
            {/* Right panel with 4 boxes in 2 rows */}
            <Box sx={{ gridColumn: 'span 10', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            <Item><LineChart/></Item>
              <Item><BarChart/></Item>
              <Item><PieChart/></Item>
              <Item><CandlestickChart/></Item>
            </Box>
          </Box>
        </Box>
      );
};
