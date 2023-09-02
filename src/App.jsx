import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";


function App() {


  return (
    <div className="flex   h-screen">
      <div className="w-fit hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-grow flex-col">
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet/>
        </div>

      </div>
    </div>


  );
}

export default App;
