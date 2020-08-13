import { getTodos, updateTodo, createTodo } from './../redux/actions/todo';
import { AnyAction } from 'redux';
import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';

const baseUrl = 'http://localhost:9000/api/';

const url = (path: string) => {
  return baseUrl + path;
};

export const getTodosRequest = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      const response = await axios.get(url('todos'));
      if (!response.data) {
      } else {
        const data = response.data;
        dispatch(getTodos(data));
      }
    } catch (error) {
      throw error;
    }
  };
};

export const updateTodoRequest = (todoId: string) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      const response = await axios.patch(url(`todo/${todoId}`));
      if (!response.data) {
      } else {
        const data = response.data;
        dispatch(updateTodo(data, { id: todoId }));
      }
    } catch (error) {
      throw error;
    }
  };
};

export const createTodoRequest = (text: string) => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    try {
      const response = await axios.post(url(`todo`), {
        text,
        completed: false,
      });
      if (!response.data) {
      } else {
        console.log(response);
        const data = response.data;
        dispatch(createTodo(data));
      }
    } catch (error) {
      throw error;
    }
  };
};
