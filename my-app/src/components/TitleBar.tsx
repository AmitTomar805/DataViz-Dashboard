import React from 'react';
import Box from '@mui/material/Box';
import titleLogo from '../../public/images/file.png';
import HamburgerMenu from './HamburgerMenu';  // Import the HamburgerMenu component

export default function TitleBar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
      {/* Hamburger menu on the left side */}
      <HamburgerMenu /> 

      {/* Centered logo */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <img src={titleLogo.src} alt="DataViz Logo" style={{ height: '50px', width: '120px' }} />
      </Box>
    </Box>
  );
}
