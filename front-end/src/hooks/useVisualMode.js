import { useState } from 'react';

const useVisualMode = initial => {
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    !replace
      ? setHistory(prev => {
          return [...prev, mode];
        })
      : setHistory(prev => {
          return [...prev.slice(0, -1), mode];
        });
  };

  const back = () => {
    if (history.length > 1) {
      setHistory(prev => {
        return [...prev.slice(0, -1)];
      });
    }
  };

  return {
    mode: history[history.length - 1],
    transition,
    back,
  };
};

export default useVisualMode;
