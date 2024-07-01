import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  
  return Promise.allSettled([promise1, promise2])
    .then((result) => result);
}