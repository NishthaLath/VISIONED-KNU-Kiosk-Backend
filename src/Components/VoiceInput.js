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

  // Function to handle voice input using browser's Speech Recognition API
  const handleVoiceInput = async () => {
    setLoading(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ko-KR';
    recognition.interimResults = true;

    recognition.onresult = async (event) => {
      // Get the transcript from the voice input
      const transcript = event.results[0][0].transcript;
      setInput(transcript);

      try {
        // Send the transcribed text to the backend for Dialogflow processing
        const sessionId = 'user-session-123'; // Use a unique session ID for each user session
        const dialogflowResponse = await sendQueryToDialogflow(transcript, sessionId);

        // Update the transcription and response state
        setTranscription(transcript);
        setResponse(dialogflowResponse.responseText);
      } catch (error) {
        console.error('Error in Dialogflow response:', error);
        setResponse('An error occurred while processing your request.');
      } finally {
        setLoading(false);
      }
    };

    recognition.onerror = (error) => {
      console.error('Speech recognition error:', error);
      setLoading(false);
    };

    recognition.start();
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<MicIcon />}
        onClick={handleVoiceInput}
        disabled={loading}
      >
        음성 입력
      </Button>
      <TextField
        fullWidth
        value={input}
        placeholder="도착지 입력 중..."
      />
      <Typography variant="h6" style={{ marginTop: '10px' }}>
        응답: {response}
      </Typography>
    </div>
  );
};

export default VoiceInput;
