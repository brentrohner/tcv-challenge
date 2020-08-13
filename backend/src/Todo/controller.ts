import Item from './todoSchema';
import { Request, Response } from 'express';
import * as uuid from 'uuid';

const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Item.find();
    res.send(todos);
  } catch (error) {
    res.status(400);
    res.send({ error: 'Error when retrieivng list of todos!' });
  }
};

const createTodo = async (req: Request, res: Response) => {
  try {
    const id = uuid.v4();
    const item = new Item({
      id: id,
      text: req.body.text,
      completed: req.body.completed,
    });

    await item.save();
    res.send(item);
  } catch (error) {
    res.status(404);
    res.send({ error: 'Could not insert new todo!' });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const item = await Item.findOne({ id: req.params.id });

    item.completed = !item.completed;

    await item.save();
    res.send(item);
  } catch {
    res.status(404);
    res.send({ error: "Todo doesn't exist!" });
  }
};

const todoController = {
  getTodos,
  createTodo,
  updateTodo,
};

export default todoController;
