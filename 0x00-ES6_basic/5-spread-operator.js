export default function concatArrays(array1, array2, string) {
  const obj = [...array1, ...array2, ...string];
  return obj;
}
