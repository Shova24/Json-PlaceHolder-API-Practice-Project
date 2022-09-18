import { Button, Card, Col, Form, Input, Row } from "antd";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import jsonContext from "../Utilities/Context";
const { TextArea } = Input;
export default function UpdateInputField() {
  const { userId } = useParams();
  const { blog } = useContext(jsonContext);
  console.log(userId);
  const [form] = Form.useForm();
  const updateBlog = () => {
    form.setFieldsValue = {
      title: "set something meaningless",
      body: "set something meaningless",
    };
    console.log("edit  : ", form);
  };
  return (
    <>
      <Card
        style={{
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
          backgroundColor: "teal",
        }}>
        <Form form={form} onFinish={updateBlog}>
          <Row>
            <Col span={24}>
              <Form.Item name="title">
                <Input placeholder="Enter Blog Title"></Input>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="body">
                <TextArea placeholder="Write your blog here" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Button htmlType="submit">Add Blog</Button>
          </Row>
        </Form>
      </Card>
    </>
  );
}
