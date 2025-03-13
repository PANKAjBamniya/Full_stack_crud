import axios from "axios";

const API_URI = process.env.REACT_APP_API_URL; // Ensure this is set in .env

export const fetchTodo = async () => {
  const response = await axios.get(`${API_URI}/api/todo`); // Use API_URI
  return response.data;
};

export const createTodo = async (formData) => {
  const response = await axios.post(`${API_URI}/api/todo`, formData); // Use API_URI
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URI}/api/todo/${id}`); // Use API_URI
  return response.data;
};

export const updateTodo = async (formData) => {
  const response = await axios.put(
    `${API_URI}/api/todo/${formData.id}`,
    formData
  ); // Use API_URI
  return response.data;
};
