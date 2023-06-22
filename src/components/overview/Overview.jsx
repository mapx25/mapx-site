import React from 'react'
import './overview.css'
import Eclipse1 from '../../assets/eclipse1.png'
import Eclipse2 from '../../assets/eclipse2.png'
import Eclipse3 from '../../assets/eclipse3.png'
const Overview = () => {
  return (
    <div className='overview' id='overview'>
        <div className='Overheading'>Why MapX</div>

        <div className='cards' >
            {/* <div> */}
                
            <div className='card'>
            <img src={Eclipse1} className='img1'></img>
            <img src={Eclipse2} className='img2'></img>

                <h2>Guarantee Foot <br/>Traffic</h2>
                <p>Using NFT vouchers, consumers
                    need to visit the store to use these
                    vouchers, guaranteeing foot
                    traffic sales</p>
            
            {/* </div> */}
            </div>
            <div className='card'>
            <img src={Eclipse1} className='img3'></img>
            <img src={Eclipse3} className='img4'></img>
                <h2>Ecofriendly</h2>
                <p>Reduces the gas fees significantly

                </p>
            </div>
            <div className='card'>
            <img src={Eclipse1} className='img1'></img>
            <img src={Eclipse2} className='img2'></img>
                <h2>Pay For<br/>Conversion</h2>
                <p>MapX only charge businesses for
                    each new NFT minted.</p>
            </div>
            <div className='card'>
            <img src={Eclipse1} className='img3'></img>
            <img src={Eclipse3} className='img4'></img>
                <h2>Real Utility Of<br/> Vouchers</h2>
                <p>Using NFTs as vouchers, consumers
                    can use these vouchers to achieve
                    real life utility.</p>
            </div>
        </div>
    </div>

  )
}

export default Overview