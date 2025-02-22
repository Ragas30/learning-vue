import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/auth",
});

const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    console.log(response);
    const { token } = response.data;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getData = async (url) => {
  try {
    const response = await api.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    throw error.response.data;
  }
};

export { login, getData };

