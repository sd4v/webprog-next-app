import { Row, Button, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Row>
      <Col>
        <p>Hello</p>
      </Col>
      <Col xs={12}>
        <Button>Click me</Button>
      </Col>
    </Row>
  );
}
