import React from 'react';
import {Box, Typography} from "@mui/material"
import Link from 'next/link'
import theme from '../src/theme';

const Footer = () => {
    return (
    <Box sx={{backgroundColor: theme.palette.error.main, height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'top'}}>
        <Typography>
        <Link target='_blank' href="https://drive.google.com/file/d/1ePU-kuP3ALjFKvV0m_WGJRLEHHuloaqC/view?usp=share_link">
   <Typography variant="h4" sx={{color: theme.palette.warning.main}}>Link to my <em>resume</em></Typography>
   <Typography variant="subtitle1" sx={{mt:19, color: theme.palette.secondary.main}}>&copy; Technical Tanya, 2023</Typography>

</Link>
        </Typography>

    </Box>
    );
};

export default Footer;