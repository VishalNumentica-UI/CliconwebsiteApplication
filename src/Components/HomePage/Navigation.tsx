import { Container, Image } from "react-bootstrap";
import "../../CssStyling/homePage.css";
import { NavigationTabSocialMedia } from "../../CommonFunctionalities/NavigationTabSocialMedia";
import {
  NavcliconwebsiteIcon,
  cartIcon,
  favIcon,
  profileIcon,
} from "../../icons/svgIcons";

export function Navigation() {
  return (
    <Container className="socialMediaLinks">
      <NavigationTabSocialMedia />
      <div>
        <section className="navigation d-flex justify-content-between p-1">
          <Image src={NavcliconwebsiteIcon} alt="" />

          <div className="navigation--searchTab align-self-center">
            <form>
              <input type="search" placeholder="Search for anything..." />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="navigation__widgets d-flex gap-2 align-self-center">
            <Image src={cartIcon} alt="" />
            <Image src={favIcon} alt="" />
            <Image src={profileIcon} alt="" />
          </div>
        </section>
      </div>
    </Container>
  );
}
