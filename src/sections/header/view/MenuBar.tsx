import Link from 'next/link';
import { Typography } from '@mui/material';
import { Menu } from '@/data/menu';

export default function MenuBar({ title }: Menu) {
  return (
    <Link href={`/#${title}`} style={{ textDecoration: 'none', color: 'white' }}>
      <Typography
        sx={{
          color: 'inherit',
          padding: 2,
          fontSize: '1.2em',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}
