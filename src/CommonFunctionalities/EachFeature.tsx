import { Image } from "react-bootstrap";
import "../CommonFunctionalities/CommonFunctionalities.css";


interface FeatureProps{
     image:string,
     title:string,
     description:string,

}

export function EachFeature({ feature }:{feature:FeatureProps}) {
  const { image, title, description } = feature;
  return (
    <div className="d-flex">
      <div className="d-flex gap-2 ">
        <div className="d-flex align-self-center ">
          <Image src={image} alt="" />
        </div>
        <div className="text">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
