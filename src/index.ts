import express from "express";
import dotenv from "dotenv";
import customerRoutes from "./routes/customer.routes";
import { connectDB } from "./config/db";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// connect database
connectDB(process.env.MONGO_URI || "mongodb://localhost:27017/customerdb");

// middlewares
app.use(express.json());

// routes
app.use("/api/customers", customerRoutes);

// health
app.get("/", (_, res) => res.send({ status: "ok", timestamp: new Date() }));

// error handler (should be after routes)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
