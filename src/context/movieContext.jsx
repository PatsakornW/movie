
import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

function MovieContextProvider({ children }) {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState('');
    const [popular, setPopular] = useState([])
    const [page, setpage] = useState(1)
    const [list, setlist] = useState([])
    const [favorites, setFavorites] = useState([])

    console.log(list);



    useEffect(() => {
        async function getMovie() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })
                if (res.status === 200) {
                    const data = await res.json()
                    setMovie(data)
                } else {
                    setError(res)
                }
            } catch (error) {
                setError(error);
            }
        }

        async function getPopular() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })
                if (res.status === 200) {
                    const data = await res.json()
                    setPopular(data)
                } else {
                    setError(res)
                }
            } catch (error) {
                setError(error);
            }
        }
        getPopular()
        getMovie()
    }, [page])

    function addList(detail) {
        if (!list.includes(detail)) {
            setlist([...list, detail]);
          } else {
            console.log("It's Added");
          }
    }

    function addFav(detail) {
        if (!favorites.includes(detail)) {
            setFavorites([...favorites, detail]);
          } else {
            console.log("It's Added");
          }
    }


    return <MovieContext.Provider value={{ movie, popular, page, setpage,setlist,list,addList,favorites,addFav}}>{children}</MovieContext.Provider>


}

export default MovieContextProvider