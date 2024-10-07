'use client';

import { Grid } from '@mui/system';
import Profile from '@/sections/introduction/view/Profile';
import AboutMe from '@/sections/introduction/view/AboutMe';

export default function Introduction() {
  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        height: "80vh",
        mx: "auto",
        // paddingBottom: 5,
    }}
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
