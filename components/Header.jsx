import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../src/theme';


const Header = () => {
    return (
      <Box sx={{backgroundColor: theme.palette.primary.main, width: '100%', height: '500px', padding: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <Typography variant="h3" component='div' sx={{color: theme.palette.warning.main}}> Updates coming soon.</Typography>
      </Box>
    );
};

export default Header;