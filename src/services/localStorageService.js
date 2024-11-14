// src/services/localStorageService.js

// Get students from local storage
export const getStudents = () => {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];
 };
 
 // Add a student to local storage
 export const addStudent = (studentData) => {
    const students = getStudents();
    students.push(studentData);
    localStorage.setItem('students', JSON.stringify(students));
 };
 
 // Delete a student by serial number
 export const deleteStudent = (serialNumber) => {
    const students = getStudents().filter(student => student.serialNumber !== serialNumber);
    localStorage.setItem('students', JSON.stringify(students));
 };
 