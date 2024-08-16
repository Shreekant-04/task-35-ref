import axios from "axios";

const api = axios.create({
  baseURL: "https://task-35-ref-backend.vercel.app", 
});

export const createUser = (user) => {
  api.post("/users", user);

};
export const createPost = (post) => {
  api.post("/posts", post);
};
export const getPosts = () => api.get("/posts");

export const getUsers = () => api.get("/users");
