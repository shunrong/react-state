import { useEffect, useMemo } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "@elime/react-redux";
import { bindActionCreators } from "@elime/redux";
import * as roomsActionCreators from "../../actions/roomsActions";

const Room = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);
  console.log(rooms, "rooms");
  const { loading, rooms: list, error } = rooms || {};

  const { fetchRooms } = useMemo(() => {
    return bindActionCreators(roomsActionCreators, dispatch);
  }, []);

  useEffect(() => {
    fetchRooms();
  }, []);

  const columns = [
    {
      dataIndex: "bath_count",
      title: "Bath"
    },
    {
      dataIndex: "bed_count",
      title: "Bed"
    },
    {
      dataIndex: "bin",
      title: "Bin"
    },
    {
      dataIndex: "size",
      title: "Size"
    },
    {
      dataIndex: "building",
      title: "Address",
      render: (building) => building.address
    },
    {
      dataIndex: "unit_number",
      title: "No."
    }
  ];
  if (error) return error;
  return <Table rowKey={'id'} spining={loading} columns={columns} dataSource={list} />;
};

export default Room;
