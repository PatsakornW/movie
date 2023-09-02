import React, { useContext} from "react";
import { MovieContext } from "../context/movieContext";
import "../App.css";
import { Link } from "react-router-dom";
import Treding from "../components/treding";
import Popular from "../components/popular";
import Rated from "../components/top_rated";

function Movie() {
  
    return (
        <div className="flex flex-col h-fit">
            <Treding/>
            <Popular/>
            <Rated/>
         
        </div>  
    );
}

export default Movie;
