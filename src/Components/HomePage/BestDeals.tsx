import { Container, Image, Row, Col } from "react-bootstrap";
import BrowseProductNavigator from "../../CommonFunctionalities/BrowseProductNavigator.js";
import { playstation1 } from "../../resources/images.js";
import "../../CssStyling/homePage.css";
import { alexa } from "../../resources/images.js";
import { ProductCard } from "../../CommonFunctionalities/CardCreation.js";

import { addToCard, cartFavICon, rating, watch } from "../../icons/svgIcons.js";
export function BestDeals() {
  const productDetail = [
    {
      image:alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image:alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image:alexa,
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
      image:alexa,
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
      image:alexa,
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
    <div>
      <Container className="mt-3">
        <div>
          <section className="bestIdeal d-flex justify-content-between ">
            <div className="bestIdeal__title d-flex justify-content-between ">
              <h4>Best deals</h4>
              <p className="p-1">Deals ends in</p>

              <div className="timer p-1 align-item-center mt-1">
                <span className="hour">00</span>
                <span>:</span>
                <span className="minute">00</span>
                <span>:</span>
                <span className="second">00</span>
              </div>
            </div>
            <BrowseProductNavigator />
          </section>
          <Row>
            <Col
              xl={3}
              lg={4}
              className="exploreProduct position-relative d-flex flex-column justify-content-between p-2"
            >
              <div className="offersPercentage--image">
                <Image src={playstation1} alt="" fluid />
              </div>
              <div className="customerRating">
                <Image src={rating} alt="" />
                <Image src={rating} alt="" />
                <Image src={rating} alt="" />
                <Image src={rating} alt="" />
                <Image src={rating} alt="" />
                <span className="text-muted">(52,677)</span>
              </div>

              <h5>
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Version
              </h5>

              <span className="text-info">
                <span className="text-muted">$865.99</span> $442.12
              </span>

              <p>
                Games built using the Xbox Series X|S development kit showcase
                unparalleled load times, visuals.
              </p>

              <div className="addToCart--button d-flex justify-content-center  align-self-center gap-2">
                <div className="btn--add_cart align-self-center p-1">
                  <Image src={cartFavICon} alt="" />
                </div>
                <div className="btn--cart d-flex p-1 gap-2 ">
                  <Image src={addToCard} alt="" />
                  <div>ADD TO CARD</div>
                </div>
                <div className="btn--add_cart align-self-center p-1">
                  <Image src={watch} alt="" />
                </div>
              </div>
            </Col>
            <Col xl={9} lg={8} className="df">
              <div className="ProductItems">
                {productDetail.map((item) => {
                  return <ProductCard props={item} />;
                })}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
  }