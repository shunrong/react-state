import { useEffect } from "react";
import { bindActionCreators } from "@elime/redux";
import { connect } from "@elime/react-redux";
import * as todosActions from "../../actions/todosActions";
import { Button, Spin, Table, Switch } from "antd";

const Todos = (props) => {
  const { todos, error, loading, fetchTodos } = props;

  useEffect(() => {
    fetchTodos({});
  }, []);

  const columns = [
    {
      dataIndex: "id",
      title: "代办ID"
    },
    {
      dataIndex: "text",
      title: "代办内容"
    },
    {
      dataIndex: "isDone",
      title: "是否完成",
      render(value) {
        return <Switch checked={value} />;
      }
    }
  ];

  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  return (
    <Spin spinning={loading}>
      <Button
        onClick={() => {
          fetchTodos({});
        }}
      >
        重新 Fetch
      </Button>
      <Table columns={columns} dataSource={todos} rowKey="id" />
    </Spin>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "Todos state");
  return {
    ...state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(todosActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
