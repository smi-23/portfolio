import Introduction from '../sections/introduction';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MySkills from '@/sections/mySkills';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: '#e0e0e0', // 바깥쪽 색상
        padding: '20px', // 안쪽 여백
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#ffffff', // 컨테이너 내부 배경색
          border: '1px solid #ccc', // 경계선 추가
          borderRadius: '8px', // 경계선 둥글게 처리
          padding: '16px', // 컨테이너 안쪽 여백
        }}
      >
        <Introduction />
        <MySkills />
      </Container>
    </Box>
  );
}
