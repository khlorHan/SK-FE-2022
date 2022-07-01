import { useState, useEffect } from 'react';

export function useMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleUpdate = (e) => {
    setX(e.pageX);
    setY(e.pageY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleUpdate);
    return () => {
      window.removeEventListener('mousemove', handleUpdate);
    };
  }, []);

  return { x, y };
}
