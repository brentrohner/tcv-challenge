import { RootState } from '../reducers';
import { Todo } from 'src/types/todo';

type State = Pick<RootState, 'todo'>;

export const getTodos = (state: State): Todo[] => state.todo.todos;
