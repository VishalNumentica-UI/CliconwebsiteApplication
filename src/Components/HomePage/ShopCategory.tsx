
import { Container } from "react-bootstrap";
import {
  macMonitor,
  drone,
  wirelessHeadphone,
  keyboard,
  canonCamera,
  sonyTv,
} from "../../resources/images";
import { ProductCategory } from "../../CommonFunctionalities/ProductCategory";
export function ShopCategory() {
  const categoryList = [
    {
      image: macMonitor,
      title: "Computer & Laptop",
    },
    {
      image: drone,
      title: "SmartPhone",
    },
    {
      image: wirelessHeadphone,
      title: "Headphones",
    },
    {
      image: keyboard,
      title: "SmartPhone",
    },
    {
      image: canonCamera,
      title: "Computer & Laptop",
    },
    {
      image: sonyTv,
      title: "SmartPhone",
    },
  ];

  return (
    <Container className="mt-4">
      <div className="text-center fs-5">Shop with Categorys</div>
      <div className="d-flex justify-content-between mt-3">
        {categoryList.map((eachproductCategory) => {
          return <ProductCategory productItem={eachproductCategory} />;
        })}
      </div>
    </Container>
  );
}
