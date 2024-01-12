import { useCallback } from "react";
import { Input as TextInput, Button } from "antd";
import { bindActionCreators } from "@elime/redux";
import { connect } from "@elime/react-redux";
import * as inputActions from "../../actions/inputActions";
import store from "../../store";

const Input = (props) => {
  // console.log(props);
  const { inputValue = "33", changeInput, resetInput } = props;

  const handleInputChange = useCallback((e) => {
    changeInput(e.target.value);
    // dispatch({ type: "CHANGE_INPUT", payload: e.target.value });
  }, []);

  const handleReset = useCallback(() => {
    // resetInput();
    store.dispatch({ type: "RESET_INPUT" });
  }, []);

  return (
    <>
      <TextInput value={inputValue} onChange={handleInputChange} />
      <Button type="primary" onClick={handleReset}>
        重置
      </Button>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "Input state");
  return {
    inputValue: state.input
  };
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   changeInput: (value) => dispatch({ type: "CHANGE_INPUT", payload: value }),
  //   resetInput: () => dispatch({ type: "RESET_INPUT" })
  // };

  return {
    dispatch,
    ...bindActionCreators(inputActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
