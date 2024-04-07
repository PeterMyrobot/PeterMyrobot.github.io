'use client';
import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [playEnd, setPlayEnd] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(() => text.slice(0, i));
        i++;
      } else {
        setPlayEnd(true);
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return { displayText, playEnd };
};

export default useTypewriter;
