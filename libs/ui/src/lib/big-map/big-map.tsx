import styles from './big-map.module.css';

/* eslint-disable-next-line */
export interface BigMapProps {}

export function BigMap(props: BigMapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BigMap!</h1>
    </div>
  );
}

export default BigMap;
