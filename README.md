---

# 🚀 VISIONED-KNU Kiosk Backend

This repository contains the backend code for the **VISIONED-KNU Kiosk**, a user-friendly and accessible navigation system designed for seamless interaction using voice recognition, text-to-speech feedback, and route calculation using Google Cloud APIs.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Docker Setup](#docker-setup)
- [Contributing](#contributing)
- [License](#license)

## 📖 Introduction

The **VISIONED-KNU Kiosk Backend** provides the core server-side logic for handling voice-based interactions, converting speech input to text, generating audio feedback, and calculating optimal routes using Google Cloud APIs. This project is focused on enhancing accessibility, particularly for senior citizens and individuals with disabilities, by simplifying the navigation process.

## ✨ Key Features

- **Speech-to-Text (STT)**: Converts user speech to text using Google Cloud Speech-to-Text API.
- **Text-to-Speech (TTS)**: Provides audio feedback using Google Cloud Text-to-Speech API.
- **Route Calculation**: Fetches optimal route information using Google Maps Directions API.
- **Robust Error Handling**: Comprehensive error messages and fallback mechanisms for enhanced user experience.

## 🛠 Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Fast and minimalist web framework for handling API requests.
- **Google Cloud APIs**:
  - **Text-to-Speech API**: Converts text responses to audio.
  - **Speech-to-Text API**: Processes voice input from the user.
  - **Maps API**: Provides route calculations and transit details.
- **Axios**: HTTP client for making API requests.
- **Docker**: Containerization for simplified deployment and scaling.

## 📂 Project Structure

```
senior-navigation-kiosk/
├── public/
│   ├── index.html
│   ├── deagu-logo.png
│   ├── bus.png
│   ├── train.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── Main.jsx
│   │   ├── RouteOption.jsx
│   │   ├── Sub2.jsx
│   │   ├── Choose.jsx
│   │   ├── Frame7.jsx
│   │   ├── TypewriterText.jsx
│   │   └── ...
│   ├── services/
│   │   └── ttsService.js
│   ├── share/
│   │   ├── CallButton.jsx
│   │   ├── BackButton.jsx
│   │   ├── allshared.css
│   │   └── ...
│   ├── styles/
│   │   ├── Main.css
│   │   ├── RouteOption.css
│   │   ├── Sub2.css
│   │   ├── choose.css
│   │   └── ...
│   ├── App.jsx
│   ├── index.jsx
│   ├── vars.css
│   └── ...
├── .env
├── package.json
├── README.md
├── server.js
└── ...
```

## 🌐 Environment Variables

Create a `.env` file in the root directory with the following content:

```bash
PORT=3001
REACT_APP_GOOGLE_API_KEY=your_google_api_key
REACT_APP_SPEECH_API_KEY=your_speech_api_key
REACT_APP_TTS_API_KEY=your_tts_api_key
```

Replace `your_google_api_key`, `your_speech_api_key`, and `your_tts_api_key` with your actual API keys.

## 📥 Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/VISIONED-KNU/Backend.git
cd Backend
npm install --legacy-peer-deps```

## 🚀 Usage

Start the server in development mode:

```bash
npm start
```

The backend server will run on [http://localhost:3001](http://localhost:3001).

## 🔄 API Endpoints

### 1. **POST /synthesize**

- **Description**: Converts the provided text to speech audio.
- **Request**:
  ```json
  {
    "text": "안녕하세요! 환영합니다."
  }
  ```
- **Response**: Returns the audio content in MP3 format.

### 2. **POST /recognize**

- **Description**: Converts audio input (base64-encoded) to text.
- **Request**:
  ```json
  {
    "audio": "base64_audio_string"
  }
  ```
- **Response**:
  ```json
  {
    "transcription": "User speech transcription here."
  }
  ```

### 3. **POST /get-routes**

- **Description**: Fetches route information between origin and destination using Google Maps Directions API.
- **Request**:
  ```json
  {
    "origin": "35.8840,128.6132",
    "destination": "Daegu Station"
  }
  ```
- **Response**:
  ```json
  {
    "routes": [
      {
        "summary": "Fastest Route",
        "distance": "5.2 km",
        "duration": "12 mins",
        "steps": ["Head north", "Turn left", "Arrive at destination"]
      }
    ]
  }
  ```

## 🐳 Docker Setup

To build and run the backend using Docker:

```bash
docker build -t visioned-backend .
docker run -p 3001:3001 visioned-backend
```

This will start the backend server in a Docker container, accessible at [http://localhost:3001](http://localhost:3001).

## 🛡 Error Handling

- **400 Bad Request**: Missing or invalid input data (e.g., empty text or audio content).
- **500 Internal Server Error**: Issues with external API calls or server logic.
- **Graceful Fallback**: User-friendly error messages are provided in case of API failures.

## 🤝 Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature/your-feature-name`).
5. Create a pull request and describe your changes.

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## 💬 Contact

For any questions or support, please contact:

- **Project Lead**: [Your Name](mailto:your-email@example.com)
- **GitHub**: [VISIONED-KNU](https://github.com/VISIONED-KNU)

---
