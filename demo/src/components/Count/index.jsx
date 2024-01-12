import { useMemo, useEffect } from "react";
import { Button } from "antd";
import { bindActionCreators } from "@elime/redux";
import { useDispatch, useSelector } from "@elime/react-redux";
import * as countActions from "../../actions/countActions";
import { useTheme } from "../../contexts/ThemeContext";

const Count = () => {
  const { theme } = useTheme();
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const { increment, decrement, reset } = useMemo(() => {
    return bindActionCreators(countActions, dispatch);
  }, [dispatch]);

  useEffect(() => {
    const dom = document.querySelector("#no-select");
    dom.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });
  }, []);

  return (
    <div>
      <div id="no-select">当前主题：{theme}</div>
      {count}
      <Button onClick={increment}>Add</Button>
      <Button onClick={decrement}>Minus</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default Count;
