import { Button, Card, Col, Divider, Form, Input, Row, Typography } from "antd";
import "antd/dist/antd.css";
import "./App.css";

const { TextArea } = Input;
const { Title, Text } = Typography;

function App() {
  return (
    <>
      <Row justify="center" style={{ paddingTop: "10px" }}>
        <Title level={2}>Blog with API</Title>
      </Row>

      <Divider orientation="center">json placeholder</Divider>
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
      <Row>
        <Col>cards</Col>
        <Col>cards</Col>
        <Col>cards</Col>
      </Row>
    </>
  );
}

export default App;
