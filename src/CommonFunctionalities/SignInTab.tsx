import { Container, Image } from "react-bootstrap";
import "../CssStyling/homePage.css";
import { appleSignInIcon, googleSignInIcon } from "../icons/svgIcons";
export function SignInTab() {
  return (
    <div className="d-flex flex-column signInTab mt-4  ">
      <div className="d-flex justify-content-between">
        <h4>Sign In</h4>
        <h4>Sign Up</h4>
      </div>
      <Container>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <div className="d-flex justify-content-between">
            <label>Password</label>
            <label>Forget Password</label>
          </div>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-primary">SIGN IN</button>
        </div>
        <div className="d-flex justify-content-between p-1">
          <Image src={googleSignInIcon} alt="" />
          <div>Login with Google</div>
        </div>
        <div className="d-flex gap-4 p-1 justify-content-between">
          <Image src={appleSignInIcon} alt="" />
          <div>Login with Apple</div>
        </div>
      </Container>
    </div>
  );
}
