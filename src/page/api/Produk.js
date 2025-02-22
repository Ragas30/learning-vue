import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/api",
});

const getProduk = async () => {
  try {
    const response = await api.get("/produk", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getProdukById = async (id) => {
  try {
    const response = await api.get(`/produk/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const postProduk = async (data) => {
  try {
    const response = await api.post("/produk", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const putProduk = async (id, data) => {
  try {
    const response = await api.put(`/produk/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const deleteProduk = async (id) => {
  try {
    const response = await api.delete(`/produk/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { getProduk, getProdukById, postProduk, putProduk, deleteProduk };
