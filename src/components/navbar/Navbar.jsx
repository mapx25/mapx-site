import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar' id='home'>
        
        <div className='logo'>
            <img src={logo}></img>
        </div>

        <div className='options'>
            <ul className='nav-items'>
                <a href="#home" className='nav-item'>Home</a>
                <div className='dropdown'>
                  <div href="#about" className='nav-item'>About</div>
                  <div class="dropdown-content">
                    <a href="https://drive.google.com/file/d/15jyT2yhWLm5WPAW7BLD5euPTLBiJzyd1/view?usp=share_link">Whitepaper</a>
                    <a href="https://docs.google.com/presentation/d/1t5SgSFdsC1lIdbNz2XFwdAz_1BWaEl4W/edit?usp=sharing&ouid=106129527907134070426&rtpof=true&sd=true">Pitchdeck</a>
                    
                  </div>
                </div>
                <a href="#overview" className='nav-item'>Overview</a>
                <a href="#contact" className='nav-item'>Contact</a>
            </ul>
        </div>
        
    </div>
    
  )
}
