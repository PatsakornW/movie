import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MovieContext } from '../context/movieContext';
import { FaPlay } from 'react-icons/fa';
import { MdOutlineFavorite, MdOutlineBookmark } from 'react-icons/md';




function Detail() {
    const { detail, video, isLoading,addWatch,addFav } = useContext(MovieContext);

    console.log(video);
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
                    <div className='flex items-start  justify-center col-span-2 lg:col-span-1 '>
                        <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={detail.title} className=' rounded-box h-[30rem] w-3/4 md:w-1/2 lg:w-2/3 shadow-2xl ms-0 lg:ms-20' 
                         onError={(e) => {
                            e.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
                          }}/>
                    </div>
                    <div className='col-span-2 lg:col-span-1'>
                        <div className='flex-col p-5 sm:p-0 '>
                            <p className='my-2 text-4xl font-bold'>{detail.title || detail.name}</p>
                            <div className='my-2 flex gap-x-2'>
                                <p >{detail.release_date}</p>
                                {detail.runtime && (
                                    <p>{Math.floor(detail.runtime / 60)}h {detail.runtime % 60} min</p>
                                )}
                                {detail.number_of_seasons || detail.number_of_episodes ? (
                                    <p>Season {detail.number_of_seasons} Episodes {detail.number_of_episodes} </p>
                                ) : null}

                            </div>
                            {detail?.genres?.map((item) => (
                                <div className="badge badge-outline mx-1" key={item.id}>{item.name}</div>
                            ))}
                            <p className='my-2'>{detail.overview}</p>
                            <div className='flex gap-2'>
                                <button className="btn rounded-full btn-primary" onClick={() => window.my_modal_2.showModal()}><FaPlay className='text-white' /></button>
                                <button className="btn rounded-full btn-primary" onClick={() => addWatch(detail)}>
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