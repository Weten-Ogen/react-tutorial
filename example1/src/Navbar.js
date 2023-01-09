import React from 'react'
import img from './logo192.png';

const Navbar = () => {
  return (
    <nav>
        <img src={img} alt='react-img'/>
        <h1>ReactFacts</h1>
        <h3>react course - project 1</h3>
    </nav>
  )
}

export default Navbar
