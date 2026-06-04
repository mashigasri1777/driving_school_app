import { useEffect, useState } from "react";
import axios from "axios";

import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Students() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const res = await axios.get(
      "http://127.0.0.1:5000/api/students"
    );

    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <>
      <StudentForm
        refreshStudents={loadStudents}
      />

      <StudentTable
        students={students}
        refreshStudents={loadStudents}
      />
    </>
  );
}

export default Students;
