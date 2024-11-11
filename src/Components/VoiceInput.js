// src/components/VoiceInput.js
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import { transcribeAudio } from '../utils/googleServices';

const VoiceInput = ({ onTranscription }) => {
  const [input, setInput] = useState('');

  // Function to handle audio recording and transcription
  const startVoiceRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ko-KR';
    recognition.interimResults = true;

    recognition.onresult = async (event) => {
      // Get the transcription text
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      setInput(transcript);

      // Call the transcribeAudio function to process the text
      const response = await transcribeAudio(transcript);
      if (response && response[0] && response[0].alternatives) {
        const finalText = response[0].alternatives[0].transcript;
        setInput(finalText);
        onTranscription(finalText);
      }
    };

    recognition.start();
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<MicIcon />}
        onClick={startVoiceRecognition}
      >
        음성 입력
      </Button>
      <TextField
        fullWidth
        value={input}
        placeholder="도착지 입력 중..."
        InputProps={{ readOnly: true }}
      />
    </div>
  );
};

export default VoiceInput;
