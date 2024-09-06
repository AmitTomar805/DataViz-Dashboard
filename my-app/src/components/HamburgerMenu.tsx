"use client";
import * as React from 'react';
import Link from 'next/link';  // Import the Link component from Next.js
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Styles from '../styles/components/HamburgerMenu.module.css';
export default function HamburgerMenu() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, height: '30vw', justifyContent:"center", alignItems:"center" }}>
      <Link href="/Bar-Chart" passHref>
        <Paper className={Styles.paperItem}>
          Bar Chart
        </Paper>
      </Link>
      <Link href="/Candlestick-Chart" passHref>
        <Paper 
          className={Styles.paperItem}
        >
          Candlestick Chart
        </Paper>
      </Link>
      <Link href="/Line-Chart" passHref>
        <Paper 
          className={Styles.paperItem}
        >
          Line Chart
        </Paper>
      </Link>
      <Link href="/Pie-Chart" passHref>
        <Paper 
          className={Styles.paperItem}
        >
          Pie Chart
        </Paper>
      </Link>
    </Box>
  );
}
