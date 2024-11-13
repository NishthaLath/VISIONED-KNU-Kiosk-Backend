// src/services/speechService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const transcribeAudio = async (text) => {
  const url = `https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}`;

  const requestBody = {
    config: {
      encoding: 'LINEAR16',
      languageCode: 'ko-KR',
    },
    audio: {
      content: text,
    },
  };

  try {
    const response = await axios.post(url, requestBody);
    return response.data.results[0].alternatives[0].transcript;
  } catch (error) {
    console.error('Error in Speech-to-Text API:', error);
    return 'Unable to transcribe audio.';
  }
};
