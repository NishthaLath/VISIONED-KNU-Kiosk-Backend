// src/services/dialogflowService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const PROJECT_ID = process.env.REACT_APP_DIALOGFLOW_PROJECT_ID;

export const detectIntent = async (query, sessionId = 'user-session-123') => {
  const url = `https://dialogflow.googleapis.com/v2/projects/${PROJECT_ID}/agent/sessions/${sessionId}:detectIntent`;

  const requestBody = {
    queryInput: {
      text: {
        text: query,
        languageCode: 'ko-KR',
      },
    },
  };

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.queryResult.fulfillmentText;
  } catch (error) {
    console.error('Error in Dialogflow request:', error);
    return 'An error occurred while processing your request.';
  }
};
