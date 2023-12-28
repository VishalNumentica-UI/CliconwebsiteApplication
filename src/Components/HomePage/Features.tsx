
import { Container } from "react-bootstrap";
import {
  deliveryIcon,
  paymentIcon,
  returnIcon,
  supportIcon,
} from "../../icons/svgIcons.js";

import "../../CommonFunctionalities/CommonFunctionalities.css";

import { EachFeature } from "../../CommonFunctionalities/EachFeature.js";
export function Features() {
  const featuresDetails = [
    {
      image: deliveryIcon,
      title: "Fasted Delivery",
      description: "Delivery in 24/H",
    },
    {
      image: paymentIcon,
      title: "24 Hours Return",
      description: "100% money-back guarantee",
    },
    {
      image: returnIcon,
      title: "Secure Payment",
      description: "Your money is safe",
    },
    {
      image: supportIcon,
      title: "Support 24/7",
      description: "Live contact/message",
    },
  ];

  return (
    <Container className="mt-3">
      <div class="featureTab d-flex justify-content-between">
        {featuresDetails.map((createFeature) => {
          return <EachFeature feature={createFeature} />;
        })}
      </div>
    </Container>
  );
}
