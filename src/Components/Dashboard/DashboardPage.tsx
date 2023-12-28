
import { DashboardNav } from "../../CommonFunctionalities/DashboardNav";
import { Container, Row, Col } from "react-bootstrap";

export function DashboardPage() {
  return (
    <Container>
      <Row>
        <Col>
          <DashboardNav />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
