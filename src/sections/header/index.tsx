'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Menu, MenuList } from '@/data/menu';
import MenuBar from '@/sections/header/view/MenuBar';
import SocialBar from '@/sections/header/view/SocialBar';
import { Social, SocialList } from '@/data/social';

export default function Header() {
  return (
    <Box sx={{}}>
      <AppBar
        position='static'
        sx={{
          display: 'block',
          backgroundColor: '#000000',
          padding: '0 16px',
        }}>
        <Toolbar sx={{ display: 'flex' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {MenuList.map((menu: Menu) => (
              <MenuBar key={menu.title} title={menu.title} />
            ))}
          </Box>
          <Box sx={{ display: 'flex'}}>
            {SocialList.map((social: Social) => (
              <SocialBar tooltip={social.tooltip} url={social.url} icon={social.icon} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
