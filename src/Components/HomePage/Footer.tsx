
import { Container, Image, Row, Col } from "react-bootstrap";
import {
  appleStoreIcon,
  cliconIcon,
  playStoreIcon,
} from "../../icons/svgIcons";

export function Footer() {
  return (
    <Container className="footer">
      <Row className="p-3">
        <Col sm={3}>
          <Image src={cliconIcon} alt="" />
          <div className="link--contact mt-4">
            <p>Customer Supports:</p>
            <p>(629) 555-0129</p>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p>info@kinbo.com</p>
          </div>
        </Col>

        <Col sm={2}>
          <div className="link--title">
            <p>TOP CATEGORY</p>
          </div>
          <div className="topCategory--products">
            <p>Computer & Laptop</p>
            <p>SmartPhone</p>
            <p>Headphone</p>
            <p>&mdash; Accessories</p>
            <p>Camera & Photo</p>
            <p>TV & Homes</p>
            <p>Browse All Product &#8594;</p>
          </div>
        </Col>

        <Col sm={2}>
          <div className="link--title">
            <p>QUICK LINKS</p>
          </div>
          <div className="quicklinks--items d-flex flex-column justify-content-between">
            <p>Shop Product</p>
            <p>Shoping Cart</p>
            <p>Wishlist</p>
            <p>Compare</p>
            <p>Track Order</p>
            <p>Customer Help</p>
            <p>About Us</p>
          </div>
        </Col>

        <Col sm={2}>
          <div className="link--title">
            <p>DOWNLOAD APP</p>
          </div>

          <div className="link--app d-flex">
            <div className="link--icon">
              <Image src={playStoreIcon} alt="" />
            </div>

            <div className="link--content ">
              <span>Get it now</span>
              <p>Google Play</p>
            </div>
          </div>

          <div className="link--app d-flex ">
            <div className="link--icon ">
              <Image src={appleStoreIcon} alt="" />
            </div>

            <div className="link--content">
              <span>Get it now</span>
              <p>App Store</p>
            </div>
          </div>
        </Col>

        <Col>
          <div className="link--title">
            <p>POPULAR TAG</p>
          </div>
          <div className="link--button p-2 d-flex flex-wrap gap-2">
            <button>Game</button>
            <button>iPhone</button>
            <button>TV</button>
            <button>Asus Laptops</button>
            <button>Macbook</button>
            <button>SSD</button>
            <button>Graphics Card</button>
            <button>Power Bank </button>
            <button>Smart TV</button>
            <button>Speaker</button>
            <button>Tablet</button>
            <button>Microwave</button>
            <button>Samsung</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
