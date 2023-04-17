import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import theme from '../src/theme';
import SpeedDial from './SpeedDial';

const Header = () => {
    return (
      <>
      <SpeedDial />

<Stack direction='column' sx={{backgroundColor: theme.palette.primary.main, textAlign: 'center', height: 200}}>

        <Typography variant="h3" component='div' sx={{color: theme.palette.warning.main}}> Tanya Engelhart</Typography>
        <Typography variant="h4" component='div' sx={{color: theme.palette.warning.main}}>software developer</Typography>
       

        </Stack>


      </>
    );
};

export default Header;
