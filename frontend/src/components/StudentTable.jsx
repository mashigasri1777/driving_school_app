import axios from "axios";

function StudentTable({ students, refreshStudents }) {

  const deleteStudent = async (id) => {
    await axios.delete(
      `http://127.0.0.1:5000/api/students/${id}`
    );

    refreshStudents();
  };

  return (
    <div className="card">
      <h3>Students</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Fee</th>
            <th>Paid</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.course}</td>
              <td>₹{student.fee}</td>
              <td>₹{student.paid}</td>

              <td>
                <button
                  onClick={() =>
                    deleteStudent(student.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
