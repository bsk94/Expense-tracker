import { useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void) => {
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const maybeHandler = (e: MouseEvent) => {
      if (!selectRef.current?.contains(e.target as HTMLElement)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });
  return selectRef;
};
