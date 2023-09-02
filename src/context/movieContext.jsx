
import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

function MovieContextProvider({ children }) {
    const [cast, setCast] = useState([])
    const [rated, setRated] = useState([])
    const [popular, setPopular] = useState([])
    const [page, setpage] = useState(1)
    const [watch, setWatch] = useState([])
    const [favorites, setFavorites] = useState([])
    const [treding, setTreding] = useState([])
    const [video, setVideo] = useState([])
    const [id, setId] = useState(null)
    const [type, setType] = useState("movie")
    const [detail, setDetail] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(cast);


    useEffect(() => {
        async function getPopular() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/${type}/popular?language=en-US&page=${page}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })
                const data = await res.json()
                setPopular(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }

        async function getTreding() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=en-US`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })

                const data = await res.json()
                setTreding(data)

            } catch (error) {
                console.log(error);
            }
        }

        async function getVideo() {
            try {
                const video = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })

                const data = await video.json();
                setVideo(data);
            } catch (error) {
                console.log(error);
            }
        }

        async function getDetail() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                });

                const data = await res.json();
                setDetail(data);
                setIsLoading(false);

            } catch (error) {
                console.log(error);
            }
        }


        async function getRated() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=${page}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })
                const data = await res.json()
                setRated(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }

        async function getCast() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })
                const data = await res.json()
                setCast(data)
                setIsLoading(false)

            } catch (error) {
                console.log(error);
            }
        }

        getCast()
        getRated()
        getDetail()
        getVideo()
        getTreding()
        getPopular()
    }, [page, id, type])




    function addWatch(detail) {
        if (!watch.includes(detail)) {
            setWatch([...watch, detail]);
        } else {
            // console.log("It's Added");
        }
    }

    function addFav(detail) {
        if (!favorites.includes(detail)) {
            setFavorites([...favorites, detail]);
        } else {
            // console.log("It's Added");
        }
    }


    return <MovieContext.Provider value={{ treding, setId, video, type, setType, detail, video, isLoading, popular, page, setpage, addWatch, addFav, watch, favorites, rated,cast }}>{children}</MovieContext.Provider>


}

export default MovieContextProvider