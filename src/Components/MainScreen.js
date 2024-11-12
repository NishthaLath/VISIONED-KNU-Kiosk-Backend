// src/components/MainScreen.js
import React, { useContext } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { AppContext } from '../context/AppContext';

const MainScreen = ({ onStart, onHelpRequest }) => {
  const { loading } = useContext(AppContext);

  return (
    <Container>
      <Typography variant="h5" align="center">도착지 약도 출력 서비스를 시작하겠습니다.</Typography>
      <Button variant="contained" color="success" onClick={onStart} disabled={loading}>
        시작하기
      </Button>
      <Button variant="contained" color="primary" onClick={onHelpRequest} disabled={loading}>
        안내원 도움 요청하기
      </Button>
    </Container>
  );
};

export default MainScreen;
