
import { Container } from "react-bootstrap";
import { ProductSellType } from "../../CommonFunctionalities/ProductSellType";

export function ProductSellTypeComponent() {
  const productSellTitle = [
    "FLASH SALE TODAY",
    "BEST SELLERS",
    "TOP RATED",
    "NEW ARRIVAL",
  ];
  return (
    <Container className="mt-5">
      <div className="d-flex gap-2">
        {productSellTitle.map((title) => {
          return <ProductSellType title={title} />;
        })}
      </div>
    </Container>
  );
}
