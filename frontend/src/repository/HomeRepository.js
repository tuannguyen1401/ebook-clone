import { apiGateway } from "../gateway/gateway";

const BASE_URL = "https://jsonplaceholder.typicode.com"; // ví dụ thôi

export const HomeRepository = {
  getPosts: async () => {
    return await apiGateway(`${BASE_URL}/posts`);
  },

  getPostById: async (id) => {
    return await apiGateway(`${BASE_URL}/posts/${id}`);
  },

  createPost: async (data) => {
    return await apiGateway(`${BASE_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
};