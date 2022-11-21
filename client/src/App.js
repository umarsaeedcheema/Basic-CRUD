import "./App.css";

function App() {
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
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
