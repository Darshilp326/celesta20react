import React from "react";
import classnames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import { Alert } from "antd";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import { USER_LOADING } from "redux/actions/types";
import { registerUser } from "redux/actions/authActions";
import { clearErrors } from "redux/actions/errorActions";
import ValidatedLoginForm from "./ValidateLogin";

class RegisterPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",
    email: "",
    password: "",
    name: "",
    msg: null,
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
    console.log(this.props.isLoading);
  }
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    const { name, email, password } = this.state;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        if (!email || !password || !name) {
          this.setState({
            msg: "Please enter all fields",
          });
        } else {
          this.setState({
            msg: error.message,
          });
        }
      } else {
        this.setState({
          msg: null,
        });
      }
    }
    if (isAuthenticated) {
      this.toggleModal();
    }
  }
  toggleModal = () => {
    this.props.clearErrors();
    this.props.history.push("/");
  };
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }

  followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)",
    });
  };
  handleCreate = (name, email, password) => {
    const user = {
      name,
      email,
      password,
    };
    this.props.registerUser(user);
  };
  submitHandler = (e) => {
    e.preventDefault();
    const x = this.state.email;
    const y = this.state.password;
    const z = this.state.name;
    this.handleCreate(z, x, y);
  };
  render() {
    const { msg } = this.state;
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">Register</CardTitle>
                        <Row>
                          <Button
                            className="btn-icon btn-round"
                            href="#pablo"
                            target="_blank"
                            color="neutral"
                            onClick={(e) => e.preventDefault()}
                            style={{ marginLeft: "20px" }}
                          >
                            <i className={"fab fa-twitter"} />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            href="#pablo"
                            target="_blank"
                            color="neutral"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className={"fab fa-facebook"} />
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            href="#pablo"
                            target="_blank"
                            color="neutral"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className={"fab fa-google-plus-g"} />
                          </Button>
                        </Row>
                      </CardHeader>
                      <div>
                        {msg ? (
                          <h2
                            style={{
                              fontSize: "25px",
                              color: "black",
                              backgroundImage:
                                "linear-gradient(to bottom right, pink, violet)",
                              textAlign: "center",
                              marginBottom: "30px",
                            }}
                          >
                            {msg}!
                          </h2>
                        ) : null}
                      </div>
                      <CardBody>
                        <h6>Or Be Classic..</h6>
                        <Form className="form" onSubmit={this.submitHandler}>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Full Name"
                              type="text"
                              onFocus={(e) =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ fullNameFocus: false })
                              }
                              onChange={(e) => {
                                this.setState({ name: e.target.value });
                                console.log(this.state.name);
                              }}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={(e) =>
                                this.setState({ emailFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocus: false })
                              }
                              onChange={(e) => {
                                this.setState({ email: e.target.value });
                                console.log(this.state.email);
                              }}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="text"
                              onFocus={(e) =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={(e) =>
                                this.setState({ passwordFocus: false })
                              }
                              onChange={(e) =>
                                this.setState({ password: e.target.value })
                              }
                            />
                          </InputGroup>
                          <FormGroup check className="text-left">
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />I agree to the{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                terms and conditions
                              </a>
                              .
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button
                          className="btn-round"
                          color="primary"
                          size="lg"
                          onClick={this.submitHandler}
                        >
                          register
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  error: state.error,
});

export default compose(connect(mapStateToProps, { registerUser, clearErrors }))(
  RegisterPage
);
