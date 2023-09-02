import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../context/movieContext';
import { Link } from "react-router-dom";

function Watchlist() {
    const { list, setlist } = useContext(MovieContext);

    
    return (
        <div>
           {list.length  > 0 ? (
            <div className="flex-col mt-10">
            <p className=" ms-10 lg:ms-36 text-xl font-bold">Watchlist</p>
            <div className="flex flex-wrap  justify-center">
                <div className="carousel   carousel-center w-10/12 p-4 space-x-4 rounded-box">
                    {list?.map((item) => (
                        <Link to={`/detail/${item.id}`}
                         
                            className="carousel-item rounded-box overflow-hidden"
                            key={item.id}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt={item.title}
                                className="w-36 h-52 lg:w-44 lg:h-60 "
                            />

                        </Link>
                    ))}
                </div>
            </div>
        </div>
        ):(
            <div className="flex h-96 justify-center items-center">
                <p>No Watchlist</p>
            </div>
        )} 
        </div>
        
        
    )
}

export default Watchlist