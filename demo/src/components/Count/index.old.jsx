import { Button } from "antd";
import * as countActions from "../../actions/countActions";
import { bindActionCreators } from "../../redux";
import { connect } from "../../react-redux";
import { useTheme } from "../../contexts/ThemeContext";

const Count = (props) => {
  const { count, increment, decrement, reset } = props;
  const { theme } = useTheme();
  return (
    <div>
      <div>当前主题：{theme}</div>
      {count}
      <Button onClick={increment}>Add</Button>
      <Button onClick={decrement}>Minus</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "Count state");
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(countActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
