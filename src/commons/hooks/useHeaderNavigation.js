import { useEffect } from 'react';
import { useHeaderNavigationStore } from '../store/useHeaderNavigationStore';

export default function useHeaderNavigation({ left, title, right }) {
  const setHeader = useHeaderNavigationStore((state) => state.setHeader);
  const resetHeader = useHeaderNavigationStore((state) => state.resetHeader);

  useEffect(() => {
    setHeader({ left, title, right });
    return () => {
      resetHeader();
    };
  }, [left, title, right, setHeader, resetHeader]);
}
