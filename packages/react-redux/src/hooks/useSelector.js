import { useEffect, useState, useSyncExternalStore } from "react";
import { useStore } from "./useStore";

export const useSelector = (selector) => {
  // const [state, setState] = useState();
  const store = useStore();
  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     const newState = selector(store.getState());
  //     setState(newState);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  const state = useSyncExternalStore(store.subscribe, store.getState);
  return selector(state);
};
