import { useContext, useEffect, useMemo, useState } from "react";
import { ReactReduxContext } from "./contexts/ReactReduxContext";
import { shallowEqual } from "./shallowEqual";

export const connect = (mapStateToProps, mapDispatchToProps) => (Component) => (
  props
) => {
  const { store } = useContext(ReactReduxContext);
  const [states, setState] = useState({});

  const actions = useMemo(() => {
    let result = { dispatch: store.dispatch };
    if (typeof mapDispatchToProps === "function") {
      result = mapDispatchToProps(store.dispatch);
    }
    return result;
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      let newStates = {};
      if (typeof mapStateToProps === "function") {
        newStates = mapStateToProps(store.getState());
      }
      setState(newStates);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <Component {...states} {...actions} {...props} />;
};
