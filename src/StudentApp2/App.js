import React, { useState } from "react";
import StudentForm from "../components/StudentForm";

function StudentApp2() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>StudentApp2</h1>
      <StudentForm formData={formData} setFormData={setFormData} />
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="dob"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="gender">Gender:</label>
      <input
        type="text"
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <br />
    </div>
  );
}

export default StudentApp2;
