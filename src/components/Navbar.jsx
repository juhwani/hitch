import React from 'react'
import "../styles/main.css"
const Navbar = () => {
  return (
    <div className = "bar">
        <div className="logo">HITCH</div>
        <div className="menu">
            <span>Home</span>
            <span>Drivers</span>
            <span>Hitchers</span>
            <span>About</span>
            <span className = "cross">+</span>
        </div>
    </div>
  )
}

export default Navbar