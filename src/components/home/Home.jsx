import React from 'react'
import video from '../../assets/video.mp4'
import './home.css'
import Navbar from '../navbar/Navbar'
// import image from "../../assets/bg-image.png";
// import Eclipse2 from '../../assets/eclipse2.png'
import doodle1 from '../../assets/Line-2.png';
import doodle2 from '../../assets/Line-3.png';
import doodle3 from '../../assets/Line-1.png';
import shop from '../../assets/coffee-shop.png';
import nft from '../../assets/Ethereum.png';
export default function Home() {
  return (
    <>
    <div className='home'>
        <Navbar/>
        <div className="blurScreen">
            <div className="ecl"/>
            <div className="ecl"/>
            <div className="ecl3"/>
            <div className="ecl4"/>
          
        <div className="main-content">
          <h2 className='h1'>Explore the World,</h2>
          <div className="headGroup">
            <h2 className="h1">
              <span>One </span>
              <span className="nft">NFT </span>
              <span>at a</span>
            </h2>
            <img className='doodle1' src={doodle1}></img>
          </div>
          <h2 className="h1">Time</h2>
          <div className='btn'>
          <button className='homeBtn'><a href="https://drive.google.com/file/d/1N2hmAeKCmNn6orZerreoCYn85i1L4cIS/view?usp=share_link">Download APK</a></button>
        </div>
        </div>
        <img src={nft} className="nftImage"></img>
        <img className="shop" src={shop}></img>
        <img className="doodle2" src={doodle2}></img>
        <img className="doodle3" src={doodle3}></img>
        </div>
          





        {/* <div className='heading'>
          <h1>Explore The World, One</h1>
          <h1>NFT at a Time</h1>
        </div>

        <div className='btn'>
          <button className='homeBtn'><a href="https://drive.google.com/file/d/1N2hmAeKCmNn6orZerreoCYn85i1L4cIS/view?usp=share_link">Download APK</a></button>
        </div>
        <video className='bg-video' preload="none" autoPlay loop muted >
            <source src={video}></source>
        </video> */}

    </div>
    </>

    
  )
}
