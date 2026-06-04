import { useState } from "react";
import axios from "axios";

function StudentForm({ refreshStudents }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    course: "",
    fee: "",
    paid: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://127.0.0.1:5000/api/students",
      formData
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      course: "",
      fee: "",
      paid: ""
    });

    refreshStudents();
  };

  return (
    <div className="card">
      <h3>Add Student</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <input
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />

        <input
          name="fee"
          placeholder="Fee"
          value={formData.fee}
          onChange={handleChange}
        />

        <input
          name="paid"
          placeholder="Paid Amount"
          value={formData.paid}
          onChange={handleChange}
        />

        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
