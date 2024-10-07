'use client';

import { Grid } from '@mui/system';
import Profile from '@/sections/Introduction/view/Profile';
import AboutMe from '@/sections/Introduction/view/AboutMe';

export default function Introduction() {
  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      // sx={{margin:"auto"}}
    >
      <Grid item>
        <Profile />
      </Grid>
      <Grid item>
        <AboutMe />
      </Grid>
    </Grid>
  );
}
