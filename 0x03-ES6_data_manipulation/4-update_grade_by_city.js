export default function updateStudentGradeByCity(lists, city, newGrades) {
  const filtered_list = lists.filter((i) => i.location === city);
  const new_list = filtered_list.map(function (j) {
    for (let k of newGrades) {
      if (j.id === k.studentId) {
        j['grade'] = k.grade;
      }
    }
    if (j['grade'] === 'undefined') {
        j['grade'] = 'N/A';
      }
    return j
  });
  return new_list;
}
