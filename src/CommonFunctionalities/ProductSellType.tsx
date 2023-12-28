
import { alexa } from "../resources/images";
import { ProductSellTypeCard } from "./ProductSellTypeCard";

export function ProductSellType(title) {
  const productSellTypeDetail = [
    {
      image: alexa,
      description: "Simple Mobile 4G LTE Prepaid Smartphone",
      price: "$250",
    },
    {
      image: alexa,
      description: "Simple Mobile 4G LTE Prepaid Smartphone",
      price: "$250",
    },
    {
      image: alexa,
      description: "Simple Mobile 4G LTE Prepaid Smartphone",
      price: "$250",
    },
  ];
  return (
    <div className="d-flex flex-column gap-2">
      <h5>{title.title}</h5>
      <div className="d-flex flex-column gap-2">
        {productSellTypeDetail.map((item) => {
          return <ProductSellTypeCard props={item} />;
        })}
      </div>
    </div>
  );
}
