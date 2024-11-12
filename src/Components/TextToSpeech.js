import React from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY';

const TextToSpeech = ({ text }) => {
  const playAudio = async () => {
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

  return (
    <div>
      <button onClick={playAudio}>Play Audio</button>
    </div>
  );
};

export default TextToSpeech;
