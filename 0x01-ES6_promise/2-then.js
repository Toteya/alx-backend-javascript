export default async function handleResponseFromAPI(promise) {
  const result = await promise
    .then(() => (
      {
        status: 200,
        body: 'success',
      }
    ))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
  // console.log(`RESULT: ${result}`)
  return result;
}
