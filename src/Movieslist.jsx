import { Link} from "react-router-dom";
const Movieslist = ( {movies , title } ) => {
    return (
        <div className="movies-list">
            <h1> {title} </h1>
            {
            movies.map((movie)=>
                {
                    return(
                    <Link to={`/moviedetails${movie.id}`}>
                    <div key={movie.id} className="movie" >
                      <h1> Movie Name : {movie.movieName} </h1>
                      <h2> Hero : {movie.hero} </h2>
                      <h2> Genere : {movie.genere} </h2>
                      <h2>Ratings:{movie.ratings}</h2>
                      <h2> Director: {movie.director}</h2>
                  
                      <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </Link>
                    )
                })
            }
        </div>
    );
}
export default Movieslist;