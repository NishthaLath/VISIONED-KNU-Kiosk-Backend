// src/components/MainScreen.js
import React, { useContext } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { AppContext } from '../context/AppContext';

const MainScreen = ({ onStart, onHelpRequest }) => {
  const { loading } = useContext(AppContext);

  return (
    <Container style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" align="center" style={{ marginBottom: '20px' }}>
        도착지 약도 출력 서비스를 시작하겠습니다.
      </Typography>
      <Button
        variant="contained"
        color="success"
        onClick={onStart}
        disabled={loading}
        style={{ fontSize: '1.2em', padding: '10px 20px', marginBottom: '15px' }}
      >
        시작하기
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onHelpRequest}
        disabled={loading}
        style={{ fontSize: '1.2em', padding: '10px 20px' }}
      >
        안내원 도움 요청하기
      </Button>
    </Container>
  );
};

export default MainScreen;
