import { Container, Form, Image, InputGroup } from "react-bootstrap";
import {
  appleSignInIcon,
  googleSignInIcon,
  showPassword,
} from "../../icons/svgIcons";
import { AuthenticationButton } from "../../CommonFunctionalities/AuthenticationButton";

export function SignUp() {
  return (
    <div
      className="d-flex flex-column 
   signIn
   p-2 "
    >
      <div className="d-flex justify-content-between">
        <h4>Sign In</h4>
        <h4>Sign Up</h4>
      </div>
      <Container>
        <div className="form-group mt-3">
          <label>Name</label>
          <input type="name" className="form-control mt-1" placeholder="" />
        </div>

        <div className="form-group mt-3">
          <div>
            <label>Email Address</label>
          </div>
          <InputGroup className="mb-3 mt-2">
            <Form.Control aria-label="" />
          </InputGroup>
        </div>
        <div className="form-group mt-3">
          <div className="d-flex ">
            <label>Password</label>
          </div>
          <InputGroup className="mb-3 mt-2">
            <Form.Control aria-label="" placeholder="8+ characters" />
            <InputGroup.Text>
              {" "}
              <Image src={showPassword} alt="" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="form-group mt-3">
          <div className="d-flex ">
            <label>Confirm Password</label>
          </div>
          <InputGroup className="mb-3 mt-2">
            <Form.Control aria-label="" />
            <InputGroup.Text>
              {" "}
              <Image src={showPassword} alt="" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <AuthenticationButton content={"SIGN UP"} />
        <div className="d-flex flex-column gap-2 mt-2">
          <div className="d-flex justify-content-center gap-5 p-1 login-sigin-background">
            <Image src={googleSignInIcon} alt="" />
            <div>Login with Google</div>
          </div>
          <div className="d-flex justify-content-center gap-5 p-1  login-sigin-background">
            <Image src={appleSignInIcon} alt="" />
            <div>Login with Apple</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
