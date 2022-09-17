import { Button, Table } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import jsonContext from "../Utilities/Context";

export default function UserList() {
  const { users } = useContext(jsonContext);
  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      key: "operation",
      title: "Action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <Button>
          <Link to={`/users/${record.id}`}>Details</Link>
        </Button>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={users}></Table>
    </>
  );
}
