// src/services/ttsService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const playTextToSpeech = async (text, speakingRate = 1.0) => {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;

  const requestBody = {
    input: { text },
    voice: { languageCode: 'ko-KR', ssmlGender: 'FEMALE' },
    audioConfig: { audioEncoding: 'MP3', speakingRate },
  };

  try {
    const response = await axios.post(url, requestBody);
    const audioContent = response.data.audioContent;
    const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
    audio.play();
  } catch (error) {
    console.error('Error in Text-to-Speech API:', error);
  }
};