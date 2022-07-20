import React, { useState } from 'react';
import { useDataContext } from '../DataProvider';
import { signUpUser } from '../services/fetch-utils';

export default function SignUp() {

  const { setUser } = useDataContext();

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser(signUpEmail, signUpPassword);
    setUser(user);
  }

  return (
    <div className='auth-form'>
      <h1>Printstagram</h1>
      <h2>Sign up to see photos of your animal friends.</h2>
      <form onSubmit={handleSignUp}>
        <label>
          <input 
            placeholder='Email'
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}/>
        </label>
        <label>
          <input 
            placeholder='Password'
            value={signUpPassword}
            type='password'
            onChange={(e) => setSignUpPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>
        <p>Have an account? <a href='./sign-in'>Log in</a></p> {/*eslint-disable-line */}
      </form>
    </div>
  );
}
