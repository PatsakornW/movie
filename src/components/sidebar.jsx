import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMovie2Line } from 'react-icons/ri';
import { MdOutlineFavoriteBorder, MdOutlineBookmarkBorder, MdOutlineMovie, MdOutlineWhatshot } from 'react-icons/md';
import { MovieContext } from '../context/movieContext';
import { PiTelevision, PiStarBold } from 'react-icons/pi';





function Sidebar() {
    const [activeTab, setactiveTab] = useState("Movie")
    const { setType } = useContext(MovieContext);

    return (
        <ul className="menu w-auto lg:w-[12rem] bg-base-100 border-e-2 gap-4  h-full">

            <div className='flex text-center font-bold text-4xl mt-2 justify-center items-center'>
                <p className='hidden lg:block'>M</p>
                <p> <RiMovie2Line /></p>
                <p className='hidden lg:block'>VIE</p>



            </div>
            <div className="divider"></div>
            <li>
                <Link to={'/'} className={activeTab === "Movie" ? "font-medium" : "font-normal"} onClick={() => {
                    setactiveTab("Movie")
                    setType("movie")

                }}>
                    <MdOutlineMovie className='h-5 w-5' />
                    <p className=' hidden lg:block '>Movie</p>
                </Link>
            </li>
            <li>
                <Link to={'/tv'} className={activeTab === "Tv" ? "font-medium" : "font-normal"} onClick={() => {
                    setactiveTab("Tv")
                    setType("tv")
                }}>
                    <PiTelevision className='h-5 w-5' />
                    <p className=' hidden lg:block '>TV</p>
                </Link>
            </li>
            <li>
                <Link to={'/popular'} className={activeTab === "Popular" ? "font-medium " : "font-normal"} onClick={() => {
                    setactiveTab("Popular")
                    setType("movie")
                }}>
                    <MdOutlineWhatshot className='h-5 w-5' />
                    <p className=' hidden lg:block '>Popular</p>
                </Link>
            </li>
            <li>
                <Link to={'/rated'} className={activeTab === "Top Rated" ? "font-medium " : "font-normal"} onClick={() => {
                    setactiveTab("Top Rated")
                    setType("movie")
                }}>
                    <PiStarBold className='h-5 w-5' />
                    <p className=' hidden lg:block '>Top Rated</p>
                </Link>
            </li>
            <li>
                <Link to={'/favorites'} className={activeTab === "Favorites" ? "font-medium" : "font-normal"} onClick={() => setactiveTab("Favorites")}>
                    <MdOutlineFavoriteBorder className='h-5 w-5' />
                    <p className=' hidden lg:block '>Favorites</p>
                </Link>
            </li>
            <li>
                <Link to={'/watchlist'} className={activeTab === "Watchlist" ? "font-medium" : "font-normal"} onClick={() => setactiveTab("Watchlist")}>
                    <MdOutlineBookmarkBorder className='h-5 w-5' />
                    <p className=' hidden lg:block '>Watchlist</p>
                </Link>
            </li>
        </ul>
    )
}

export default Sidebar