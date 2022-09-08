import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";
import useFetch from "./useFetch";

const Searchpage=()=>{

    let {searchVal}=useParams();

    let{data:movies}=useFetch("http://localhost:3000/moviesList")
    return(
        <>
        <h1>Search page ={searchVal}</h1>

        {
            movies && <Movieslist
            movies={movies.filter((movie)=>{return movie.movieName.toLowerCase().includes(searchVal.toLowerCase())})}
            title="Search Result" />

        }
        </>
    )
}
export default Searchpage;