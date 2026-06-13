import { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Students() {
  const [students, setStudents] = useState([]);

  // Load students from localStorage
  const loadStudents = () => {
    try {
      const savedStudents = localStorage.getItem("drivingSchoolStudents");
      if (savedStudents) {
        setStudents(JSON.parse(savedStudents));
      }
    } catch (error) {
      console.error("Error loading students from localStorage:", error);
    }
  };

  // Save students to localStorage
  const saveStudents = (studentsData) => {
    try {
      localStorage.setItem("drivingSchoolStudents", JSON.stringify(studentsData));
    } catch (error) {
      console.error("Error saving students to localStorage:", error);
    }
  };

  // Add new student
  const addStudent = (newStudent) => {
    const updatedStudents = [...students, { ...newStudent, id: Date.now() }];
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
  };

  // Delete student
  const deleteStudent = (studentId) => {
    const updatedStudents = students.filter(s => s.id !== studentId);
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
  };

  // Update student
  const updateStudent = (studentId, updatedData) => {
    const updatedStudents = students.map(s =>
      s.id === studentId ? { ...s, ...updatedData } : s
    );
    setStudents(updatedStudents);
    saveStudents(updatedStudents);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <>
      <StudentForm
        onAddStudent={addStudent}
      />

      <StudentTable
        students={students}
        onDeleteStudent={deleteStudent}
        onUpdateStudent={updateStudent}
      />
    </>
  );
}

export default Students;
