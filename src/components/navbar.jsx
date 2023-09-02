import React from 'react'
import Sidebar from './sidebar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [inputSearch, setinputSearch] = useState("")
  const navigate = useNavigate();

  function handle_search(e){
    e.preventDefault();
    navigate(`/search/${inputSearch}`)
  }
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar ">
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="flex px-0 md:px-2 mx-0 md:mx-2 font-semibold text-3xl ">

            <div  className=' mx-0 md:mx-2 flex items-center'>
              
            </div>

          </div>


          <div className="flex-none">
          <form onSubmit={handle_search}>
            <div className=' relative '>
                <input
                    type='text'
                    className=' input w-full bg-base-100 pl-10 pr-3'
                    placeholder=' Search...'
                    value={inputSearch}
                    onChange={(e)=> setinputSearch(e.target.value)}          
                />
            </div>


        </form>
          </div>

      
    


        </div>
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <Sidebar/>

      </div>
    </div>
  )
}

export default Navbar