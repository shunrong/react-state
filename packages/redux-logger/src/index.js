const logger = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      console.log("middleware logger start");
      console.table(getState());
      next(action);
      console.log("middleware logger end");
    };
  };
};

export default logger;
