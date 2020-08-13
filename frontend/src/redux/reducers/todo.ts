import { Reducer } from 'redux';
import {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  TodoActions,
} from '../actions/todo';
import { Todo } from '../../types/todo';

export interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: [],
};

const todoReducer: Reducer<State, TodoActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.response };
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.response] };
    case UPDATE_TODO: {
      const { id } = action.meta;
      var index = state.todos.indexOf(
        state.todos.find((item) => item.id === id) as Todo
      );
      const currentItems = state.todos;
      currentItems[index] = action.response;
      return { ...state, todos: [...currentItems] };
    }
    default:
      return state;
  }
};

export default todoReducer;
