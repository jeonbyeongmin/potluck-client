import { useCallback, useState } from 'react';

interface UseHover {
  isHover: boolean;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

export default function useHover(): UseHover {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = useCallback(() => setIsHover(true), []);
  const handleMouseOut = useCallback(() => setIsHover(false), []);

  return {
    isHover,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  };
}
