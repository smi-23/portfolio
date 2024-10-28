'use client';
import { Grid } from '@mui/system';
import { Typography } from '@mui/material';
import Skills from '@/sections/mySkills/view/Skills';

export default function MySkills() {
  return (
    <div id={'skills'}>
      <Grid
        container
        // direction={'row'}
        justifyContent={'center'}
        // alignItems={'center'}
        sx={{
          // height: "80vh",
          mx: 'auto',
          // paddingBottom: 5,
        }}
      >
        <Grid item>
          <Typography variant="h6" sx={{ mb: 2 }}>
            my skills here
          </Typography>
          <Skills />
        </Grid>
      </Grid>
    </div>
  );
}
