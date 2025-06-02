import { useState, useEffect } from 'react';

export const useAnimation = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return { animated };
};