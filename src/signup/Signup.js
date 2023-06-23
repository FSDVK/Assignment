import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [credentials, setCredentials] = useState({  username: "", email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.username, email: credentials.email, password: credentials.password })

    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (event) => {
    setCredentials({...credentials, [event.target.name]: event.target.value})
    // console.log(event.target.value);
  }


  return (
    <>
      <div className='container'>
        <div className='header'></div>

        <div className='body'>
            <div className='left'></div>

            <div className='right'>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='inttext' value={credentials.username}  onChange={onChange} name='username' placeholder="Username" />
                    <input type='email' className='inttext' name='email' value={credentials.email} onChange={onChange} placeholder='Email' />
                    <input type="password" className='inttext' value={credentials.password}  onChange={onChange} name='password' placeholder="Password" />
                    <button className='btn' type="submit">SignUp</button>
                </form>           
            </div>

        </div>

        <div className='footer'></div>
      </div>
    </>
  )
}

export default Signup;
