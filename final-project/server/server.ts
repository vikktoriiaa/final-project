import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3001;

// Настройка CORS для разрешения запросов с фронтенда
app.use(cors({
  origin: "http://localhost:5173", 
}));
app.use(bodyParser.json());

console.log("Загруженные учетные данные:", {
  email: process.env.GMAIL_EMAIL,
  password: process.env.GMAIL_PASSWORD ? "****" : "undefined",
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Используем 587 (STARTTLS) вместо 465 (SSL) для тестирования
  secure: false, // false для 587, true для 465
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD, 
  },
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/send-email", async (req, res) => {
  const { name, YourEmail, selectedCategory, message } = req.body; // Соответствие параметрам фронтенда

  // Валидация тела запроса
  if (!name || !YourEmail || !selectedCategory || !message) {
    return res.status(400).json({ error: "Отсутствуют обязательные поля" });
  }

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: YourEmail, // Отправляем письмо на email пользователя
    subject: "Сообщение с формы - finsweet.com",
    text: `Ваше сообщение успешно отправлено!\n\nДетали:\nИмя: ${name}\nEmail: ${YourEmail}\nКатегория: ${selectedCategory}\nСообщение: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Письмо отправлено: " + info.response);
    res.status(200).json({ message: "Письмо успешно отправлено" });
  } catch (error: any) {
    console.error("Ошибка при отправке письма:", error);
    res.status(500).json({ error: "Не удалось отправить письмо", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

