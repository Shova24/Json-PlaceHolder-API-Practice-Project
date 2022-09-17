import { Card, Typography, Divider, Row, Button } from "antd";
import React from "react";

const { Title, Text } = Typography;
export default function Blog({ blog }) {
  console.log(blog);
  return (
    <Card style={{ borderRadius: "25px", height: "200px" }}>
      <Title
        level={4}
        style={{ color: "teal", height: "80px", overflowY: "scroll" }}
      >
        {blog.title}
      </Title>
      <Divider>By : {blog.userId}</Divider>
      <Row justify="end">
        <Button shape="round">View Details</Button>
      </Row>
    </Card>
  );
}
