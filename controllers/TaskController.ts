import { Context } from "../helpers/types/oak.ts";
import mongodb from "../config/mongodb.ts";
import TaskModel from "../models/TaskModel.ts";

const tasksCollection = mongodb.collection("tasks");

export const getTasks = async ({ response }: Context) => {
  try {
    const tasks: TaskModel[] = await tasksCollection.find();
    response.status = 200;
    response.body = tasks;
  } catch (error) {
    response.status = 404;
    response.body = {
      error,
      message: `Tasks not found.`,
    };
  }
};

export const getTask = async ({ response, params: {id} }: Context | any) => {
  try {
    const task: TaskModel = await tasksCollection.findOne(
      { _id: { "$oid": id } },
    );

    if (task) {
      response.status = 200;
      response.body = task;
      return;
    }

    response.status = 404;
    response.body = { message: `task not found` };
  } catch (error) {
    response.status = 404;
    response.body = {
      error,
      message: `Task not found.`,
    };
  }
};

export const createTask = async ({ request, response }: Context) => {
  try {
    const { value: {title, description} } = await request.body();

    const task = await tasksCollection.insertOne({
      title,
      description,
    });

    response.body = { message: "OK", task };
    response.status = 201;
  } catch (error) {
    response.status = 500;
    response.body = {
      error,
      message: `Internal server error.`,
    };
  }
};

export const updateTask = async ({ request, response, params: {id} }: Context | any) => {
  try {
    const body = await request.body();

    const task: TaskModel = await tasksCollection.findOne(
      { _id: { "$oid": id } },
    );

    if (task) {
      const { matchedCount } = await tasksCollection.updateOne(
        { _id: { "$oid": id } },
        { $set: body.value },
      );

      response.status = 204;
      response.body = { message: "OK", matchedCount };
      return;
    }

    response.status = 404;
    response.body = { message: `task not found` };
  } catch (error) {
    response.status = 500;
    response.body = {
      error,
      message: `Internal server error.`,
    };
  }
};

export const deleteTask = async ({response, params: {id}}: Context | any) => {
  try {
    const task: TaskModel = await tasksCollection.findOne(
      { _id: { "$oid": id } },
    );

    if (task) {
      const deleteCount = await tasksCollection.deleteOne({ _id: { "$oid": id } });
      response.status = 200;
      response.body = { message: "OK", deleteCount };
      return;
    }
    response.status = 404;
    response.body = { message: `task not found` };
  } catch (error) {
    response.status = 500;
    response.body = {
      error,
      message: `Internal server error.`,
    };
  }
};
