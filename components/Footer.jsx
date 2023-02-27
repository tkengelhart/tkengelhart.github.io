import { Box, Typography } from '@mui/material';
import React from 'react';

import theme from '../src/theme';

const Footer = () => {
    return (
        <>
    <Box sx={{backgroundColor: theme.palette.error.main, width: '100%', pt: 40}}>
    <Typography component='div' sx={{color: theme.palette.primary.main, fontSize: '24px',  fontWeight: 'bold', textAlign: 'right', justifyContent: 'right', pr: 5}}>&copy; Technical Tanya, 2023</Typography>
</Box>

</>

    );
};

export default Footer;