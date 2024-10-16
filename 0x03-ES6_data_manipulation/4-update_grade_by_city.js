export default function updateStudentGradeByCity(lists, city, newGrades) {
  const filteredList = lists.filter((i) => i.location === city);

  const newList = filteredList.map((j) => {
    const j1 = { ...j }; // Create a shallow copy of the student object

    for (const k of newGrades) {
      if (j1.id === k.studentId) {
        j1.grade = k.grade; // Update the grade in the copied object
      }
    }

    // If the grade is undefined, set it to 'N/A'
    if (j1.grade === undefined) {
      j1.grade = 'N/A';
    }

    return j1; // Return the new object without modifying the original one
  });

  return newList;
}
