import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [movieList, setMovieList] = useState([]);

  const addReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      name: movieName,
      review: movieReview,
    });
    setMovieList([
      ...movieList,
      {
        name: movieName,
        review: movieReview,
      },
    ]);
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data);
      console.log(response.data);
    });
  }, []);

  const deleteReview = (id) => {
    console.log(id);
    Axios.delete("http://localhost:3001/api/delete", {
      data: {
        id: id,
      },
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
            <div
              key={val.id}
              className="flex flex-col justify-center items-center"
            >
              <div
                className="flex flex-col justify-center items-center
            border-solid border-2 border-sky-500 rounded-md my-4 bg-gray-200 p-4"
              >
                <h1>Movie Name: {val.movie_name}</h1>
                <p>Review: {val.movie_review}</p>
                <div className="flex flex-col">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 w-40 self-center "
                    onClick={() => {
                      deleteReview(val.idnew_table);
                    }}
                  >
                    Delete
                  </button>
                  <label htmlFor="update-review">Update Review:</label>
                  <textarea
                    name="update-review"
                    id="update-review"
                    cols="30"
                    rows="4"
                    className="ml-2 border-solid border-2 border-sky-500 rounded-md"
                  ></textarea>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 w-40 self-center ">
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
