import React from 'react';
import Link from 'next/link';
import theme from '../src/theme';
import { Box, Typography } from '@mui/material';

const Project = () => {
    return (
<>
<Box sx={{color: theme.palette.warning.main, width: '100%', minHeight: '20%'}}>
    <Typography variant="h1" component="div" sx={{color: theme.palette.error.main, textAlign: 'left', ml: 5 }}>updates coming soon</Typography>
    <Typography variant="h4" component="div" sx={{color: theme.palette.error.main, textAlign: 'left', ml: 5 }}>In the meantime, please connect with me by visiting the links above.</Typography>



</Box>

</>
    );
};

export default Project;