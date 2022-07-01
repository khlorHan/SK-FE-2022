import './RandomCountUp.css';
import { useState, useEffect } from 'react';
import { getRandomMinMax } from '@/utils';

export default function RandomCountUp({ min, max, step, current }) {
  const [TARGET_COUNT] = useState(() => getRandomMinMax(min, max));
  useEffect(() => {
    document.title = `(${TARGET_COUNT}) ${document.title}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // Promise
  // useEffect(() => {
  //   fetch('https://randomuser.me/api')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);

  // Async Function
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://randomuser.me/api');
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

  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    // 이벤트 구독
    const clearIntervalId = setInterval(() => {
      console.log('subscription');
      console.log(Date.now());
    }, 1000);

    // 클린업(cleanup function) = 이펙트 함수가 반환하는 함수
    // 이벤트 구독 취소
    return () => {
      console.log('cleanup');
      clearInterval(clearIntervalId);
    };
  }, [count, name]);

  const handleIncrementCount = () => {
    setCount(count + step);
  };

  return (
    <div style={{ margin: 30 }}>
      <div
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 40,
        }}
      >
        <button onClick={handleIncrementCount}>increment count</button>
        <output>{count}</output>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h1 style={{ marginTop: 4 }}>{name}</h1>
      </div>
    </div>
  );
}

RandomCountUp.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  current: 0,
  fps: 60,
};
