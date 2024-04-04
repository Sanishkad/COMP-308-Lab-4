import React, { useState } from "react";
import StudentForm from "../components/StudentForm";

function StudentApp3() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    college: "",
    courses: "",
  });

  const handleSubmit = (data) => {
    // Handle form submission here, e.g., save data to state or send to server
    console.log("Form submitted with data:", data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>StudentApp3</h1>
      <StudentForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
      <label htmlFor="college">College Name:</label>
      <input
        type="text"
        id="college"
        name="college"
        value={formData.college}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="courses">Number of Courses Registered:</label>
      <input
        type="number"
        id="courses"
        name="courses"
        value={formData.courses}
        onChange={handleChange}
      />
      <br />
    </div>
  );
}

export default StudentApp3;
