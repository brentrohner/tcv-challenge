import React from 'react';
import styles from './Button.module.scss';

type Props = { onClick: () => void };

export default function Button({ onClick }: Props): JSX.Element {
  return (
    <button onClick={onClick} className={styles.Button}>
      Add Todo
    </button>
  );
}
