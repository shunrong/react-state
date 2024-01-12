import { useContext } from "react";
import { ReactReduxContext } from "../contexts/ReactReduxContext";

export const useReduxContext = () => {
  const contextValue = useContext(ReactReduxContext);
  return contextValue;
};
