import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Updatemovie from "./Updatemovie";
import useFetch from "./useFetch";

const Moviedetails=()=>{
   let {id}=useParams();

  let  [update,setUpdate]=useState(false);

   let history=useHistory();

   let {data:movie,pending,error} =useFetch(`http://localhost:3000/moviesList/${id}`);

   let handleDelete =(id)=>{



    fetch(`http://localhost:3000/moviesList/${id}`,{method:"DELETE"})
    .then(
        ()=>{history.push("/");}
    )

   }

    return(
        <div className="movie-details">

            {error && <h1>{error}</h1>}
            {pending && <div className="loader"></div>}
            { !update && movie && 
            <div>
               
                <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                <h1> MovieName: {movie.movieName}</h1>
                <h1> Hero:  {movie.hero}</h1>
                <h1> Genere:{movie.genere}</h1>
                <h1> Ratings:{movie.ratings}</h1>
                <button onClick={()=>{handleDelete(movie.id)}}>delete</button>

                
                    <button onClick={
                    ()=>{setUpdate(true);}
                    }>Update</button>
              
            </div>}

            {
                update &&  <Updatemovie previousMovie={movie}/>
            }


        
        </div>
    )
}
export default Moviedetails;