import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Addmovie = () => {
  const [movieName, setmovieName] = useState("");

  const [hero, setHero] = useState("");

  const [director, setDirector] = useState("");

  const [genere, setGenere] = useState("");

  const [trailer, setTrailer] = useState("");

  let {data:movies} =useFetch("http://localhost:3000/moviesList");

  let history = useHistory();

  let handleSubmit = (e) => {
    e.preventDefault();

    let movie = { movieName, hero, director, genere, trailer };

    //check current movie is present or not

    var duplicate = movies.some((m)=>{return m.movieName ===movieName});
    if(duplicate===false)

   { fetch("http://localhost:3000/moviesList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    })
    .then(() => {  history.push("/");
    });}
    else{
      alert("already movie exists");
    }
  }
  

  return (
    <div className="add-movie">
      <h1>add new movie</h1>

      <hr />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Movie Name:</label>
          <input
            type="text"
            value={movieName}
            name=""
            id=""
            onChange={(e) => {
              setmovieName(e.target.value);
            }}
          />

          <label htmlFor="">Hero:</label>
          <input
            type="text"
            value={hero}
            name=""
            id=""
            onChange={(e) => {
              setHero(e.target.value);
            }}
          />

          <label htmlFor="">Director:</label>
          <input
            type="text"
            value={director}
            name=""
            id=""
            onChange={(e) => {
              setDirector(e.target.value);
            }}
          />

          <label htmlFor="">Genere:</label>
          <input
            type="text"
            value={genere}
            name=""
            id=""
            onChange={(e) => {
              setGenere(e.target.value);
            }}
          />

          <label htmlFor="">Trailer:</label>
          <input
            type="text"
            value={trailer}
            onChange={(e) => {
              setTrailer(e.target.value);
            }}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};
export default Addmovie;
