import { TypeAnimation } from 'react-type-animation';
import { Typography, Stack } from '@mui/material';

export default function AboutMe() {
  const commonFontSize = '2em';

  return (
    <Stack sx={{ width: 650 }}>
      <Typography component='span' sx={{ fontSize: commonFontSize }}>
        안녕하세요!
      </Typography>
      <Stack direction='row'>
        <TypeAnimation
          sequence={['끈기있게 도전하는', 1500, '새로움을 추구하는', 1500]}
          wrapper={'span'}
          preRenderFirstString={true}
          speed={30}
          repeat={Infinity}
          style={{
            fontWeight: 'bold',
            fontSize: commonFontSize,
            width:"7.5em"
          }}
        />
        <span style={{ fontSize: commonFontSize, marginLeft: '8px' }}> {/* 여백 추가 */}
          개발자가 되기 위해 노력하는
        </span>
      </Stack>
      <Typography component='span' sx={{ fontSize: commonFontSize }}>
        조가람입니다.
      </Typography>
    </Stack>
  );
}
