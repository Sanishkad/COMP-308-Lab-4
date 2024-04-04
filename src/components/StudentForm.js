import React from 'react';

function StudentForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br />
    </div>
  );
}

export default StudentForm;
