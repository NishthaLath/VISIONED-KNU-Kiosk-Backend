// src/components/VoiceInput.js
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

const VoiceInput = ({ onTranscription }) => {
  const [input, setInput] = useState('');

  const startAudioCapture = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ko-KR';
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setInput(transcript);
      onTranscription(transcript);
    };

    recognition.start();
  };

  return (
    <div>
      <Button variant="outlined" startIcon={<MicIcon />} onClick={startAudioCapture}>
        음성 입력
      </Button>
      <TextField fullWidth value={input} placeholder="도착지 입력 중..." />
    </div>
  );
};

export default VoiceInput;
