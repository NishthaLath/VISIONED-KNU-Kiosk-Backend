// src/components/TextToSpeech.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { playTextToSpeech } from '../services/ttsService';

const TextToSpeech = ({ text }) => {
  const { ttsPlaying, setTtsPlaying } = useContext(AppContext);

  const handlePlayAudio = async () => {
    setTtsPlaying(true);

    try {
      await playTextToSpeech(text);
    } catch (error) {
      console.error('Error playing TTS audio:', error);
    } finally {
      setTtsPlaying(false);
    }
  };

  return (
    <div>
      <button onClick={handlePlayAudio} disabled={ttsPlaying}>
        Play Audio
      </button>
    </div>
  );
};

export default TextToSpeech;
