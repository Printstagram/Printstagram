import React, { useState } from 'react';
import { useDataContext } from '../DataProvider';
import { signInUser } from '../services/fetch-utils';

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
    <form onSubmit={handleSignIn}>
      Sign In
      <label>
        Email
        <input value={signInEmail}
          onChange={(e) => setSignInEmail(e.target.value)}/>
      </label>
      <label>
        Password
        <input value={signInPassword} 
          type="password"
          onChange={(e) => setSignInPassword(e.target.value)}/>
      </label>
      <button>Sign In</button>
    </form>
  );
}
