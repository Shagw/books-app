import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { userSignup } from "../../redux/actions/login";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { loginData = {} } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isSession = false } = loginData;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignup(name, email, password));
  };

  useEffect(() => {
    if (isSession) {
      navigate("/homepage");
    }
  }, [isSession]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <Card className="mt-4">
            <CardTitle style={{ textAlign: "center", fontSize: "30px" }}>
              Sign Up
            </CardTitle>
            <Form className="px-4" onSubmit={submitHandler}>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email Id</Label>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button
                className="btn btn-sm"
                color="primary"
                type="submit"
                block
              >
                Sign Up
              </Button>

              {/* {error?<div style={{textAlign:"center",marginTop:"10px",color:"red"}}>{error.data.error}</div>:<div></div>} */}
            </Form>
            <CardText
              style={{
                textAlign: "center",
                marginTop: "15px",
                marginBottom: "10px",
              }}
            >
              Already have an account? <Link to="/login">Log In</Link>
            </CardText>
          </Card>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default SignUp;
