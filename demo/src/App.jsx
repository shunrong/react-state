import React, { useMemo } from "react";
import Todos from "./components/Todos";
import Input from "./components/Input";
import Count from "./components/Count";
import Theme from "./components/Theme";
import Room from "./components/Room";
// import Router from "./components/Router";
import { useWindowWidth } from "./hooks/useWindowWidth";
// import { useHistory } from "./react-router/useHistory";

const App = () => {
  const windowWidth = useWindowWidth();
  // const path = useHistory();
  // const router = useMemo(() => {
  //   switch (path) {
  //     case "count":
  //       return <Count />;
  //     case "input":
  //       return <Input />;
  //     case "todos":
  //       return ;
  //     default:
  //       return <div>home</div>;
  //   }
  // }, [path]);
  return (
    <div>
      hello {windowWidth}
      {/* <Router /> */}
      <Todos />
      <Input />
      <Count />
      {/* {router} */}
      <Room />
      <Theme />
    </div>
  );
};

export default App;
