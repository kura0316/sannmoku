import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [number, setNumber] = useState(0);

  const [number2, setNumber2] = useState(10);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };
  const handleIncrement2 = () => {
    setNumber2(number2 + 1);
  };

  const handleDecrement2 = () => {
    setNumber2(number2 - 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleDecrement} className={styles.button}>
        -
      </button>
      <div className={styles.number}>{number}</div>
      <button onClick={handleIncrement} className={styles.button}>
        +
      </button>

      <button onClick={handleDecrement2} className={styles.button}>
        -
      </button>
      <div className={styles.number}>{number2}</div>
      <button onClick={handleIncrement2} className={styles.button}>
        +
      </button>
    </div>
  );
};

export default Home;
