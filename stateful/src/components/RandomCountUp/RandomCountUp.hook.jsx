import './RandomCountUp.css';
import { useState, useEffect } from 'react';
import { getRandomMinMax } from '@/utils';

export default function RandomCountUp({ min, max, step, current, fps }) {
  const [name] = useState('Random Count Up');
  const [TARGET_COUNT] = useState(() => getRandomMinMax(min, max));

  useEffect(() => {
    document.title = `(${TARGET_COUNT}) ${name}`;
  }, [TARGET_COUNT, name]);

  const [count, setCount] = useState(current);

  // 파생 상태
  const isComplete = count >= TARGET_COUNT;

  useEffect(() => {
    let clearId;

    if (!isComplete) {
      clearId = setInterval(() => {
        setCount(count + step);
      }, 1000 / fps);
    }
    return () => {
      clearInterval(clearId);
    };
  }, [count, fps, isComplete, step]);

  return (
    <div className="randomCountUp">
      <output style={isComplete ? { animationName: 'none' } : null}>
        {count}
      </output>
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
