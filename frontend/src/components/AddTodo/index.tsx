import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './AddTodo.module.scss';
import Button from '../Button';
import { createTodoRequest } from 'src/api';

type Props = {};

export default function AddTodo({}: Props): JSX.Element {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  return (
    <div className={styles.AddTodo}>
      <input
        placeholder="Add a todo item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.Input}
      />
      <Button
        onClick={() => {
          try {
            dispatch(createTodoRequest(input));
            setInput('');
          } catch (error) {
            console.log(error);
            throw error;
          }
        }}
      />
    </div>
  );
}
