

import { useState } from "react";
import { useHistory } from "react-router-dom";
const Updatemovie = ({previousMovie}) => {
 

  const [movieName, setmovieName] = useState(previousMovie.movieName);

  const [hero, setHero] = useState(previousMovie.hero);

  const [director, setDirector] = useState(previousMovie.director);

  const [genere, setGenere] = useState(previousMovie.genere);

  const [ratings, setRatings] = useState(previousMovie.ratings);

  const [trailer, setTrailer] = useState(previousMovie.trailer);

  let history=useHistory();

  let handleSubmit = (e) => {
    e.preventDefault();

    let updatedmovie = { movieName, hero, director, genere, trailer };

    

   

   fetch(`http://localhost:3000/moviesList/${previousMovie.id}`, {
      method: "PUT",
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json" },
      body: JSON.stringify(updatedmovie),
    })
    .then(() => {  history.push("/");
    });}
   
  
  return (
    <div className="add-movie">
      <h1>Update Movie </h1>
      <hr />
      <form  onSubmit={handleSubmit}>
        <div>
          <label>Movie Name : </label>
          <input
            type="text"
            value={movieName}
            onChange={(e) => {
              setmovieName(e.target.value);
            }}
          />
          <label>Hero : </label>
          <input
            type="text"
            value={hero}
            onChange={(e) => {
              setHero(e.target.value);
            }}
          />
          <label>Director : </label>
          <input
            type="text"
            value={director}
            onChange={(e) => {
              setDirector(e.target.value);
            }}
          />
          <label>Genere : </label>
          <input
            type="text"
            value={genere}
            onChange={(e) => {
              setGenere(e.target.value);
            }}
          />
            <label>Ratings : </label>
          <input
            type="text"
            value={ratings}
            onChange={(e) => {
              setRatings(e.target.value);
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
        <input type="submit" value="Update Movie" />
      </form>
    </div>
  );
};
export default Updatemovie;