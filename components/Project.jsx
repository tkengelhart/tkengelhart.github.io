import React from 'react';
import Link from 'next/link';
import theme from '../src/theme';
import { Box, Typography } from '@mui/material';

const Project = () => {
    return (
<>
<Box sx={{backgroundColor: theme.palette.warning.main, width: '100%'}}>
    <Typography variant="h2" component="div" sx={{color: theme.palette.primary.main, textAlign: 'center', ml: 5, pb: 0}}>updates coming soon</Typography>
    <Typography variant="h5" component="div" sx={{color: theme.palette.primary.main, textAlign: 'center', ml: 5, pb: 0}}>In the meantime, please connect with me by visiting the links above.</Typography>
</Box>

</>
    );
};

export default Project;