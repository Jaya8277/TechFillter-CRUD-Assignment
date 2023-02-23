import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css';
const Navbar = () => {
  return (
    <div className='main'>
        <Link to="/" className='main1'><h1>Home</h1></Link>
        <Link to="/add" className='main1'><h1>Add</h1></Link>
    </div>
  )
}

export default Navbar