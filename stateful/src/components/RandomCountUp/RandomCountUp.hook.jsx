import './RandomCountUp.css';
import { useState } from 'react';
import { getRandomMinMax } from '@/utils';

export default function RandomCountUp({ min, max, current }) {
  const [name] = useState('Random Count Up');
  const [TARGET_COUNT] = useState(() => getRandomMinMax(min, max));
  const [count, setCount] = useState(current);

  console.log(name);
  console.log(count);
  console.log(TARGET_COUNT);

  return null;
}

RandomCountUp.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  current: 0,
  fps: 60,
};
