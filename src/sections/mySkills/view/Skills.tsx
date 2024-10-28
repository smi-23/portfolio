import React from 'react';
import { SkillList } from '@/data/skill';
import { Grid } from '@mui/system';
import { Tooltip } from '@mui/material';

export default function Skills() {
  return (
    <Grid container spacing={2}>
      {SkillList.map((skill) => (
        <Grid item key={skill.name}>
          <Tooltip title={skill.name}>
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: '100px', height: '100px' }}
            />
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
}
