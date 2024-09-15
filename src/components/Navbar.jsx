import React from 'react'
import { Link } from "react-router-dom"
import "../styles/main.css"
const Navbar = () => {
  return (
    <div className = "bar">
        <div className="logo">HITCH</div>
        <div className="menu">
            <Link to = "/">Home</Link>
            <Link to = "/drivers">Drivers</Link>
            <Link to = "/hitchers">Hitchers</Link>
            <Link to = "/about">About</Link>
            <span className = "cross">+</span>
        </div>
    </div>
  )
}

export default Navbar