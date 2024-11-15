const express = require('express');
const textToSpeech = require('@google-cloud/text-to-speech');
const speech = require('@google-cloud/speech');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

// Creates clients
const ttsClient = new textToSpeech.TextToSpeechClient({
  keyFilename: 'Senior_kiosk_key.json', 
});

const sttClient = new speech.SpeechClient({
  keyFilename: 'Senior_kiosk_key.json', 
});

app.use(cors());
app.use(bodyParser.json({ limit: '100mb' })); // Increase the limit to 100MB
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.post('/synthesize', async (req, res) => {
  const text = req.body.text;

  if (!text) {
    return res.status(400).send('Text is required');
  }

  // Construct the request
  const request = {
    input: { text: text },
    voice: { languageCode: 'ko-KR', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    // Performs the Text-to-Speech request
    const [response] = await ttsClient.synthesizeSpeech(request);

    // Send the audio content as a response
    res.set('Content-Type', 'audio/mp3');
    res.send(response.audioContent);
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).send('Error synthesizing speech');
  }
});

app.post('/recognize', async (req, res) => {
  const audioContent = req.body.audio;

  if (!audioContent) {
    return res.status(400).send('Audio content is required');
  }

  const audio = {
    content: audioContent,
  };

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 48000, // Update this to match the audio file's sample rate
    languageCode: 'ko-KR',
    audioChannelCount: 2, // Update this to match the audio file's channel count
  };

  const request = {
    audio: audio,
    config: config,
  };

  try {
    const [response] = await sttClient.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    res.send({ transcription });
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).send('Error recognizing speech');
  }
});

app.post('/get-routes', async (req, res) => {
  const { origin, destination } = req.body;
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  if (!origin || !destination) {
    return res.status(400).send('Origin and destination are required');
  }

  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(
    destination
  )}&alternatives=true&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const routes = response.data.routes.map((route) => {
      const legs = route.legs[0];
      return {
        summary: route.summary,
        distance: legs.distance.text,
        duration: legs.duration.text,
        steps: legs.steps.map((step) => step.html_instructions),
      };
    });
    res.send({ routes });
  } catch (error) {
    console.error('Error fetching routes:', error);
    res.status(500).send('Error fetching route information');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});