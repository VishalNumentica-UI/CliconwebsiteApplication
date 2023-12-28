
import { mac } from "../../resources/images";
import { Image, Container, Row, Col } from "react-bootstrap";
import { ButtonCreation } from "../../CommonFunctionalities/ButtonCreation";

export function AdSpecialBanner() {
  return (
    <Container>
      <Row className="specialOffer mt-5">
        <Col className="special__details  align-self-center" sm={7}>
          <span>SAVE UP TO $200.00</span>
          <h2>Macbook Pro</h2>
          <h5>Apple M1 Max Chip. 32GB Unified 1TB SSD Storage</h5>
          <ButtonCreation />
        </Col>
        <Col className="specialOffer--image align-self-center" sm={4}>
          <Image src={mac} alt="" fluid />
        </Col>
      </Row>
    </Container>
  );
}

