import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MovieContext } from '../context/movieContext';
import { FaPlay } from 'react-icons/fa';
import { MdOutlineFavorite, MdOutlineBookmark } from 'react-icons/md';




function Detail() {
    const { id } = useParams();
    const { addList, addFav } = useContext(MovieContext);


    const [detail, setDetail] = useState([])
    const [video, setVideo] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    // console.log(video);

    useEffect(() => {
        async function getDetail() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVhNTk3ZThhOGIzYjAxMDNmNTFiMjQ3ZGNlZGIwZSIsInN1YiI6IjYzZTBhNTJiY2QyMDQ2MDA4MWUyYjc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilB2m8xDnx3sNpkSMxUlOrWb9EINrAekXfwV-3Ksowg'
                    }
                })

                const data = await res.json();
                setDetail(data);
                setIsLoading(false);

            } catch (error) {
                console.log(error);
            }
        }

        async function getVideo() {
            try {
                const video = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
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
        getVideo();
        getDetail();


    }, []);

    const filterVideo = video?.results?.filter((item) => {
        return item.name === "Official Trailer";
    });





    return (
        <div className='mx-auto  mt-5 grid grid-cols-2 w-full lg:w-3/4 '>
            {isLoading ? (
                <div className='flex  justify-center col-span-2 h-96'>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <>
                    <div className='flex items-center justify-center col-span-2 lg:col-span-1 '>
                        <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={detail.title} className=' rounded-box h-[30rem] w-3/4 md:w-1/2 lg:w-2/3 shadow-2xl ms-0 lg:ms-20' />
                    </div>
                    <div className='col-span-2 lg:col-span-1'>
                        <div className='flex-col p-5 lg:p-20'>
                            <p className='my-2 text-4xl font-bold'>{detail.title}</p>
                            <div className='my-2 flex gap-x-2'>
                                <p >{detail.release_date}</p>
                                <p>{Math.floor(detail.runtime / 60)}h {detail.runtime % 60}min</p>

                            </div>
                            {detail?.genres?.map((item) => (
                                <div className="badge badge-outline mx-1" key={item.id}>{item.name}</div>
                            ))}
                            <p className='my-2'>{detail.overview}</p>
                            <div className='flex gap-2'>
                                <button className="btn rounded-full btn-primary" onClick={() => window.my_modal_2.showModal()}><FaPlay className='text-white' /></button>
                                <button className="btn rounded-full btn-primary" onClick={() => addList(detail)}>
                                    <MdOutlineBookmark className='text-white h-4 w-4' />
                                </button>
                                <button className="btn rounded-full btn-primary" onClick={() => addFav(detail)}><MdOutlineFavorite className='text-white h-4 w-4' /></button>

                            </div>

                            <dialog id="my_modal_2" className="modal p-0">
                                <form method="dialog" className="modal-box max-w-3xl p-0">
                                    {filterVideo?.map((items) => (
                                        <iframe
                                            className='w-full  h-[30rem] rounded-box '
                                            title={items.name}
                                            src={`https://www.youtube.com/embed/${items.key}`}
                                            allowFullScreen
                                        ></iframe>
                                    ))}
                                </form>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>



                    </div>
                </>



            )}
        </div>
    )





}

export default Detail