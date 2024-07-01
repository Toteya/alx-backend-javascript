import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  
  return Promise.allSettled([promise1, promise2])
    .then((result) => {
      const arr = [];
      for (const item of result) {
        const status = item.status;
        const value = item.value !== undefined? item.value : item.reason;
        arr.push({status, value})
      }
      return arr;
    });
}