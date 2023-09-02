import React from 'react'

function Card({ movie }) {
  const { title, backdrop_path, poster_path, overview, release_date } = movie

  return (
    <div className=' rounded-box  overflow-hidden'>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}  />
    </div>
  )
}

export default Card