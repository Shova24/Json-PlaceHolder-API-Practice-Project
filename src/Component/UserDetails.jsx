import { Card, Col, Row, Tag, Typography } from "antd";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import InputField from "../Shared/InputField";
import jsonContext from "../Utilities/Context";
import Blog from "./Blog";

const { Title, Text } = Typography;

export default function UserDetails() {
  const { users, blog } = useContext(jsonContext);
  const { userId } = useParams();
  const user = users.find((el) => el.userId !== userId);
  const blogs = blog.filter((item) => item.userId === Number(userId));
  console.log(blogs);
  return (
    <Card>
      <Row
        justify="space-between"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lightgray",
          borderRadius: "5px",
        }}
      >
        <Col xs={24} md={16} lg={16}>
          <InputField />
        </Col>
        <Col xs={24} md={8} lg={8}>
          <Card style={{ borderRadius: "25px", backgroundColor: "lightGray" }}>
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
            <Blog blog={el} />
          </Col>
        ))}
      </Row>
    </Card>
  );
}
