import { Box, Typography } from '@mui/material';
import React from 'react';

import theme from '../src/theme';

const Footer = () => {
    return (
        <>
    <Typography component='div' sx={{color: theme.palette.warning.main, fontSize: '24px',  fontWeight: 'bold', textAlign: 'right', justifyContent: 'right', pr: 5}}>&copy; Technical Tanya, 2023</Typography>

</>

    );
};

export default Footer;