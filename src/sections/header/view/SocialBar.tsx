import { IconButton, Snackbar, Tooltip } from '@mui/material';
import { Social } from '@/data/social';
import { useState } from 'react';

export default function SocialBar({ tooltip, icon: CustomIcon, url }: Social) {
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    try {
      if (url.includes('gmail.com')) {
        await navigator.clipboard.writeText(url);
        setOpen(true);
      } else {
        window.open(url, '_blank');
      }
    } catch (err) {
      console.error('클립보드 복사에 실패했습니다: ', err);
    }
  };

  return (
    <>
      <Tooltip title={tooltip} arrow>
        <IconButton
          onClick={handleClick}
          sx={{ color: 'white' }}
        >
          <CustomIcon />
        </IconButton>
      </Tooltip>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        message={`${url} 이 복사되었습니다.`}
        autoHideDuration={2000} // 2초 후 자동으로 사라짐
      />
    </>
  );
}
