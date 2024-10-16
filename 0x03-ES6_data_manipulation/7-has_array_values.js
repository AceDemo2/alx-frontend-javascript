export default function hasValuesFromArray(myset, arr) {
  for (const i of arr) {
    if (!myset.has(i)) {
      return false;
    }
  }
  return true;
}
