// src/components/VoiceInput.js
import React, { useState, useContext } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import { AppContext } from '../context/AppContext';
import { sendQueryToDialogflow } from '../utils/api';

const VoiceInput = () => {
  const { setTranscription, loading, setLoading } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleVoiceInput = async () => {
    setLoading(true);

    try {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'ko-KR';
      recognition.interimResults = true;

      recognition.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);

        const dialogflowResponse = await sendQueryToDialogflow(transcript, 'user-session-123');
        setTranscription(transcript);
        setResponse(dialogflowResponse.responseText);
      };

      recognition.onerror = (error) => {
        console.error('Speech recognition error:', error);
        setResponse('Speech recognition failed.');
      };

      recognition.start();
    } catch (error) {
      console.error('Error in voice input:', error);
      setResponse('An error occurred while capturing voice input.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Button
        variant="outlined"
        startIcon={<MicIcon />}
        onClick={handleVoiceInput}
        disabled={loading}
        style={{ fontSize: '1.2em', padding: '10px 20px', marginBottom: '15px' }}
      >
        음성 입력
      </Button>
      <TextField
        fullWidth
        value={input}
        placeholder="도착지 입력 중..."
        style={{ fontSize: '1.2em', marginBottom: '15px' }}
      />
      <Typography variant="h6" style={{ marginTop: '10px' }}>
        응답: {response}
      </Typography>
    </div>
  );
};

export default VoiceInput;
