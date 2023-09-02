import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Searched() {
    const { searched } = useParams()
    const [movie, setMovie] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true);


    console.log(movie);



    useEffect(() => {

        async function getSearchMovie() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searched}&include_adult=false&language=en-US&page=${page}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })
                const data = await res.json()
                setMovie(data.results)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getSearchMovie();
    }, [searched, page])

    const filterMovie = movie.sort((h, r) =>
        r.popularity - h.popularity)


    return (
        <div >
            {isLoading ? (
                <div className='flex  justify-center col-span-2 h-96'>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <>
                {
                    filterMovie.length > 0 ? (
                        <div className="flex-col mt-10 items-center flex ">
                            <div className="flex mx-auto flex-wrap gap-4 justify-center w-full lg:w-3/4">
                                {filterMovie?.map((item) => (
                                    <Link
                                        to={`/detail/${item.id}`}
                                        className=" rounded-box overflow-hidden hover:shadow-xl"
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
                            <div className="join my-10">
                                <button className="join-item btn" onClick={() => setPage(Math.max(page - 1, 1))}>«</button>
                                <button className="join-item btn">{page}</button>
                                <button className="join-item btn" onClick={() => setPage(page + 1)}>»</button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex h-96 justify-center items-center">
                            <p>Not found</p>
                        </div>
                    )
                }
                </>


            )}


        </div>
    )
}

export default Searched