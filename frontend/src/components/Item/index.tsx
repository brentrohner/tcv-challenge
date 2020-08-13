import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Item.module.scss';
import { updateTodoRequest } from 'src/api';

type Props = {
  text: string;
  completed: boolean;
  id: string;
};
export default function Item({ text, completed, id }: Props): JSX.Element {
  const dispatch = useDispatch();
  return (
    <div className={styles.Item}>
      <input
        type="checkbox"
        checked={completed}
        className={styles.Checkbox}
        onChange={() => dispatch(updateTodoRequest(id))}
      ></input>
      <label data-content={text} className={styles.Text}>
        {text}
      </label>
    </div>
  );
}
