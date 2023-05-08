import Express from "express";
import Mongoose from "mongoose";
import Cors from "cors";
import Dotenv from "dotenv";
import { Router } from "./routes/GoalRoutes.js";
import ErrorHandler from "./middleware/errorMiddleware.js";

const app = Express();
const PORT = process.env.PORT || 3003;

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
// app.use(Cors());

app.use("/goals", Router);

app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
