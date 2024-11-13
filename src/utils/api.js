// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/dialogflow';

export const sendQueryToDialogflow = async (query, sessionId) => {
  try {
    const response = await axios.post(API_URL, { query, sessionId });
    return response.data;
  } catch (error) {
    console.error('Error sending query to Dialogflow:', error);
    return { responseText: 'Sorry, I couldn’t understand that.' };
  }
};
