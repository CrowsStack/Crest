import { useEffect, useState } from 'react';
import { useInterval } from '@/hooks/useInterval';

export const useCarousel = (itemCount: number, interval = 5000) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Custom interval hook
  useInterval(
    () => {
      if (autoPlay) {
        setCurrent((prev) => (prev + 1) % itemCount);
      }
    },
    interval
  );

  // Pause auto-play on hover
  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  // Manual navigation
  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % itemCount);
  };

  const previous = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + itemCount) % itemCount);
  };

  return {
    current,
    next,
    previous,
    handleMouseEnter,
    handleMouseLeave,
  };
};
