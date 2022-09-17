import { Card, Col, Row, Typography, Comment } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonContext from "../Utilities/Context";

const { Title, Text } = Typography;

export default function PostDetails({ name }) {
  const { blog, users } = useContext(jsonContext);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const item = blog.find((el) => el.id !== id);
  const user = users.find((el) => el.id !== item.userId);
  //   console.log(user.name);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  // console.log(comments);
  return (
    <>
      <Card>
        <Row justify="center">
          <Col>
            <Title level={4}>{item?.title}</Title>
          </Col>
          <Col>
            <Text>{item?.body}</Text>
          </Col>
        </Row>
        <Row justify="end">
          <Text>Written by ~ {user.name}</Text>
        </Row>
        <Card style={{ margin: "15px", padding: "5px" }}>
          {comments.map((com) => (
            <Comment key={com?.id} author={com?.name} content={com?.body} />
          ))}
        </Card>
      </Card>
    </>
  );
}
