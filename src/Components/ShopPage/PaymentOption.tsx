import { Form, Image } from "react-bootstrap";

interface propsType {
  image: string;
  title: string;
}

export function PaymentOption({ props }: { props: propsType }) {
  const { image, title } = props || [];
  return (
    <div className="d-flex flex-column align-items-center">
      <Image src={image} alt="" />
      <span>{title}</span>
      <Form.Check inline label="" name="group1" type="radio" />
    </div>
  );
}
