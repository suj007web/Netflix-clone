import React from 'react'
import logo from "../../netflixlogo.png"
import {Link} from "react-router-dom"
import { ImSearch } from "react-icons/im"
const Navbar = () => {
  return (
    <nav className="header">
        <img src={logo} alt="" />
        <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/mylist">My List</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        </div>
        <ImSearch/>
    </nav>

  )
}

export default Navbar