import { client } from './client';

//functions here
export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({ email, password });
  await createProfile(email);

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
// so cool!
export async function fetchBearerToken() {
  const response = await fetch('/.netlify/functions/token');

  const data = await response.json();

  // console.log(data);
  return data;
}

export async function fetchAllAnimals(token, type, page) {
  const response = await fetch(`/.netlify/functions/petfinder?token=${token}&type=${type}&page=${page}`);
  const data = await response.json();
  return data;
}


// Supabase fetches

export async function createProfile(email) {
  const { body } = await client.from('profiles')
    .insert({ email });

  return body;
}

export async function addToLikedList(liked) {
  const { body } = await client.from('liked_pets')
    .insert([liked]); // works without the spread, and you could/should probably remove the array brackets, but i'll require fixes throughout your app

  return body;
}

export async function fetchLikedList(id) {
  if (id) {
    const { body } = await client.from('liked_pets')
      .select('*')
      .match({ profiles_user_id: id });

    return body;
  } else {
    const { body } = await client.from('liked_pets')
      .select('*')
      .match({ profiles_user_id: getUser().id });

    return body;
  }
}

export async function deleteFromLikedList(id) {
  const { body } = await client.from('liked_pets')
    .delete()
    .match({ id })
    .single();

  return body;
}

export async function fetchAnimalById(token, id) {
  const response = await fetch(`/.netlify/functions/single-pet?token=${token}&id=${id}`);
  const data = await response.json();
  return data;
}

//example

// export async function getMovieById(id) {
//   console.log(id);
//   const raw = await fetch(`/.netlify/functions/single-movie?id=${id}`);
//   const results = await raw.json();
  
//   return results;
// }

