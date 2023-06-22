import React from 'react';
import './home.css';

function Home() {
  return (
    <>
      <div className='main'>
        <div className='header'>
            Welcome, User
            <span><button id='btn'>Logout</button></span>
        </div>

        <div className='body'>
            <div className='left'>
                Add My Note
                <input type='text' placeholder='Type message here...' /><br/>
                <button>Save</button>
            </div>

            <div id='verticalLine'> <hr/> </div>

            <div className='right'>
                All Notes
                <hr></hr>
                <p>Go to college</p>
                <span>10min</span> 
                <p> Buy new book</p>
                <span>9min</span>                 
                <p> need some help on IT project</p>
                <span>1min</span>        
            </div>

        </div>

        <div className='footer'></div>
      </div>
    </>
  )
}

export default Home;
