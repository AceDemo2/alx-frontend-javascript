export default function getStudentsByLocation(lists, city) {
  return lists.filter((i) => i.location === city);
}

