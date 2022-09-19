import { Card, Col, Row, Tag, Typography } from "antd";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import InputField from "../Shared/InputField";
import UpdateInputField from "../Shared/UpdateInputField";
import jsonContext from "../Utilities/Context";
import UserBlog from "./UserBlog";

const { Title, Text } = Typography;

export default function UserDetails() {
  const { users, blog, edit, setedit } = useContext(jsonContext);
  const { userId } = useParams();
  const user = users.find((el) => el.userId !== userId);
  const blogs = blog.filter((item) => item.userId === Number(userId));

  return (
    <Card>
      <Row
        justify="space-between"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "lightgray",
          borderRadius: "5px",
          padding: "10px",
        }}>
        <Col xs={24} md={16} lg={16}>
          {edit ? <UpdateInputField item={blog} /> : <InputField />}
        </Col>
        <Col xs={24} md={8} lg={8}>
          <Card
            style={{
              borderRadius: "25px",
              backgroundColor: "lightGray",
              margin: "10px",
            }}>
            <Row justify="end">
              <Tag color="cyan">{user?.username}</Tag>
            </Row>
            <Row>
              <Title level={4}>{user?.name}</Title>
            </Row>
            <Row>
              <Col span={24}>{user?.email}</Col>
              <Col span={24}>{user?.phone}</Col>
              <Col span={24}></Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        {blogs.map((el) => (
          <Col key={el.id} xs={24} md={12} lg={12}>
            <UserBlog blog={el} />
          </Col>
        ))}
      </Row>
    </Card>
  );
}
