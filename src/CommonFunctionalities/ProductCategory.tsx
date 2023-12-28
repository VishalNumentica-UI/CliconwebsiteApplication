
import { Image } from "react-bootstrap";
import "../CommonFunctionalities/CommonFunctionalities.css";

export function ProductCategory({ productItem }) {
  const { image, title } = productItem;
  return (
    <div className="EachProductCategory text-center p-2">
      <Image src={image} alt="" fluid />
      <p>{title}</p>
    </div>
  );
}
