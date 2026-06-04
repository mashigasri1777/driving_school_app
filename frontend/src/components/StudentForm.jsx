import { useState } from "react";
import axios from "axios";

function StudentForm({ refreshStudents }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    llrApplied: "No",
    llrDate: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:5000/api/students",
        formData
      );

      alert("Student Added Successfully");

      setFormData({
        name: "",
        phone: "",
        course: "",
        llrApplied: "No",
        llrDate: ""
      });

      refreshStudents();
    } catch (error) {
      console.error(error);
      alert("Failed to add student");
    }
  };

  return (
    <div className="card">

      <div style={{ marginBottom: "25px" }}>
        <h2
          style={{
            color: "#1E3309",
            marginBottom: "5px"
          }}
        >
          Add Student
        </h2>

        <p style={{ color: "#666" }}>
          Enter student details below
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px"
          }}
        >
          <div>
            <label>Full Name *</label>

            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Phone Number *</label>

            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div style={{ marginTop: "15px" }}>
          <label>Course *</label>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">
              Select a Course
            </option>

            <option value="LMV Car">
              LMV Car
            </option>

            <option value="Bike">
              Bike
            </option>

            <option value="Gearless">
              Gearless
            </option>

            <option value="Heavy Vehicle">
              Heavy Vehicle
            </option>
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "15px"
          }}
        >
          <div>
            <label>LLR Applied? *</label>

            <select
              name="llrApplied"
              value={formData.llrApplied}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div>
            <label>LLR Application Date</label>

            <input
              type="date"
              name="llrDate"
              value={formData.llrDate}
              onChange={handleChange}
              disabled={
                formData.llrApplied === "No"
              }
            />
          </div>
        </div>

        <div
          style={{
            background: "#FFF1F4",
            border: "1px solid #FCA9AA",
            padding: "18px",
            borderRadius: "12px",
            marginTop: "20px"
          }}
        >
          <h4
            style={{
              color: "#E23260",
              marginBottom: "10px"
            }}
          >
            🔔 LLR Due Date
          </h4>

          <p>
            LLR Due Date will be calculated
            automatically (Application Date +
            30 Days)
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px"
          }}
        >
          <button type="submit">
            Add Student
          </button>

          <button
            type="button"
            style={{
              background: "#849A28"
            }}
            onClick={() =>
              setFormData({
                name: "",
                phone: "",
                course: "",
                llrApplied: "No",
                llrDate: ""
              })
            }
          >
            Reset
          </button>
        </div>

      </form>
    </div>
  );
}

export default StudentForm;
