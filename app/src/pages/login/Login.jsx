import React from 'react';
import "./login.scss";

function Login() {
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Vedanta Connect.</h1>
          {/* <p>
          Let's connect!
          </p> */}

          <span>Don't have account?</span>
          <button>Register</button>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type="text" placeholder="Password" />
            <button type="">Login</button>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Login