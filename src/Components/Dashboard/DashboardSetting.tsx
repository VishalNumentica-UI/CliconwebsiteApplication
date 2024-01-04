import { Container, Row, Col, Image, Form, InputGroup } from "react-bootstrap";
import { DashboardNav } from "../../CommonFunctionalities/DashboardNav";
import { backgroundAvator } from "../../resources/images";
import "../Dashboard/dashboard.css";
import { BillingAddress } from "../Dashboard/BillingAddress";
import { showPassword } from "../../icons/svgIcons";
import { SaveChangesButton } from "./SaveChangesButton";
export function DashboardSetting() {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <DashboardNav />
        </Col>
        <Col>
          <Row className="accountSetting p-2 mb-2">
            <Col md={3}>
              <Image src={backgroundAvator} alt="" />
            </Col>
            <Col>
              <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Display name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Display name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Username</Form.Label>
                  <Form.Control required type="text" placeholder="User name" />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Kevin Gilbert"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="text" placeholder="email" />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Secondary Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Secondary Email"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="+1-202-555-0118"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Country/Region</Form.Label>
                  <Form.Select>
                    <option>Bangladesh</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                  <Form.Label>States</Form.Label>
                  <Form.Select>
                    <option>Dhaka</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control required type="text" placeholder="1207" />
                </Form.Group>
              </Row>

              <SaveChangesButton title={"SAVE CHANGES"} />
            </Col>
          </Row>
          <Row>
            <Col>
              <BillingAddress />
            </Col>
            <Col>
              <BillingAddress />
            </Col>
          </Row>

          <Row className="accountSetting mb-2">
            <div>CHANGE PASSWORD</div>
            <div className="form-group mt-2">
              <div className="d-flex ">
                <label>Current Password</label>
              </div>
              <InputGroup className="mb-2 mt-2">
                <Form.Control aria-label="" />
                <InputGroup.Text>
                  {" "}
                  <Image src={showPassword} alt="" />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="form-group mt-2">
              <div className="d-flex ">
                <label>Password</label>
              </div>
              <InputGroup className="mb-2 mt-2">
                <Form.Control aria-label="" placeholder="8+ characters" />
                <InputGroup.Text>
                  {" "}
                  <Image src={showPassword} alt="" />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="form-group mt-2">
              <div className="d-flex ">
                <label>Confirm Password</label>
              </div>
              <InputGroup className="mb-3 mt-2">
                <Form.Control aria-label="" />
                <InputGroup.Text>
                  {" "}
                  <Image src={showPassword} alt="" />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <SaveChangesButton title={"CHANGE PASSWORD"} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
