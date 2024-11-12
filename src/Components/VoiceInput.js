// src/components/VoiceInput.js
import React, { useState, useContext } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import { AppContext } from '../context/AppContext';
import { transcribeAudio } from '../services/speechService';

const VoiceInput = () => {
  const { setTranscription, loading, setLoading } = useContext(AppContext);
  const [input, setInput] = useState('');

  const handleVoiceInput = async () => {
    setLoading(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ko-KR';
    recognition.interimResults = true;

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      const finalTranscription = await transcribeAudio(transcript);
      setTranscription(finalTranscription);
      setLoading(false);
    };

    recognition.onerror = (error) => {
      console.error('Speech recognition error:', error);
      setLoading(false);
    };

    recognition.start();
  };

  return (
    <div>
      <Button variant="outlined" startIcon={<MicIcon />} onClick={handleVoiceInput} disabled={loading}>
        음성 입력
      </Button>
      <TextField fullWidth value={input} placeholder="도착지 입력 중..." />
    </div>
  );
};

export default VoiceInput;
