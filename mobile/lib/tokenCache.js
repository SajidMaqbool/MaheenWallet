import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export const tokenCache = {
  async getToken(key) {
    try {
      if (Platform.OS === "web") {
        return typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
      }
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      if (Platform.OS === "web") {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, value);
        }
        return;
      }
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("SecureStore save item error: ", err);
    }
  },
};
