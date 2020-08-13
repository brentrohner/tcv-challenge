import { Todo } from '../../types/todo';

// Note: If given more time, I would have added pending and failure cases for each action type.

export const GET_TODOS = 'GET_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

interface GetTodosAction {
  type: typeof GET_TODOS;
  response: Todo[];
}

interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: { text: string; completed: boolean };
  response: Todo;
}

interface UpdateTodo {
  type: typeof UPDATE_TODO;
  meta: { id: string };
  response: Todo;
}

export type TodoActions = GetTodosAction | CreateTodoAction | UpdateTodo;

export const getTodos = (response: Todo[]) => {
  return {
    type: GET_TODOS,
    response,
  };
};

export const updateTodo = (response: Todo, meta: { id: string }) => {
  return {
    type: UPDATE_TODO,
    response,
    meta,
  };
};

export const createTodo = (response: Todo) => {
  return {
    type: CREATE_TODO,
    response,
  };
};
