import React from 'react';
import './welcome.css';
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className='main'>
        <div className='header'></div>

        <div className='body'>
            <div className='left'></div>

            <div className='right'>
                <div className='rightFirst'></div>
                <div className='rightSecond'></div>
                <h2>Welcome</h2>
                <Link to="/register"><button>Register</button></Link>
                <Link to="/login"><button>Login</button></Link>  
                {/* <button>Register</button> 
                <button>Login</button>       */}
            </div>

        </div>

        <div className='footer'></div>
      </div>
    </>
  )
}

export default Welcome;
