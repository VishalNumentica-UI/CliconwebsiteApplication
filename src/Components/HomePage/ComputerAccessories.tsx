
import NavigationTab from "../../CommonFunctionalities/NavigationTab";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ProductCard } from "../../CommonFunctionalities/CardCreation";
import { alexa, wirelessHeadphone } from "../../resources/images";
import { ButtonCreation } from "../../CommonFunctionalities/ButtonCreation";
export function ComputerAccessories() {
  const productDetail = [
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable Gbps,(18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
  ];
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={10}>
          <NavigationTab />

          <div className="ProductItems gap-1">
            {productDetail.map((item) => {
              return <ProductCard props={item} />;
            })}
          </div>
        </Col>
        <Col sm={2}>
          <div className="computerAccessories--offer1  text-center p-2">
            <Image src={wirelessHeadphone} alt="" />
            <h4> Xiaomi True Wireless Earbuds</h4>
            <p>
              Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
            </p>
            <p>
              Only for:<span className="priceTag">$299 USD</span>
            </p>
            <ButtonCreation />
          </div>
          <div className="computerAccessories--offer2 text-center p-3 mt-4">
            <p>SUMMER SALES</p>
            <h4>37% DISCOUNT</h4>
            <p>
              only for <span className="highlight">SmartPhone</span> product.
            </p>
            <ButtonCreation />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
