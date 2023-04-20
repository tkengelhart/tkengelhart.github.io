import { Stack, Typography } from '@mui/material';
import React from 'react';
import theme from '../src/theme';

const Header = () => {
    return (
      <>

<Stack direction='column' sx={{textAlign: 'center'}}>

        <Typography variant="h3" component='div' sx={{color: theme.palette.warning.main, fontWeight: 'bolder'}}> Tanya Engelhart</Typography>
        <Typography variant="h4" component='div' sx={{color: theme.palette.warning.main, fontWeight: 'bolder'}}>software developer</Typography>
       

        </Stack>


      </>
    );
};

export default Header;