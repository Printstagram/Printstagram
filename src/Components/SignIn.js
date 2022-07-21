import React, { useState } from 'react';
import { useDataContext } from '../DataProvider';
import { signInUser } from '../services/fetch-utils';
import { Link } from 'react-router-dom';

export default function SignIn() {

  const { setUser } = useDataContext();

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signInEmail, signInPassword);
    setUser(user);
  }

  return (
    <div className='auth-form'>
      <h1>Printstagram</h1>
      <Link to="/about">
        <button>About the Devs</button>
      </Link>
      <form onSubmit={handleSignIn}>
        <label>
          <input 
            placeholder='Email'
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}/>
        </label>
        <label>
          <input value={signInPassword} 
            placeholder='Password'
            type='password'
            onChange={(e) => setSignInPassword(e.target.value)}/>
        </label>
        <button>Log In</button>
        <p>Don't have an account? <a href='./sign-up'>Sign up</a></p> {/*eslint-disable-line */}
      </form>
    </div>
  );
}
