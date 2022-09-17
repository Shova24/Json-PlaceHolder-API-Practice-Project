import { Button, Card, Col, Divider, Form, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import InputField from "../Shared/InputField";
import Blog from "./Blog";

const { TextArea } = Input;
const { Title, Text } = Typography;
export default function HeaderComponent() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, []);

  console.log(blog);
  return (
    <>
      <Row justify="center" style={{ paddingTop: "10px" }}>
        <Title level={2}>Blog with API</Title>
      </Row>

      <Divider orientation="center">json placeholder</Divider>
      <InputField />
      <Row>
        {blog.map((el) => (
          <>
            <Col lg={8} md={12} xs={24}>
              <Blog key={el.id} blog={el} />
            </Col>
          </>
        ))}
      </Row>
    </>
  );
}
