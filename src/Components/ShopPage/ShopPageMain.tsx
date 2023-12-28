
import { ProductCategory } from "./ProductCategory";
import { ProductList } from "./ProductList";
import { Container, Row, Col } from "react-bootstrap";

export function ShopPageMain() {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <ProductCategory />
        </Col>
        <Col sm={9}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}
