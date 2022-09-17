import { Card, Typography, Divider, Row, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
export default function Blog({ blog, name }) {
  console.log(name);
  return (
    <Card style={{ borderRadius: "25px", height: "200px" }}>
      <Title
        level={4}
        style={{
          color: "teal",
          height: "30px",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          texOverflow: "ellipsis",
        }}
      >
        {blog.body}
      </Title>
      <Divider>By {name}</Divider>
      <Row justify="end">
        <Link to={`/${blog.id}`}>
          <Button shape="round">View Details</Button>
        </Link>
      </Row>
    </Card>
  );
}
