import axios from "axios";

export async function apiGateway(url, options = {}) {
  try {
    const response = await axios({
      url,
      method: options.method || "get",
      headers: options.headers,
      data: options.body,
      params: options.params,
      ...options.axiosConfig, // allow custom axios config if needed
    });
    return response.data;
  } catch (error) {
    console.error("API Gateway Error:", error.message);
    throw error;
  }
}