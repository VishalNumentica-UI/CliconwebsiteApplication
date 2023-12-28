
import { Image } from "react-bootstrap";
import "../CommonFunctionalities/CommonFunctionalities.css";

export function ProductSellTypeCard({ props }) {
  const { image, description, price } = props;
  return (
    <div>
      <div className="productDetail d-flex p-2">
        <div className="align-self-center">
          <Image src={image} alt="" className="productDetailImage" />
        </div>
        <div>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
