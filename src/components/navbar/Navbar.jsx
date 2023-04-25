import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Navbar() {
  return (
    <div className='navbar' id='home'>
        
        <div className='logo'>
            <img src={logo}></img>
        </div>

        <div className='options'>
            <ul className='nav-items'>
                <a href="#home" className='nav-item'>Home</a>
                {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton> */}
                {/* <a href="#about" className='nav-item'>About</a> */}
                <div className="dropdown">
                  <span className="nav-item" id="dropbtn">About
                    {/* <i className="fa fa-caret-down"></i> */}
                  </span>
                  <div className="dropdown-content">
                    <a href="#">PitchDeck</a>
                    <a href="#">Whitepaper</a>
                  </div>
                </div>
                <a href="#overview" className='nav-item'>Overview</a>
                <a href="#contact" className='nav-item'>Contact</a>
            </ul>
        </div>
        
    </div>
    
  )
}
