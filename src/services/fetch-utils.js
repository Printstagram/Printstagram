import { client } from './client';

//functions here
export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({ email, password });

  return user;
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({ email, password });

  return user;
}

export async function logout() {
  await client.auth.signOut();
  localStorage.clear();
}

export function getUser() {
  return client.auth.user();
}

// Netlify fetches
export async function fetchBearerToken() {
  const response = await fetch('/.netlify/functions/token');

  const data = await response.json();

  // console.log(data);
  return data;
}

export async function fetchAllAnimals(token, type) {
  const response = await fetch(`/.netlify/functions/petfinder?token=${token}&type=${type}`);
  const data = await response.json();
  return data;
}


// Supabase fetches

export async function createProfile(email) {
  const { body } = await client.from('profiles')
    .insert({ email });

  return body;
}

export async function createLikedList