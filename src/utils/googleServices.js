// src/utils/googleServices.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// export const transcribe

export const getSpeechToText = async (audioFile) => {   
    const response = await axios.post(
        `https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}`,
        {
        config: {
            encoding: 'LINEAR16',
            sampleRateHertz: 16000,
            languageCode: 'ko-KR',
        },
        audio: {
            content: audioFile,
        },
        },
        {
        headers: {
            'Content-Type': 'application/json',
        },
        }
    );
    
    return response.data.results[0].alternatives[0].transcript;
    };

export const getDirections = async (origin, destination) => {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}`
    );
    
    return response.data.routes[0].legs[0].steps.map(step => step.html_instructions);
    };

export const getStaticMap = (origin, destination) => {
    return `https://maps.googleapis.com/maps/api/staticmap?size=600x300&maptype=roadmap&path=color:0x0000ff|weight:5|enc:${polyline}&key=${API_KEY}`;
    };

export const getNearbyPlaces = async (location, type) => {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=5000&type=${type}&key=${API_KEY}`
    );
    
    return response.data.results.map(result => result.name);
    };

export const getPlaceDetails = async (placeId) => {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`
    );
    
    return response.data.result;
    };


