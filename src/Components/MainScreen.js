// src/components/MainScreen.js
import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const MainScreen = ({ onStart, onHelpRequest }) => (
  <Container>
    <Typography variant="h5" align="center">도착지 약도 출력 서비스를 시작하겠습니다.</Typography>
    <Button variant="contained" color="success" onClick={onStart}>시작하기</Button>
    <Button variant="contained" color="primary" onClick={onHelpRequest}>안내원 도움 요청하기</Button>
  </Container>
);

export default MainScreen;
