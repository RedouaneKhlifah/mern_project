import { Router } from "express";

const router = Router();
import GoalController from "../controllers/GoalController.js";

router.get("/", GoalController.Get);

router.post("/", GoalController.create);

router.put("/:id", GoalController.update);

router.delete("/:id", GoalController.destroy);

export { router as Router };
