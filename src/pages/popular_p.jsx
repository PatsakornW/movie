import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../context/movieContext';
import { Link } from 'react-router-dom';
import Card from '../components/card';

function Popular_p() {
    const { isLoading, page, setpage, popular, type, setType,setId } = useContext(MovieContext);
    

    return (
        <div>
            {isLoading ? (
                <div className='flex  justify-center col-span-2 h-96'>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <>
                    <div className='flex gap-4 pb-5  flex-col items-center justify-center  '>
                        <div className='w-[75%] flex justify-between items-center'>
                            <div className="tabs tabs-boxed bg-transparent">
                                <a className={type === "movie" ? "tab tab-active" : "tab"} onClick={() => setType("movie")}>Movie</a>
                                <a className={type === "tv" ? "tab tab-active" : "tab"} onClick={() => setType("tv")}>Tv</a>
                            </div>
                            <div className="join">
                                <button className="join-item btn btn-sm" onClick={() => setpage(Math.max(page - 1, 1))}>«</button>
                                <button className="join-item btn btn-sm">{page}</button>
                                <button className="join-item btn btn-sm" onClick={() => setpage(page + 1)}>»</button>
                            </div>
                        </div>
                        <div className='flex flex-wrap w-[75%] gap-4 justify-center'>
                            {popular?.results?.map((item) => (
                                <Card key={item.id} item={item}/>
                            ))}
                        </div>
                    </div>
                </>

            )}
        </div>


    )
}



export default Popular_p