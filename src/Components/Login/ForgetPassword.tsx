import { AuthenticationButton } from "../../CommonFunctionalities/AuthenticationButton";

import "../../Components/Authentication/authentication.css";
import { Container } from "react-bootstrap";
export function ForgetPassword() {
  return (
    <div className="signIn p-2">
      <div className="">
        <h4 className="text-center">Forget Password</h4>
        <p className="text-center text-muted">
          Enter the email address or mobile phone number associated with your
          Clicon account.
        </p>
      </div>
      <Container>
        <div className="d-flex flex-column gap-2">
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <AuthenticationButton content={"Send Code"} />

          <p>
            Already have account? <span>Sign In </span>
          </p>
          <p>
            Don’t have account? <span>Sign Up </span>
          </p>
          <div>
            You may contact <span> Customer Service </span> for help restoring
            access to your account.
          </div>
        </div>
      </Container>
    </div>
  );
}
