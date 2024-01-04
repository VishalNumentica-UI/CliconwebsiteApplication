import { Container } from "react-bootstrap";
import { AuthenticationButton } from "../../CommonFunctionalities/AuthenticationButton";

function EmailVerification() {
  return (
    <div className="signIn p-2">
      <div className="">
        <h4 className="text-center">Verify Your Email Address</h4>
        <p className="text-center text-muted">
          Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu,
          tristique a eu in diam.
        </p>
      </div>
      <Container>
        <div className="d-flex flex-column gap-2">
          <div className="form-group mt-3">
            <div className="d-flex justify-content-between">
              <label>Verification Code</label>
              <label>Resend Code</label>
            </div>
            <input
              type="verifyMe"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          <AuthenticationButton content={"VERIFY ME"} />
        </div>
      </Container>
    </div>
  );
}

export default EmailVerification;
