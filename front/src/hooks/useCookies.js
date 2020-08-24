import { useState } from 'react';
import Cookies from 'universal-cookie';

function useCookies(key, option = {}) {
  const cookies = new Cookies();
  const [name, setName] = useState(() => {
    if (cookies.get(key)) return cookies.get(key);
    return null;
  });

  const setValue = (value, option) => {
    setName(value);
    cookies.set(key, value, option);
  };

  const removeItem = (option) => {
    cookies.remove(key);
  };

  return [name, setValue, removeItem];
}

export default useCookies;
