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
      <h4>Create an account</h4>
      <p>Enter an email and password for your account</p>
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
      </form>
    </div>
  );
}
