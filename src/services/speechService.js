// src/services/speechService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const transcribeAudio = async (text) => {
  const response = await axios.post(
    `https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}`,
    {
      config: { encoding: 'LINEAR16', languageCode: 'ko-KR' },
      audio: { content: text },
    }
  );
  return response.data.results[0].alternatives[0].transcript;
};
