import { create } from "zustand";
import { getProducts } from "../services/products.service";
import { notification } from "antd";

export const useProduct = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  getProducts: async () => {
    set({ loading: true });
    try {
      const products = await getProducts();
      set({ products });
    } catch (e) {
      set({ error: e.message });
      notification.error({
        message: "Error",
        description: "There was an error fetching products.",
      });
    } finally {
      set({ loading: false });
    }
  }
}));
