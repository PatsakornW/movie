import React, { useContext, useEffect, useState } from "react";
import Card from "../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { MovieContext } from "../context/movieContext";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import "../App.css";
import "swiper/css";
import { Link } from "react-router-dom";

function Home() {
    const { movie, popular, page, setpage,addList,added } = useContext(MovieContext);

    return (
            <div >
                <div className="flex justify-center mt-10">
                    <div className="w-10/12 h-44 lg:h-96 carousel rounded-box">
                        {movie.results?.slice(0, 3).map((item) => (
                            <div
                                className="carousel-item w-full overflow-hidden relative "
                                key={item.id}
                                
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                                    alt={item.title}
                                    className="w-full"
                                />
                                <div class="hidden md:block absolute w-full h-full bottom-0 bg-gradient-to-l from-black/10 from-30% to-neutral rounded-lg ">
                                    <div className="text-white w-1/2 flex flex-col gap-y-2 items-start justify-center h-full">
                                        <p class="font-bold text-4xl tracking-wide  px-14 ">{item.title}</p>
                                        <p class="px-14">{item.overview}</p>
                                        <div className="flex  px-14 ">
                                            <Link to={`/detail/${item.id}`} className="btn btn-ghost  hover:btn-outline btn-sm">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 50 50"
                                                    className=" stroke-white fill-white "
                                                >
                                                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                                                </svg>
                                                More Info
                                            </Link>
                                            <button className="btn btn-ghost hover:btn-outline btn-sm" onClick={()=>addList(item)}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 50 50"
                                                    className=" stroke-white fill-white "
                                                >
                                                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                                                </svg>
                                                {added ? "Added" : "List"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-col mt-10">
                    <p className=" ms-10 lg:ms-36 text-xl font-bold">Popular</p>
                    <div className="flex flex-wrap  justify-center">
                        <div className="carousel   carousel-center w-10/12 p-4 space-x-4 rounded-box">
                            {popular?.results?.slice(0, 9).map((item) => (
                                <Link to={`/detail/${item.id}`}
                                    className="carousel-item rounded-box overflow-hidden"
                                    key={item.id}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                        alt={item.title}
                                        className="w-36 h-52 lg:w-44 lg:h-60 "
                                    />
                                   
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
       
    );
}

export default Home;
