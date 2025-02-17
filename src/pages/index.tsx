import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [blocks, setBlocks] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const handleClick1 = (x: number, y: number) => {
    const newBlocks = structuredClone(blocks);
    newBlocks[y][x] = blocks[y][x] === 0 ? 1 : 0;
    setBlocks(newBlocks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {blocks.map((row, rowIndex) =>
          row.map((block, blockIndex) => (
            <div
              key={blockIndex}
              style={{ backgroundColor: block === 0 ? 'red' : 'white' }}
              className={styles.block}
              onClick={() => handleClick1(blockIndex, rowIndex)}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
