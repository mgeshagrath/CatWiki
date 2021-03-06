import { useRef, useEffect, useState, ReactElement, ReactPortal } from "react";
import { createPortal } from "react-dom";

export const highlightCurrentPath = (path: string, goTo: string): string =>
  path.replace("/", "") === goTo ? "selected" : "";

export const createPath = (value: string): string =>
  value.replaceAll(" ", "").toLowerCase();

const randomNumberGenerator = (maxNum: number) =>
  Math.floor(Math.random() * maxNum) + 1;

export const getRandomCatName = (arr: Cat[]): string => {
  // console.log(arr);

  const randomCat = randomNumberGenerator(arr.length);

  // console.log(randomCat);

  const [{ name }] = arr.filter((_, index) => index === randomCat);

  return name;
};

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
