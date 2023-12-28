import { Row, Col, Container, Image } from "react-bootstrap";
import "../../CssStyling/homePage.css";
import { playstation, poco, realmeHeadset } from "../../resources/images";
import { ButtonCreation } from "../../CommonFunctionalities/ButtonCreation";

export function Hero() {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={7} xl={8} className="productSlider ">
          <div className="d-flex">
            <div className=" align-self-center p-2">
              <span className="text-color">-THE BEST PLACE TO PLAY</span>
              <h1>Xbox Consoles</h1>
              <p>
                Save up to 50% on select Xbox games. Get 3 months of PC Game
                Pass for $2 USD.
              </p>
              <ButtonCreation color={"orange"} />
            </div>
            <div className="productImage  position-relative p-2 align-self-center">
              <div className="circle position-absolute">
                <span>$299</span>
              </div>
              <Image src={playstation} alt="" fluid />
            </div>
          </div>
        </Col>

        <Col md={5} xl={4}>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex offerProduct1">
              <div className="offerProduct1--content align-self-center p-2">
                <p>SUMMER SALES</p>
                <h3>New Google Pixel 6 Pro</h3>
                <ButtonCreation color={"orange"} />
              </div>
              <div className="offerProduct1--img position-relative p-2">
                <div class="offerTag position-absolute">
                  <span>29% OFF</span>
                </div>
                <Image src={poco} alt="" fluid />
              </div>
            </div>

            <div className="d-flex offerProduct2">
              <div className="offerProduct2--image">
                <Image src={realmeHeadset} alt="" />
              </div>
              <div className="offerProduct2--Content p-2">
                <h3>Xiaomi FlipBuds Pro</h3>
                <span>$299 USD</span>
                <ButtonCreation color={"orange"} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
