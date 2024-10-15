export default function getListStudentIds(lists) {
  if (!Array.isArray(lists)) {
    return [];
  }
  return lists.map((i) => i.id);
}
