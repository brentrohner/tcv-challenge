import React, { useEffect } from 'react';
import Item from '../Item';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosRequest } from 'src/api';
import { getTodos as getTodoList } from '../../redux/selectors/todo';

type Props = {};

export default function TodoList({}: Props): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosRequest());
  }, []);
  const todoItems = useSelector(getTodoList);
  return (
    <div>
      {todoItems.map((item) => (
        <Item
          text={item.text}
          key={item.id}
          completed={item.completed}
          id={item.id}
        />
      ))}
    </div>
  );
}
