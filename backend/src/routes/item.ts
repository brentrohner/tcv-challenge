import { Router } from 'express';
import todoController from '../Todo/controller';

const itemRoutes = Router();

itemRoutes.get('/todos', todoController.getTodos);
itemRoutes.post('/todo', todoController.createTodo);
itemRoutes.patch('/todo/:id', todoController.updateTodo);

export default itemRoutes;
