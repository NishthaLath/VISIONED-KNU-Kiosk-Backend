const express = require('express');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const cors = require('cors');

const app = express();
const port = 3001;

// Creates a client
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: 'Senior_kiosk_key.json', // Replace with the path to your service account key file
});

app.use(cors());
app.use(express.json());

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
    const [response] = await client.synthesizeSpeech(request);

    // Send the audio content as a response
    res.set('Content-Type', 'audio/mp3');
    res.send(response.audioContent);
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).send('Error synthesizing speech');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});