import './RandomCountUp.css';
import { useState, useEffect } from 'react';
import { getRandomMinMax } from '@/utils';

export default function RandomCountUp({ min, max, step, current }) {
  const [TARGET_COUNT] = useState(() => getRandomMinMax(min, max));
  useEffect(() => {
    document.title = `(${TARGET_COUNT}) ${document.title}`;
  }, []);

  /* -------------------------------------------------------------------------- */
  const [name, setName] = useState('Random Count Up');
  useEffect(() => {
    console.log('change name');
    console.log('name', name);
  }, [name]);

  /* -------------------------------------------------------------------------- */

  const [count, setCount] = useState(current);
  useEffect(() => {
    console.log('change count');
    console.log('count', count);
  }, [count]);

  /* -------------------------------------------------------------------------- */

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://randomuse.me/api');
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log({
    loading,
    error,
    data,
  });

  const handleIncrementCount = () => {
    setCount(count + step);
  };

  return (
    <>
      <button onClick={handleIncrementCount}>increment count</button>
      <output>{count}</output>
      <h1>{name}</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}

RandomCountUp.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  current: 0,
  fps: 60,
};
