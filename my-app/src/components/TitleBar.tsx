import React from 'react';
import Box from '@mui/material/Box';
import titleLogo from '../../public/images/file.png';
export default function TitleBar() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <img src={titleLogo.src} alt="DataViz Logo" style={{ height: '50px', width: '120px' }} />
        </Box>
    );
}