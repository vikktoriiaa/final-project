import axios from "axios";

export const sendMail = async (name: string, YourEmail: string, selectedCategory: string, message: string) => {
  try {
    const response = await axios.post("http://localhost:3001/send-email", {
      name,
      YourEmail,
      selectedCategory,
      message,
    });
    return response.data;
  } catch (error: any) {
    console.error("Ошибка в sendMail:", error.response?.data || error.message);
    throw error; // Передаем ошибку вызывающему коду
  }
};