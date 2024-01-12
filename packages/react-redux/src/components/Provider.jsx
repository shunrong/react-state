import { useEffect } from "react";
import { ReactReduxContext } from "../contexts/ReactReduxContext";

export const Provider = (props) => {
  const { store, children } = props;
  return (
    <ReactReduxContext.Provider value={{ store }}>
      {children}
    </ReactReduxContext.Provider>
  );
};
