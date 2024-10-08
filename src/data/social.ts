import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export interface Social {
  tooltip: string;
  icon: ComponentType<SvgIconProps>;
  url: string;
}

export const SocialList: Social[] = [
  {
    tooltip: 'Github',
    icon: GitHubIcon,
    url: 'https://github.com/smi-23',
  },
  {
    tooltip: 'Blog',
    icon: HomeRoundedIcon,
    url: 'https://velog.io/@smi1991',
  },
  {
    tooltip: 'Email',
    icon: EmailIcon,
    url: 'garamdev23@gmail.com',
  },
];
