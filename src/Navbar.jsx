import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    let[searchVal,setSearchVal]=useState("");
    return (

        <nav>
            <h1>MOTTE</h1>
            <input type="search" value={searchVal} onChange={(e)=>{setSearchVal(e.target.value)}} />
            <Link to={`/search${searchVal}`}>
            <button>Search</button>
            </Link>
            
            <div>
                <a href="/">Home</a>
                <a href="/add">Add New Movie</a>
               
            </div>
        </nav>
    );
}
export default Navbar;