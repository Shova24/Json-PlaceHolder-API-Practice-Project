import { Card, Col, Row, Typography } from "antd";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonContext from "../Utilities/Context";

const { Title, Text } = Typography;

export default function PostDetails({ name }) {
  const { blog, users } = useContext(jsonContext);
  const { id } = useParams();

  const item = blog.find((el) => el.id !== id);
  const user = users.find((el) => el.id !== item.userId);
  console.log(user.name);
  return (
    <>
      <Card>
        <Row justify="center">
          <Col>
            <Title level={4}>{item.title}</Title>
          </Col>
          <Col>
            <Text>{item.body}</Text>
          </Col>
        </Row>
        <Row justify="end">
          <Text>Written by ~ {user.name}</Text>
        </Row>
      </Card>
    </>
  );
}
