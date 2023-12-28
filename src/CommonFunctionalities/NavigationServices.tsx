
import { Container, Image } from "react-bootstrap";
import {
  compareIcon,
  customerSupportIcon,
  dialIcon,
  location,
  needHelpIcon,
} from "../icons/svgIcons";
export function NavigationServices() {
  return (
    <Container className="d-flex justify-content-between p-2">
      <div className="essential d-flex gap-2">
        <select>
          <option value="category">All Category</option>
          <option value="">Computer & Laptop</option>
          <option value="">Computer Accessories</option>
          <option value="">SmartPhone</option>
          <option value="">Headphone</option>
          <option value="">Mobile Accessories</option>
          <option value="">Gaming Console</option>
          <option value="">Camera & Photo</option>
          <option value="">TV & Homes Appliances</option>
          <option value="">Watchs & Accessories</option>
          <option value="">GPS & Navigation</option>
          <option value="">Warable Technology</option>
        </select>
        <div>
          <Image src={location} alt="" />
          <span>Track Order</span>
        </div>
        <div>
          <Image src={compareIcon} alt="" />
          <span>Compare</span>
        </div>
        <div>
          <Image src={customerSupportIcon} alt="" />
          <span>Customer Support</span>
        </div>
        <div>
          <Image src={needHelpIcon} alt="" />
          <span>Need Help</span>
        </div>
      </div>
      <div className="essential--dial">
        <Image src={dialIcon} alt="" />
        <span>+1-202-555-0104</span>
      </div>
    </Container>
  );
}
