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
    <form onSubmit={handleSignUp}>
      Sign Up
      <label>
        Email
        <input value={signUpEmail}
          onChange={(e) => setSignUpEmail(e.target.value)}/>
      </label>
      <label>
        Password
        <input value={signUpPassword}
          type="password"
          onChange={(e) => setSignUpPassword(e.target.value)}/>
      </label>
      <button>Sign Up</button>
    </form>
  );
}
