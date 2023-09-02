import React, { useContext, useEffect } from 'react'
import { MovieContext } from "../context/movieContext";
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';



function Treding() {
    const { treding, video, setId,setpage,page } = useContext(MovieContext);
    const filterVideo = video?.results?.filter((item) => {
        return item.name === "Official Trailer";
    });

    useEffect(() => {
      setpage(1)
    }, [page])
    

    return (

        <div className="flex justify-center mt-10">
            <div className="w-[75%] h-52 md:h-[20rem] lg:h-[30rem] carousel rounded-box">
                {treding.results?.slice(0, 5).map((item) => (
                    <div className="carousel-item w-full overflow-hidden relative " key={item.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                            alt={item.name}
                            className="w-full"
                        />
                        <div className=" absolute w-full h-full bottom-0 bg-gradient-to-l from-black/10 from-30% to-neutral rounded-lg ">
                            <div className="text-white  w-full lg:w-1/2 flex flex-col gap-y-2 items-center lg:items-start justify-center h-full">
                                <p className="font-bold text-xl lg:text-4xl tracking-wide px-0 text-center lg:text-start  lg:px-14  ">{item.title || item.name}</p>
                                <p className="px-14 hidden lg:block">{item.overview}</p>
                                <div className="flex gap-2  px-14 ">
                                    <button className="btn btn-sm rounded-full btn-primary hover:btn-secondary hover:text-white" onClick={() => {
                                        setId(item.id)
                                        window.trailer.showModal()
                                    }}><FaPlay /></button>
                                    <Link to={`/detail/${item.id}`} className="btn btn-sm rounded-full btn-primary hover:btn-secondary hover:text-white" onClick={()=> setId(item.id)}><CgDetailsMore className='' /></Link>
                                </div>



                            </div>
                        </div>
                    </div>
                ))}
                <dialog id="trailer" className="modal p-0">
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
    )
}

export default Treding