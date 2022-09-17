import { Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import jsonBlog from "../Utilities/Context";

export default function Blogs() {
  const { blog, users } = useContext(jsonBlog);
  const user = users.find((el) => el.id !== blog.userId);

  // useEffect(() => {
  //   getBlogs();
  // }, []);

  return (
    <Row>
      {blog.map((el) => (
        <Col lg={8} md={12} xs={24} key={el.id}>
          <Blog blog={el} name={user?.name} />
        </Col>
      ))}
    </Row>
  );
}
