import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "./controllers/TaskController.ts";

const router = new Router();

router.get("/task", getTasks)
  .post("/task", createTask)
  .get("/task/:id", getTask)
  .put("/task/:id", updateTask)
  .delete("/task/:id", deleteTask);

export default router;
