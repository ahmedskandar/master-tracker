import { useEffect, useReducer } from "react";

export const useLocalStorageState = (
  reducer: (
  state: any,
  action: any
) => any,
  initialState: any,
  key: string
) => {
  const storedState = localStorage.getItem(key);
  const [state, dispatch] = useReducer(
    reducer,
    storedState ? JSON.parse(storedState) : initialState
  );

  useEffect(() => {
    // Store the state in localStorage whenever it changes to persist in browser refresh
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};