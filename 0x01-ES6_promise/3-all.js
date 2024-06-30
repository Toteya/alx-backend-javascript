import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return await Promise.all([promise1, promise2])
    .then((value) => {
      console.log(value[0].body, value[1].firstName, value[1].lastName);
    })
    .catch(() => { console.error('Signup system offline'); });
}
