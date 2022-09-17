import { Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import jsonBlog from "../Utilities/Context";

export default function Blogs() {
  const { blog, getBlogs } = useContext(jsonBlog);
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Row>
      {blog.map((el) => (
        <>
          <Col lg={8} md={12} xs={24}>
            <Blog key={el.id} blog={el} />
          </Col>
        </>
      ))}
    </Row>
  );
}
