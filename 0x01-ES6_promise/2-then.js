export default function handleResponseFromAPI(promise) {
    let val; 
    promise.then(
      val = {
        status: 200,
        body: 'success',
      }
    )
    .catch(() => val = new Error())
    .finally(() => console.log('Got a response from the API'));

    return val;
}
