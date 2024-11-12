// src/utils/googleServices.js

// Access the API key from the environment variable
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const getSpeechRecognitionConfig = () => ({
  key: API_KEY,
  config: {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'ko-KR',
  },
});

// Example function to call Google Cloud Speech-to-Text API
export const transcribeAudio = async (audioContent) => {
  const url = `https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}`;
  const requestBody = {
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'ko-KR',
    },
    audio: {
      content: audioContent,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error transcribing audio:', error);
  }
};
