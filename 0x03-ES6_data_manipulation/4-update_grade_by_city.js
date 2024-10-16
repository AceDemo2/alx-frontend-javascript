export default function updateStudentGradeByCity(lists, city, newGrades) {
  const filteredList = lists.filter((i) => i.location === city);
  const newList = filteredList.map((j) => {
    const j1 = j;
    for (const k of newGrades) {
      if (j1.id === k.studentId) {
        j1.grade = k.grade;
      }
    }
    if (j1.grade === 'undefined') {
      j1.grade = 'N/A';
    }
    return j1;
  });
  return newList;
}
