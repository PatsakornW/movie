import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

function Cast({ item }) {
    return (
        <div
            className="carousel-item rounded-box overflow-hidden shadow-xl"

        >
            <div className="card w-36 h-52 lg:w-44 lg:h-full bg-base-100 ">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                    alt={item.title}
                    className="w-36 h-56 lg:w-44 lg:h-60"
                    onError={(e) => {
                        e.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
                    }}
                />
                <div className="card-body p-2">
                    <h2 className="card-title text-lg">
                        {item.name}
                    </h2>
                    <p>{item.character}</p>
                </div>
            </div>




        </div>
    )
}

export default Cast