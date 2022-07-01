import './RandomCountUp.css';
import { useState, useEffect, memo } from 'react';
import { getRandomMinMax } from '@/utils';
import { Button } from '@/components';

// useMemo는 값을 기억하기 위해 사용한다.
// useCallback은 `함수` 값을 기억하기 위해 사용한다.

const ButtonStyles = {
  position: 'fixed',
  zIndex: 1000,
  top: 20,
  right: 20,
};

function RandomCountUp({ min, max, step, current, fps, onReCountUp }) {
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
      <Button lang="en" onClick={onReCountUp} style={ButtonStyles}>
        Re Count Up
      </Button>
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

export default memo(RandomCountUp);
