import React from 'react';
import styles from './Wrapper.module.scss';

type Props = {
  children: JSX.Element[];
};

export default function Wrapper({ children }: Props): JSX.Element {
  return <div className={styles.Wrapper}>{children}</div>;
}
