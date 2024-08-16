import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Adjust if necessary
});

export const createUser = (user) => {
  api.post("/users", user);

};
export const createPost = (post) => {
  api.post("/posts", post);
};
export const getPosts = () => api.get("/posts");

// Add this function to fetch users
export const getUsers = () => api.get("/users");
