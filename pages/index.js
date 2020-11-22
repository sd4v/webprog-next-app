import { Row, Button, Col } from "react-bootstrap";
import Member, { occupation } from "../components/Member";

export default function Home() {
  return (
    <Row>
      <Col>
        <Member name="Ubul" occupation={occupation.cooker} />
      </Col>
      <Col>
        <Member name="Jolán" occupation={occupation.nurse} />
      </Col>
      <Col>
        <Member name="Jack" occupation={occupation.surgeon} />
      </Col>
    </Row>
  );
}
