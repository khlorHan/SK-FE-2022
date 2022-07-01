/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { RandomCountUp, Button, TiltCard } from '@/components';
import { getRandom } from '@/utils';

function App() {
  const [reCountUpKey, setReCountUpKey] = useState(() => getRandom(100));

  // 참조 동일성, 함수(참조형 데이터) 타입을
  // 하위 컴포넌트에 prop으로 전달할 때
  // 기억된(memoized) 함수 값을 전달해야
  // 성능 최적화가 이뤄진다.
  const handleReCountUp = useCallback(
    () => setReCountUpKey(reCountUpKey + getRandom(100)),
    [reCountUpKey]
  );

  const [renderingTester, setRenderingTester] = useState(0);

  useEffect(() => {
    setTimeout(() => setRenderingTester(renderingTester + 1), 1000);
  }, [renderingTester]);

  const memoizedRandomCountUp = useMemo(
    () => (
      <RandomCountUp
        min={32}
        max={88}
        step={2}
        key={reCountUpKey}
        onReCountUp={handleReCountUp}
      />
    ),
    [handleReCountUp, reCountUpKey]
  );

  return <div className="app">{memoizedRandomCountUp}</div>;
}

export default App;
