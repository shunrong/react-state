import { useContext } from "react";
import { ReactReduxContext } from "../contexts/ReactReduxContext";

export const useStore = () => {
  const { store } = useContext(ReactReduxContext);
  return store;
};
