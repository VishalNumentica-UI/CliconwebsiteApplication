
import { Container, Image } from "react-bootstrap";
import "../../CssStyling/homePage.css"
import {
  amazonIcon,
  googleIcon,
  philipsIcon,
  samsungIcon,
  toshibaIcon,
} from "../../icons/svgIcons";
export function NewsLetter() {
  return (
    <Container className="newsLetter mt-4">
      <div className="text-center p-2 mx-auto">
        <p>Subscribe to our newsletter</p>

        <p>
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta.
        </p>

        <div className="navigation--searchTab">
          <form>
            <input type="search" placeholder="Email Address" />
            <button >Subscribe &#8594;</button>
          </form>
        </div>
        <div className="newsletter--Icons d-flex justify-content-center p-3 gap-3">
          <Image src={googleIcon} alt="" />
          <Image src={amazonIcon} alt="" />
          <Image src={philipsIcon} alt="" />
          <Image src={toshibaIcon} alt="" />
          <Image src={samsungIcon} alt="" />
        </div>
      </div>
    </Container>
  );
}
