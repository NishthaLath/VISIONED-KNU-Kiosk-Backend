// src/services/dialogflowService.js
import axios from 'axios';

export const detectIntent = async (query) => {
  const response = await axios.post(
    `https://dialogflow.googleapis.com/v2/projects/${process.env.REACT_APP_DIALOGFLOW_PROJECT_ID}/agent/sessions/YOUR_SESSION_ID:detectIntent`,
    {
      queryInput: { text: { text: query, languageCode: 'ko-KR' } },
    }
  );
  return response.data.queryResult.fulfillmentText;
};
