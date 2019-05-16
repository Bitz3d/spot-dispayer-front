import React from "react";
import { Link } from "react-router-dom";
import '../header.css'

export default ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/register'} className="nav-link">Register</Link></li>
          <li><Link to={'/login'} className="nav-link">Login</Link></li>
        </ul>
      </nav>
    )
}