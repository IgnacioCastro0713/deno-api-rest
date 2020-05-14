import { Application } from "https://deno.land/x/abc/mod.ts";
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
} from "./controllers/TaskController.ts";

const app = new Application();

// routes
app
  .get("/task", getTasks)
  .post("/task", createTask)
  .get("/task/:id", getTask)
  .put("/task/:id", updateTask)
  .delete("/task/:id", deleteTask);

export default app;
