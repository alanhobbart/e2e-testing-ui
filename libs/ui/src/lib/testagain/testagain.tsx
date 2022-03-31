import styles from './testagain.module.css';

/* eslint-disable-next-line */
export interface TestagainProps {}

export function Testagain(props: TestagainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testagain!</h1>
    </div>
  );
}

export default Testagain;
