
import { Image, Container, Row, Col } from "react-bootstrap";
import { alexa, poco } from "../../resources/images";
import { ButtonCreation } from "../../CommonFunctionalities/ButtonCreation";
export function NewProductsBanner() {
  return (
    <div>
      <Container className="mt-3">
        <Row className="advertisement_Seperator gap-4">
          <Col className="advertisement__offerProduct1">
            <Row>
              <Col
                className="adOfferProduct1--content align-self-center p-3"
                sm={6}
              >
                <span>INTRODUCING</span>
                <h4>New Apple Homepod Mini</h4>
                <p>
                  Jam-packed with innovation, HomePod mini delivers
                  unexpectedly.
                </p>
                <ButtonCreation />
              </Col>
              <Col className="offerProduct1-image align-self-center" sm={6}>
                <Image src={alexa} alt="" fluid />
              </Col>
            </Row>
          </Col>

          <Col className="advertisement__offerProduct2">
            <Row className="img_content2 align-self-center p-3">
              <Col className="offerProduct2--content" sm={6}>
                <span>INTRODUCING NEW</span>
                <h4>Xiaomi Mi 11 Ultra 12GB+256GB</h4>
                <p>
                  *Data provided by internal laboratories. Industry measurment.
                </p>
                <ButtonCreation />
              </Col>
              <Col className="offerProduct2-image align-self-center" sm={6}>
                <Image src={poco} alt="" fluid />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
