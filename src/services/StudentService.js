// services/StudentService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api';

export const getStudents = () => axios.get(`${API_URL}/students`);
export const addStudent = (studentData) => axios.post(`${API_URL}/students`, studentData);
export const deleteStudent = (id) => axios.delete(`${API_URL}/students/${id}`);
