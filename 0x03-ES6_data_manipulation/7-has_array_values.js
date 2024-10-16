export default function hasValuesFromArray(myset, arr) {
  let j = 1;
  for (let i of arr) {
    if (myset.has(i)) {
      continue;
    }
    j = 0;
    break;
  }
  return j ? true : false
}
