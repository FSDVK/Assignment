import React from 'react';
import './welcome.css';
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className='contain'>
        <div className='header'></div>

        <div className='body'>
            <div className='left'></div>

            <div className='right'>
                <div className='rightFirst'></div>
                <div className='rightSecond'></div>
                <div id='text'>Welcome</div>
                <Link to="/register"><button className='btn'>Register</button></Link>
                <Link to="/login"><button className='btn'>Login</button></Link>  
            </div>

        </div>

        <div className='footer'></div>
      </div>
    </>
  )
}

export default Welcome;
