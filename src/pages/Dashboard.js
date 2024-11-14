import React, { useState, useEffect } from 'react';
import { getStudents, addStudent, deleteStudent } from '../services/localStorageService';
import './Dashboard.css';

const Dashboard = () => {
   const [students, setStudents] = useState([]);
   const [newStudent, setNewStudent] = useState({
      name: '',
      dob: '',
      department: '',
      batch: '',
      aadhaar: ''
   });
   const [error, setError] = useState('');
   const [isEditing, setIsEditing] = useState(false);
   const [editingSerialNumber, setEditingSerialNumber] = useState(null);

   useEffect(() => {
      setStudents(getStudents());
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setNewStudent((prev) => ({ ...prev, [name]: value }));
   };

   const validateForm = () => {
      const { name, dob, department, batch, aadhaar } = newStudent;

      // Ensure all fields are filled
      if (!name || !dob || !department || !batch || !aadhaar) {
         setError("All fields must be filled.");
         return false;
      }

      // Ensure Aadhaar number is exactly 12 digits
      if (!/^\d{12}$/.test(aadhaar)) {
         setError("Aadhaar number must be exactly 12 digits.");
         return false;
      }

      // Validate age is at least 17 years
      const dobDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();
      const monthDifference = today.getMonth() - dobDate.getMonth();
      const dayDifference = today.getDate() - dobDate.getDate();

      if (age < 17 || (age === 17 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))) {
         setError("Age must be at least 17 years.");
         return false;
      }

      setError('');
      return true;
   };

   const handleAddStudent = (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const generatedSerialNumber = students.length ? students[students.length - 1].serialNumber + 1 : 1;
      const studentToSave = { ...newStudent, serialNumber: generatedSerialNumber };

      try {
         if (isEditing) {
            const updatedStudents = students.map((student) =>
               student.serialNumber === editingSerialNumber ? studentToSave : student
            );
            localStorage.setItem('students', JSON.stringify(updatedStudents));
            setStudents(updatedStudents);
            setIsEditing(false);
            setEditingSerialNumber(null);
         } else {
            addStudent(studentToSave);
            setStudents(getStudents());
         }

         setNewStudent({
            name: '',
            dob: '',
            department: '',
            batch: '',
            aadhaar: ''
         });
      } catch (error) {
         console.error("Error adding/updating student:", error);
         setError('Failed to add or update student');
      }
   };

   const handleEditStudent = (serialNumber) => {
      const studentToEdit = students.find((student) => student.serialNumber === serialNumber);
      setNewStudent({
         name: studentToEdit.name,
         dob: studentToEdit.dob,
         department: studentToEdit.department,
         batch: studentToEdit.batch,
         aadhaar: studentToEdit.aadhaar
      });
      setIsEditing(true);
      setEditingSerialNumber(serialNumber);
   };

   const handleDeleteStudent = (serialNumber) => {
      try {
         deleteStudent(serialNumber);
         setStudents(getStudents());
      } catch (error) {
         console.error("Error deleting student:", error);
         setError('Failed to delete student');
      }
   };

   return (
      <div>
         <h2>Student Dashboard</h2>
         {error && <p style={{ color: 'red' }}>{error}</p>}

         <form onSubmit={handleAddStudent}>
            <input type="text" name="name" placeholder="Name" value={newStudent.name} onChange={handleChange} required />
            <input type="date" name="dob" placeholder="Date of Birth" value={newStudent.dob} onChange={handleChange} required />
            <input type="text" name="department" placeholder="Department" value={newStudent.department} onChange={handleChange} required />
            <input type="text" name="batch" placeholder="Batch" value={newStudent.batch} onChange={handleChange} required />
            <input
               type="text"
               name="aadhaar"
               placeholder="Aadhaar Number (12 digits)"
               value={newStudent.aadhaar}
               onChange={handleChange}
               maxLength="12"
               required
            />
            <button type="submit">{isEditing ? "Update Student" : "Add Student"}</button>
         </form>

         <h3>Student List</h3>
         <table>
            <thead>
               <tr>
                  <th>Serial Number</th>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Department</th>
                  <th>Batch</th>
                  <th>Aadhaar Number</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {students.map((student) => (
                  <tr key={student.serialNumber}>
                     <td>{student.serialNumber}</td>
                     <td>{student.name}</td>
                     <td>{student.dob}</td>
                     <td>{student.department}</td>
                     <td>{student.batch}</td>
                     <td>{student.aadhaar}</td>
                     <td>
                        <button onClick={() => handleEditStudent(student.serialNumber)}>Edit</button>
                        <button onClick={() => handleDeleteStudent(student.serialNumber)}>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Dashboard;
