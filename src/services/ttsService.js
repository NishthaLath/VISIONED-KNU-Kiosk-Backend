// src/services/ttsService.js
import axios from 'axios';

export const playTextToSpeech = async (text) => {
  const response = await axios.post(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`,
    {
      input: { text },
      voice: { languageCode: 'ko-KR', ssmlGender: 'FEMALE' },
      audioConfig: { audioEncoding: 'MP3' },
    }
  );
  const audioContent = response.data.audioContent;
  const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
  audio.play();
};
