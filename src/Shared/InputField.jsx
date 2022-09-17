import { Button, Card, Col, Form, Input, Row } from "antd";
import React from "react";

const { TextArea } = Input;
export default function InputField() {
  return (
    <>
      <Card
        style={{
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
          backgroundColor: "teal",
        }}
      >
        <Form>
          <Row>
            <Col span={24}>
              <Form.Item>
                <Input placeholder="Enter Blog Title"></Input>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <TextArea placeholder="Write your blog here" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Button>Add Blog</Button>
          </Row>
        </Form>
      </Card>
    </>
  );
}
