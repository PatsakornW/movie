import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../context/movieContext';

function Card({item}) {
  const {setId} = useContext(MovieContext);


  

  return (
    <Link to={`/detail/${item.id}`}
      className="carousel-item rounded-box overflow-hidden"
      onClick={() => setId(item.id)}
    >
      {/* <img
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt={item.title}
        className="w-36 h-52 lg:w-44 lg:h-60 "
      /> */}
      <img
  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
  alt={item.title}
  className="w-36 h-52 lg:w-44 lg:h-60"
  onError={(e) => {
    e.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }}
/>


    </Link>
  )
}

export default Card