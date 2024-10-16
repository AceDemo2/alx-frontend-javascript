export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  const res = [];
  for (const i of set) {
    if (i.startsWith(startString)) {
      res.push(i.slice(startString.length));
    }
  }
  return res.join('-');
}
