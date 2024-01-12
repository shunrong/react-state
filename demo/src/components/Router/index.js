import { Button } from "antd";
import { jump } from "../../../../packages/redux/src/react-router/history";

const Router = () => {
  return (
    <div>
      <Button onClick={() => jump("count", "计数")}>Count</Button>
      <Button onClick={() => jump("input", "输入")}>Input</Button>
      <Button onClick={() => jump("todos", "代办")}>Todos</Button>
    </div>
  );
};

export default Router;
