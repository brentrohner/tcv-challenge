import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import styles from './App.module.scss';
import Wrapper from './components/Wrapper';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <Wrapper>
          <AddTodo />
          <TodoList />
        </Wrapper>
      </div>
    </Provider>
  );
}
