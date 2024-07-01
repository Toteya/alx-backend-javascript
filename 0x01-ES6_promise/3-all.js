import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  // const result = await Promise.all([uploadPhoto(), createUser()])
  // const p = Promise.resolve();
  // return p
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      const result = [value[0].body, value[1].firstName, value[1].lastName];
      console.log(result);
      // return result;
      // return [1, 2, 3];
    })
    .catch(() => { console.error('Signup system offline'); });
  
  // console.log(`result: ${result}`);
  // return result;
}
