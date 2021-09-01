import { useRef, useEffect, useState, ReactElement, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

export const checkSelected = (path: string, goTo: string): string =>
  path.replace('/', '') === goTo ? 'selected' : '';

export const ClientPortal = (
  children: ReactElement,
  selector: string
): ReactPortal | null => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};
