export default function cleanSet(set, startString) {
  let len = 0;
  let myString = '';
  let count = 0;

  if (typeof (startString) === 'string') {
    len = startString.length;
  }

  for (const item of set) {
    if (len && item && item.slice(0, len) === startString) {
      if (count) { myString += '-'; }
      myString += item.slice(len, item.length);
    }
    count += 1;
  }

  return myString;
}
