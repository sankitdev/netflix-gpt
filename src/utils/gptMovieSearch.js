import { GoogleGenerativeAI } from "@google/generative-ai";
import { options } from "./Constant";

import { setGptMovies } from "../store/movieSlice";
const gptMovieSearch = async (inputString, dispatch) => {
  const moviePrompt = `Act as a movie recommendation system where you have to recommend 5 best movies for the search query ${inputString}. Give me the name of the movies only in the format I specified in example. Example - movie1, movie2, ...,movie5.`;
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GPT_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = moviePrompt;
  const result = await model.generateContent(prompt);
  const movies = result.response
    .text()
    .split(",")
    .map((movies) => movies.trim());
  // console.log(movies);
  const fetchMovies = movies.map(async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data.results;
  });
  const results = await Promise.all(fetchMovies);
  // console.log(results);
  dispatch(setGptMovies(results));
};
export default gptMovieSearch;
