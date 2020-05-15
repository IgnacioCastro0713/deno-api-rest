import { HandlerFunc, Context } from "https://deno.land/x/abc/mod.ts";
import mongodb from "../config/mongodb.ts";
import TaskModel from "../models/Task.ts";

const db: any = mongodb.getDatabase;
const tasksCollection: any = db.collection("tasks");

export const getTasks: HandlerFunc = (ctx: Context) => {
  return "get tasks!";
};

export const createTask: HandlerFunc = async (ctx: Context) => {
  try {
    const body = await (ctx.body());
    if (!Object.keys(body).length) {
      return ctx.string("Request body can not be empty!", 400);
    }
    const { title, description } = body;

    const task = await tasksCollection.insertOne({
      title,
      description,
    });

    return ctx.json(task, 201);
  } catch (error) {
    return ctx.json(error, 500);
  }
};

export const getTask: HandlerFunc = (ctx: Context) => {
  //response.body = "get task!";
};

export const updateTask: HandlerFunc = (ctx: Context) => {
  //response.body = "update task!";
};

export const deleteTask: HandlerFunc = (ctx: Context) => {
};
