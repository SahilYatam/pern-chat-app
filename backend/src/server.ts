import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
  console.log("Server running on PORT: ", port);
});
