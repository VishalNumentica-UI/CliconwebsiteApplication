import { Image, Container, Row, Col } from "react-bootstrap";
import { gadgets } from "../../resources/images";
import NavigationTab from "../../CommonFunctionalities/NavigationTab";
import { ProductCard } from "../../CommonFunctionalities/CardCreation";
import { alexa } from "../../resources/images";
import { useEffect, useState } from "react";

export function FeatureProduct() {
  const [resolution, setResolution] = useState(0);
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
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
  ];

  const isMobile: boolean = resolution >= 320 && resolution <= 480;
  const isTablet: boolean = resolution >= 768 && resolution <= 1024;
  const initial = isMobile
    ? productDetail.slice(0, 4).map((e) => {
        return e;
      })
    : isTablet
    ? productDetail.slice(0, 6).map((e) => {
        return e;
      })
    : productDetail.slice(0, 8).map((e) => {
        return e;
      });

  useEffect(() => {
    const handleResize = () => {
      setResolution(window.outerWidth);
      console.log(window.outerWidth);
    };
    window.addEventListener("resize", handleResize);
  });

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col xl={3} lg={4}>
            <div className="discountTab d-flex flex-column justify-content-between">
              <p>COMPUTER & ACCESSORIES</p>
              <h3>32% Discount</h3>
              <span>For all ellectronics products</span>
              <p>
                Offers ends in:{" "}
                <span className="buttonEnabler">ENDS OF CHRISTMAS</span>
              </p>
              <button className="btn">
                SHOP NOW &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </button>
              <div>
                <Image src={gadgets} alt="" fluid />
              </div>
            </div>
          </Col>

          <Col xl={9} lg={8} className="df">
            <NavigationTab />
            <div className="ProductItems gap-1">
              {initial.map((item) => {
                return <ProductCard props={item} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
