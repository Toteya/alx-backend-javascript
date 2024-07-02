export default function cleanSet(set, startString) {
  const length = startString.length;
  let myString = '';
  let count = 0;

  for (const item of set) {
    if (length && item.slice(0, length) === startString) {
      if (count) { myString += '-'; }
      myString += item.slice(length, item.length);
    }
    count += 1;
  }

  return myString;
}
