import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMovie2Line,RiCompassDiscoverLine } from 'react-icons/ri';
import { MdOutlineFavoriteBorder,MdOutlineBookmarkBorder } from 'react-icons/md';





function Sidebar() {
    const [activeTab, setactiveTab] = useState("Discover")
    return (
        <ul className="menu w-auto bg-base-100 h-full">

            <div className='flex text-center font-bold text-4xl mt-2 justify-center items-center'>
                <p className='hidden lg:block'>M</p>
                <p> <RiMovie2Line /></p>
                <p className='hidden lg:block'>VIE</p>
               

              
            </div>
            <div className="divider"></div>
            <li>
                <Link to={'/'} className={activeTab === "Discover" ? "font-medium" : "font-normal"} onClick={() => setactiveTab("Discover")}>
                    <RiCompassDiscoverLine className='h-5 w-5'/>
                    <p className=' hidden lg:block '>Discover</p>
                </Link>
            </li>
            <li>
                <Link to={'/favorites'} className={activeTab === "Favorites" ? "font-medium" : "font-normal"} onClick={() => setactiveTab("Favorites")}>
                <MdOutlineFavoriteBorder className='h-5 w-5'/>
                    <p className=' hidden lg:block '>Favorites</p>
                </Link>
            </li>
            <li>
                <Link to={'/watchlist'} className={activeTab === "Watchlist" ? "font-medium" : "font-normal"} onClick={() => setactiveTab("Watchlist")}>
                <MdOutlineBookmarkBorder className='h-5 w-5'/>
                    <p className=' hidden lg:block '>Watchlist</p>
                </Link>
            </li>
            <li>
                <Link to={'/test'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <p className=' hidden lg:block '>Todo</p>
                </Link>
            </li>
        </ul>
    )
}

export default Sidebar