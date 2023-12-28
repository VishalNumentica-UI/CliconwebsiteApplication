import "../../CssStyling/homePage.css";
import { Container } from "react-bootstrap";
import { ButtonCreation } from "../../CommonFunctionalities/ButtonCreation";

export function AdPopup() {
  return (
    <Container className="adPopup d-flex justify-content-between p-2">
      <div className="advertisement__blackFriday align-self-center d-flex gap-2">
        <span className="ad_alignText">Black</span>
        <span>Friday</span>
      </div>

      <div className="advertisement__offers align-self-center d-flex gap-2">
        <span className="align-self-center">Up to</span>
        <span className="adOffer--bold">59%</span>
        <span className="align-self-center">OFF</span>
      </div>

      <ButtonCreation />
    </Container>
  );
}
