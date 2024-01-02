import { Container, Form, Image, InputGroup } from "react-bootstrap";
import "../../Components/Authentication/authentication.css";
import {
  appleSignInIcon,
  googleSignInIcon,
  showPassword,
} from "../../icons/svgIcons";

import { useState } from "react";
import { account } from "../../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const signUpUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const promise = account.create(uuidv4(), user.email, user.password);
    promise.then(
      function (response) {
        console.log(response);
        navigate("/");
      },
      function (error) {
        console.log(error);
      }
    );
  };

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
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>

        <div className="form-group mt-3">
          <div className="d-flex justify-content-between">
            <label>Password</label>
            <label>Forget Password</label>
          </div>
          <InputGroup className="mb-3 mt-2">
            <Form.Control
              aria-label=""
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
            <InputGroup.Text>
              {" "}
              <Image src={showPassword} alt="" />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-primary " onClick={signUpUser}>
            SIGN IN
          </button>
        </div>
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
