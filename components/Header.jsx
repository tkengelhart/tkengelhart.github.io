import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../src/theme';
import SpeedDial from './SpeedDial';

const Header = () => {
    return (
      <>
            <Box sx={{backgroundColor: theme.palette.primary.main, display: 'flex'}}>

      <SpeedDial />
<Box sx={{width: '100%', justifyItems: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '40px'}}>
        <Typography variant="h3" component='div' sx={{color: theme.palette.warning.main}}> Tanya Engelhart</Typography>
        <Typography variant="h4" component='div' sx={{color: theme.palette.warning.main}}>software developer</Typography>

      </Box>

      </Box>
      </>
    );
};

export default Header;
