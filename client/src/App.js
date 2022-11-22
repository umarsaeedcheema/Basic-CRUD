import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data);
    });
  }, []);
  const addReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name: movieName,
      review: movieReview,
    }).then((e) => {
      console.log(e.data);
      alert("success");
    });
  };
  return (
    <div className="App">
      <h1
        className="font-extrabold text-4xl text-center text-gray-800
      my-4
      "
      >
        MOVIE REVIEW
      </h1>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="movie-name">Movie Name:</label>
        <input
          type="text"
          name="movie-name"
          id="movie-name"
          className="ml-2 border-solid border-2 border-sky-500 rounded-md width-auto"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />

        <label htmlFor="movie-review">Movie Review:</label>
        {/* <input
          type="text"
          name="movie-review"
          id="movie-review"
          className="ml-2 border-solid border-2 border-sky-500 rounded-md width-auto"
          cols="30"
          rows="10"
        /> */}
        <textarea
          name="movie-review"
          id="movie-review"
          cols="30"
          rows="10"
          className="ml-2 border-solid border-2 border-sky-500 rounded-md"
          onChange={(e) => {
            setMovieReview(e.target.value);
          }}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
          onClick={addReview}
        >
          Submit
        </button>
      </div>
      <div>
        {movieList.map((val) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <div
                className="flex flex-col justify-center items-center
            border-solid border-2 border-sky-500 rounded-md my-4 bg-gray-200 p-4"
              >
                <h1>Movie Name: {val.movie_name}</h1>
                <p>Review: {val.movie_review}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
