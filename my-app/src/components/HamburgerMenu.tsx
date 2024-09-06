"use client";
import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';  // Use Next.js Link for navigation

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);  // State to track drawer open/close

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);  // Toggle drawer state
  };

  return (
    <div>
      {/* Button to open the drawer */}
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      {/* Drawer for navigation links */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          {/* Each link wraps a ListItem for navigation */}
          <Link href="/Bar-Chart" passHref>
            <ListItem component="a">  
              <ListItemText primary="Bar Chart" />
            </ListItem>
          </Link>
          <Link href="/Candlestick-Chart" passHref>
            <ListItem component="a">
              <ListItemText primary="Candlestick Chart" />
            </ListItem>
          </Link>
          <Link href="/Line-Chart" passHref>
            <ListItem component="a">
              <ListItemText primary="Line Chart" />
            </ListItem>
          </Link>
          <Link href="/Pie-Chart" passHref>
            <ListItem component="a">
              <ListItemText primary="Pie Chart" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}
