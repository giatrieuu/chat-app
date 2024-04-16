import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import express from "express";
import connectToMongoDB from "./db/connectToMongoDb.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   //root router http://localhost:5000/
//   res.send("Hello World");
// });
app.listen(PORT, () => {
    connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
