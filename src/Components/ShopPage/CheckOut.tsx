import { Row, Col, Form, Container, Image } from "react-bootstrap";
import { CheckBox } from "../../CommonFunctionalities/CheckBox";
import {
  amazon,
  cashOnDelivery,
  creditCard,
  paypal,
  venmo,
} from "../../icons/svgIcons";
import { PaymentOption } from "./PaymentOption";
import { boltHeadset, sonyTv } from "../../resources/images";
import { AuthenticationButton } from "../../CommonFunctionalities/AuthenticationButton";

export function CheckOut() {
  const paymentOption = [
    {
      image: cashOnDelivery,
      title: "Cash On Delivery",
    },
    {
      image: venmo,
      title: "Venmo",
    },
    {
      image: paypal,
      title: "Paypal",
    },
    {
      image: amazon,
      title: "Amazon Pay",
    },
    {
      image: creditCard,
      title: "Debit/Credit Card",
    },
  ];
  return (
    <Container>
      <Row className="mt-4">
        <Col md={9}>
          <div>Billing Information</div>
          <Row className="mb-3 mt-2">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>User name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label></Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                className="mt-2"
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>
                Company Name <span className="text-muted">(Optional)</span>
              </Form.Label>
              <Form.Control required type="text" placeholder="User name" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Label>Address</Form.Label>
              <Form.Control required type="text" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>City</Form.Label>
              <Form.Select>
                <option>Country</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Region/State</Form.Label>
              <Form.Select>
                <option>Dhaka</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>City</Form.Label>
              <Form.Select>
                <option>Chennai</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control required type="text" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="text" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control required type="text" placeholder="" />
            </Form.Group>
          </Row>
          <CheckBox title={"Ship into different address"} />

          <Row className="mt-2">
            <div>Payment Option</div>
            <div className="d-flex justify-content-between p-2 paymentOption gap-2 mt-2">
              {paymentOption.map((option) => {
                return <PaymentOption props={option} />;
              })}
            </div>
          </Row>
          <Row className="mt-4">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control required type="text" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mt-2">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Label>Card Number</Form.Label>
              <Form.Control required type="text" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mt-2 mb-2">
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Expire Date</Form.Label>
              <Form.Control required type="text" placeholder="DD/YY" />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>CVC</Form.Label>
              <Form.Control required type="text" placeholder="" />
            </Form.Group>
          </Row>

          <div className="mt-3">
            <h5>Additional Information</h5>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Order Notes (Optional)</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
        </Col>
        <Col className="orderSummary">
          <h5>Order Summery</h5>
          <div className="d-flex gap-2">
            <Image src={sonyTv} alt="" width={"20%"} />
            <div>
              <p>Canon EOS 1500D DSLR Camera Body+ 18-...</p>
              <p>1 x $70 </p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <Image src={boltHeadset} alt="" width={"20%"} />
            <div>
              <p>Wired Over-Ear Gaming Headphones with U...</p>
              <p>3 x $250 </p>
            </div>
          </div>
          <AuthenticationButton content={"PLACE ORDER"} />
        </Col>
      </Row>
    </Container>
  );
}
