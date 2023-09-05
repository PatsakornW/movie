
import React, { useContext } from 'react'
import { MovieContext } from "../context/movieContext";
import { Link } from 'react-router-dom';
import Card from './card';

function Rated() {
    const { rated } = useContext(MovieContext);

  return (
    <div className='flex justify-center  mt-10'>
            <div className='flex-col w-[75%]'>
                <div className='flex justify-between'>
                    <p className='font-medium text-lg'>Top Rated</p>
                    <Link to={'/rated'} className=' text-slate-500 hover:text-slate-600 cursor-pointer'>view all</Link>

                </div>
                <div className="carousel   carousel-center w-full  py-4 space-x-4 rounded-box">
                    {rated?.results?.slice(0, 9).map((item) => (
                         <Card key={item.id} item={item}/>
                    ))}
                </div>


            </div>
        </div>
  )
}

export default Rated