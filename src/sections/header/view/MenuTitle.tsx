import { Typography } from '@mui/material';
import Link from 'next/link';

export default function MenuTitle() {
  return (
    <Link href="/" style={{ textDecoration: 'none', marginRight: '8px' }}>
      <Typography sx={{ color: 'white', fontWeight: 700, fontSize: 18 }}>
        조가람's Portpolio
      </Typography>
    </Link>
  );
}
