import { REGEX_LETTERS_VALIDATION } from './../../CONSTANTS/index';
import { useState, ChangeEvent, useEffect } from 'react';

interface DataReturned {
  value: string;
  error: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

type readValueFn = (query: string) => void;

export const useInputChanged = (readValueFn?: readValueFn): DataReturned => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!value) {
      setError('');
      return;
    }

    if (!REGEX_LETTERS_VALIDATION.test(value)) {
      setError('Query must contain letters and whitespaces only!');
      return;
    }

    setError('');
    readValueFn(value.trim());
  }, [value]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return {
    value,
    error,
    changeHandler,
  };
};
