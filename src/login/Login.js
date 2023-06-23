import React, { useState } from 'react';
import './login.css';

function Login() {
  const [credentials, setCredentials] = useState({  username: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.username, password: credentials.password })

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
                    <input className='inttext' type="text" value={credentials.username}  onChange={onChange} name='username' placeholder="Username" />
                    <input className='inttext' type="password"  value={credentials.password}  onChange={onChange} name='password' placeholder="Password" />
                    <button className='btn' type="submit">Login</button>
                </form>           
            </div>

        </div>

        <div className='footer'></div>
      </div>
    </>
  )
}

export default Login;
