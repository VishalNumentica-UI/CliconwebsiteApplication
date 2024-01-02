import { Container, Form, InputGroup, Image } from "react-bootstrap";
import { showPassword } from "../../icons/svgIcons";
import { AuthenticationButton } from "../../CommonFunctionalities/AuthenticationButton";
export function ResetPassword() {
  return (
    <div className="signIn p-2">
      <div className="">
        <h4 className="text-center">Forget Password</h4>
        <p className="text-center text-muted">
          Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce
          lorem nunc, fringilla sit amet nunc.
        </p>
      </div>
      <Container>
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
        <AuthenticationButton content={"Reset Password"} />
      </Container>
    </div>
  );
}
