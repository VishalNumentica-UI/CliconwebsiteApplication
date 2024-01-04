import { Container, Row, Form, Col } from "react-bootstrap";
import { SaveChangesButton } from "./SaveChangesButton";

export function BillingAddress() {
  return (
    <div className="billingAddress mb-2">
      <div className="p-1">BILLING ADDRESS</div>
      <Container className="p-3">
        <Row className="mb-2">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Display name</Form.Label>
            <Form.Control required type="text" placeholder="Display name" />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" placeholder="User name" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Company Name (Optional)</Form.Label>
            <Form.Control required type="text" placeholder="" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Country</Form.Label>
            <Form.Control required type="text" placeholder="Bangladesh" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>City</Form.Label>
            <Form.Select>
              <option>Dhaka</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control required type="text" placeholder="1207" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="kevin12345@gmail.com"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control required type="text" placeholder="+1-202-555-0118" />
          </Form.Group>
        </Row>
        <SaveChangesButton title={"SAVE CHANGES"} />
      </Container>
    </div>
  );
}
