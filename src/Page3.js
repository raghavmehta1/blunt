import React from 'react'
import './Page3.css';
import castImage from './assets/cast2.png';


const Page3 = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Be part of Our Stories</h1>
        <div className="cast-image">
          <img src={castImage} alt="The Cast" />
        </div>
        <div className="description">
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
        </div>
        <div className="arrow-container">
          <div className="arrow">↗</div>
        </div>
      </div>
    </div>
  )
}

export default Page3
