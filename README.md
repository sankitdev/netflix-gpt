# Netflix GPT

Netflix GPT is a single-page web application that allows users to explore movies from the TMDB API, while offering AI-powered content generation through GPT. The app leverages React for the frontend, Redux for state management, and Firebase for authentication.

## Features

- **User Authentication**: Sign in and sign up using Firebase.
- **Movie Catalog**: Browse movies fetched from the TMDB API.
- **AI-Powered GPT**: Generate content or get recommendations powered by GPT.
- **Custom Reusable Components**: Efficient UI/UX with reusable React components.
- **State Management**: Centralized state handling using Redux.
- **Responsive Design**: Fully responsive design for a seamless experience on any device.

## Technologies Used

- **React**: Frontend framework.
- **Redux**: State management.
- **Firebase**: Authentication and deployment.
- **TMDB API**: Movie data fetching.
- **Gemini API**: GPT-based content generation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/netflix-gpt.git
   cd netflix-gpt
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   Create a `.env` file in the root directory and add your Firebase config and API keys for TMDB and Gemini.

   ```bash
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Access the app at `http://localhost:3000`.

## Deployment

This app is deployed on Firebase Hosting. To deploy your own version, follow these steps:

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:

   ```bash
   firebase login
   ```

3. Initialize Firebase in the project:

   ```bash
   firebase init
   ```

4. Deploy to Firebase Hosting:

   ```bash
   firebase deploy
   ```

## Future Improvements

- Enhance GPT integration for more personalized recommendations.
- Improve UI for a more immersive experience.
- Add additional filters and sorting options for movie browsing.
- Integrate a watchlist feature for users to save favorite movies.

## Contributing

Feel free to submit issues or pull requests. Any contributions are welcome!

## License

This project is licensed under the MIT License.

---

**This project is developed while learning from Namaste React by Akshay Saini. Check out his [course](https://namastedev.com/learn/namaste-react)**
