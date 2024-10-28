'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Menu, MenuList } from '@/data/menu';
import MenuBar from '@/sections/header/view/MenuBar';
import SocialBar from '@/sections/header/view/SocialBar';
import { Social, SocialList } from '@/data/social';
import MenuTitle from '@/sections/header/view/MenuTitle';

export default function Header() {
  return (
    <Box sx={{}}>
      <AppBar
        position="fixed"
        sx={{
          display: 'block',
          backgroundColor: '#000000',
          padding: '0 16px',
        }}
      >
        <Toolbar sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <MenuTitle />
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            {MenuList.map((menu: Menu) => (
              <MenuBar key={menu.id} id={menu.id} title={menu.title} />
            ))}
          </Box>
          <Box sx={{ display: 'flex' }}>
            {SocialList.map((social: Social) => (
              <SocialBar
                tooltip={social.tooltip}
                url={social.url}
                icon={social.icon}
              />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
