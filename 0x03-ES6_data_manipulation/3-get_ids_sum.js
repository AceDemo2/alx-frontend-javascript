export default function getStudentIdsSum(lists) {
  return lists.reduce((acc, val) => acc + val.id, 0);
}
