import { useState, useEffect } from 'react';

function debounce(callback, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
}

function useMousePosition(time) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const nextPosition = {
        x: e.clientX,
        y: e.clientY,
      };

      setPosition(nextPosition);
    };

    globalThis.addEventListener('mousemove', debounce(handleMove, time));

    return () => {
      globalThis.removeEventListener('mousemove', handleMove);
    };
  }, [time]);

  return [position.x, position.y];
}

export default useMousePosition;
