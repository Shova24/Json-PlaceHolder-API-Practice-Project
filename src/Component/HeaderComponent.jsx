import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Menu,
  Row,
  Typography,
} from "antd";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../Shared/InputField";
import Blog from "./Blog";
import jsonContext from "../Utilities/Context";

const { TextArea } = Input;
const { Title, Text } = Typography;
export default function HeaderComponent() {
  const { blog, setBlog } = useContext(jsonContext);
  console.log(blog);

  return (
    <>
      <Card
        style={{
          borderRadius: "20px",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "teal",
        }}
      >
        <Row justify="center">
          <Title level={2}>Blog - Json placeholder API</Title>
        </Row>
        <Divider orientation="center">json placeholder</Divider>
      </Card>
      <Row justify="center">
        <Menu mode="horizontal">
          <Menu.Item key={1}>
            <Link to={"/"}>Blogs</Link>
          </Menu.Item>
          <Menu.Item key={2}>
            <Link to={"/users"}>Users</Link>
          </Menu.Item>
        </Menu>
      </Row>

      {/* <InputField />
      <Row>
        {blog.map((el) => (
          <>
            <Col lg={8} md={12} xs={24}>
              <Blog key={el.id} blog={el} />
            </Col>
          </>
        ))}
      </Row> */}
    </>
  );
}
