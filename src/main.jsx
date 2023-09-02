import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MovieContextProvider from './context/movieContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx'
import Favorites from './pages/favorites.jsx'
import Detail from './pages/detail.jsx'
import Test from './pages/test.jsx'
import Watchlist from './pages/watchlist.jsx'
import Searched from './pages/searched.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/search/:searched",
        element: <Searched />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <MovieContextProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>

  </MovieContextProvider>

)
