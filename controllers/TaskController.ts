import { HandlerFunc, Context } from "https://deno.land/x/abc/mod.ts";
import Task from "../models/Task.ts";

import mongodb from "../config/mongodb.ts";

const Tasks: any = mongodb.collection("tasks");

export const getTasks: HandlerFunc = (c: Context) => {
  return "get tasks!";
};

export const createTask: HandlerFunc = async (c: Context) => {
  try {
    const body = await (c.body());
    if (!Object.keys(body).length) {
      return c.string("Request body can not be empty!", 400);
    }
    const { title, description } = body;

    const task = await Tasks.insertOne({
      title,
      description,
    });

    return c.json(task, 201);
  } catch (error) {
    return c.json(error, 500);
  }
};

export const getTask: HandlerFunc = (c: Context) => {
  //response.body = "get task!";
};

export const updateTask: HandlerFunc = (c: Context) => {
  //response.body = "update task!";
};

export const deleteTask: HandlerFunc = (c: Context) => {
};
