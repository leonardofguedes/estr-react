import axios from "axios";

const BASE_URL = "https://fakerapi.it/api/v1";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products?_quantity=120`);
    return response.data;
  } catch (error) {
    console.error(`Houve um erro ao buscar os produtos: ${error}`);
    return null;
  }
};
