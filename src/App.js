import React from "react";
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchData() {
    const url = "https://swapi.dev/api/films/";
    setLoading(true);
    const data = await fetch(url);
    const jsonData = await data.json();
    const transformedData = jsonData.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovie(transformedData);
    setLoading(false);
    console.log(movie);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchData}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movie} />}
        {isLoading && <p>Please Wait</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
