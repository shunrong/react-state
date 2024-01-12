const thunk = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      console.log("middleware thunk start");
      if (typeof action === "function") {
        action(dispatch, getState);
      } else {
        next(action);
      }
      console.log("middleware thunk end");
    };
  };
};

export default thunk;
