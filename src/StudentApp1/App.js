import React, { useState } from "react";
import StudentForm from "../components/StudentForm";

function App() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  return (
    <div>
      <h1>StudentApp1</h1>
      <StudentForm formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
