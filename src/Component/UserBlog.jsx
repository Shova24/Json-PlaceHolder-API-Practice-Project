import { Card, Row, Typography } from "antd";
import React, { useContext } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import jsonContext from "../Utilities/Context";

const { Title } = Typography;
export default function UserBlog({ blog }) {
  const { edit, setedit } = useContext(jsonContext);
  const updateItem = (blog) => {
    console.log(blog);
    setedit(true);
  };
  return (
    <Card style={{ borderRadius: "25px", margin: "5px", height: "250px" }}>
      <Row justify="end">
        <span>
          <EditOutlined onClick={() => updateItem(blog)} />
        </span>
        <span style={{ paddingLeft: "10px" }}>close</span>
      </Row>
      <Row justify="center">
        <Title level={3} style={{ color: "teal", alignItem: "center" }}>
          {blog.title}
        </Title>
      </Row>
      <Row>
        <p>{blog.body}</p>
      </Row>
    </Card>
  );
}
