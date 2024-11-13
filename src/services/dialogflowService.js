// src/services/dialogflowService.js
import axios from 'axios';

const PROJECT_ID = process.env.REACT_APP_DIALOGFLOW_PROJECT_ID;
const SESSION_ID = 'user-session-123';
const API_URL = `https://dialogflow.googleapis.com/v2/projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}:detectIntent`;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const detectIntent = async (query) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        queryInput: {
          text: {
            text: query,
            languageCode: 'ko-KR',
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.queryResult.fulfillmentText;
  } catch (error) {
    console.error('Error in Dialogflow API:', error);
    return 'An error occurred while processing your request.';
  }
};
