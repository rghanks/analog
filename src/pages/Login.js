import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { BASE_URL } from "../Api_connection/config";
import { Link, useNavigate } from "react-router-dom";
import ForgetPassword from "./ForgetPassword";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { login } from "../redux/userSlice";

// import FacebookLogin from "react-facebook-login";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const googleId =
    "28253347908-l3f5pge45v4avpv50ppksjlkvvap6t35.apps.googleusercontent.com";
  const onLoginSuccess = (res) => {
    console.log(res.profileObj);
    // window.location.replace('/')
  };
  const onLoginFailure = (res) => {
    console.log(res);
  };

  async function Login() {
    await fetch(BASE_URL + "/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "allow-access-origin-control": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        // localStorage.setItem("email", email);

        if (resp.status == 0) {
          swal(
            "Incorrect Credentials",
            "Please Enter Right Credentials",
            "error"
          );
        }
        if (resp.status == 1) {
          swal(`${resp.message}`, "Welcome", "success");
          //dispatch(login, { isLoggedIn: true, userInfo: { email } });
          localStorage.setItem("analoguser", {
            isLoggedIn: true,
            userInfo: { email },
          });

          localStorage.setItem("email", resp.email);
          localStorage.setItem("token", resp.token);
          navigate("/");
        }
        if (resp.status == 3) {
          swal("Email is not varified", "Verify Email before Login", "error");
          navigate("/ResendOtp");
        }
        if (resp.status == 4) {
          swal("Email not Registered", "Please signup", "error");
        }
        /*  else {
          setResponse(resp);
          swal(`${resp.message}`, "Try with new email ID", "error");
        } */
      });
  }
  const handelFormSubmit = (email, password) => {
    // setValida(false);
    if (email == "") {
      setEmailerror(true);
    }

    if (password == "") {
      setPassworderror(true);
    }

    if (email !== "" && password !== "") {
      Login();
    }
  };

  return (
    <div>
      <div class="nk-content">
        <div class="nk-split nk-split-page nk-split-md">
          <div class="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
            <div class="absolute-top-right d-lg-none p-3 p-sm-5">
              <a
                href="#"
                class="toggle btn-white btn btn-icon btn-light"
                data-target="athPromo"
              >
                <em class="icon ni ni-info"></em>
              </a>
            </div>
            <div class="nk-block nk-block-middle nk-auth-body">
              <div class="brand-logo pb-5">
                <a href="#" class="logo-link">
                  <img
                    class="logo-light logo-img logo-img-lg"
                    src="./images/logo.png"
                    srcset="./images/logo2x.png 2x"
                    alt="logo"
                  />
                  <img
                    class="logo-dark logo-img logo-img-lg"
                    src="./images/logo.png"
                    srcset="./images/logo-dark2x.png 2x"
                    alt="logo-dark"
                  />
                </a>
              </div>
              <div class="nk-block-head">
                <div class="nk-block-head-content">
                  <h5 class="nk-block-title">Sign-In</h5>
                  <div class="nk-block-des">
                    <p>
                      Connect with <b>Analog Inceptive</b> of{" "}
                      <b>INRX Blockchain</b>.
                    </p>
                  </div>
                </div>
              </div>
              {/* {res.status == true ? (
                <h1 style={{ color: "green", fontSize: 20 }}>{res.message}</h1>
              ) : (
                <h1 style={{ color: "red", fontSize: 20 }}>{res.message}</h1>
              )} */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handelFormSubmit(email, password);
                }}
              >
                <div class="form-group">
                  <div class="form-label-group">
                    <label class="form-label" for="default-01">
                      Email
                    </label>
                    <a class="link link-primary link-sm" tabindex="-1" href="#">
                      Need Help?
                    </a>
                  </div>
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="default-01"
                    placeholder="Enter your email "
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value.toLowerCase());
                      setEmailerror(false);
                    }}
                  />
                </div>
                {emailerror == true ? (
                  <p style={{ color: "red", marginTop: -20 }}>
                    Email Is Requierd *
                  </p>
                ) : null}
                <div class="form-group">
                  <div class="form-label-group">
                    <label class="form-label" for="password">
                      Password
                    </label>
                    <a href="/ForgetPassword">Forget Password</a>
                    {/* <Link to={ForgetPassword}>Forget Password</Link> */}
                  </div>
                  <div class="form-control-wrap">
                    <a
                      tabindex="-1"
                      href="#"
                      class="form-icon form-icon-right passcode-switch"
                      data-target="password"
                    >
                      <em class="passcode-icon icon-show icon ni ni-eye"></em>
                      <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                    </a>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="password"
                      placeholder="Enter your password"
                      minLength={8}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPassworderror(false);
                      }}
                    />
                  </div>
                </div>
                {passworderror == true ? (
                  <p style={{ color: "red", marginTop: -20 }}>
                    Password Is Requierd *
                  </p>
                ) : null}
                <div class="form-group">
                  <button
                    class="btn btn-lg btn-primary btn-block"
                    // onClick={() => (window.location.href = "/faq")}
                    // onClick={Login}
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div class="form-note-s2 pt-4">
                {" "}
                New on our platform? <a href="/signup">Create an account</a>
              </div>
              <div class="text-center pt-4 pb-3">
                <h6 class="overline-title overline-title-sap">
                  <span>OR</span>
                </h6>
              </div>
              <ul class="nav justify-center gx-4">
                <li class="nav-item">
                  {/* <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={props.SocialSignUp}
                    cssClass="btnFacebook"
                    icon={<i className="fa fa-facebook" class="logo-fb"></i>}
                    textButton="Sign up with Facebook"
                  /> */}
                </li>
                <li class="nav-item">
                  <GoogleLogin
                    clientId={googleId}
                    buttonText="Sign in with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                  {/* <a class="nav-link" href="#"> */}{" "}
                  {/* <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    render={() => (
                      <a class="nav-link" onClick={onLoginSuccess}>
                        Google
                      </a>
                    )}
                  /> */}
                  {/* </a> */}
                </li>
              </ul>
            </div>
            <div class="nk-block nk-auth-footer">
              <div class="nk-block-between">
                <ul class="nav nav-sm">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Terms & Condition
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Help
                    </a>
                  </li>
                  <li class="nav-item dropup">
                    <a
                      class="dropdown-toggle dropdown-indicator has-indicator nav-link"
                      data-toggle="dropdown"
                      data-offset="0,10"
                    >
                      <small>English</small>
                    </a>
                    <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                      <ul class="language-list">
                        <li>
                          <a href="#" class="language-item">
                            <img
                              src="./images/flags/english.png"
                              alt=""
                              class="language-flag"
                            />
                            <span class="language-name">English</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="language-item">
                            <img
                              src="./images/flags/spanish.png"
                              alt=""
                              class="language-flag"
                            />
                            <span class="language-name">Español</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="language-item">
                            <img
                              src="./images/flags/french.png"
                              alt=""
                              class="language-flag"
                            />
                            <span class="language-name">Français</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="language-item">
                            <img
                              src="./images/flags/turkey.png"
                              alt=""
                              class="language-flag"
                            />
                            <span class="language-name">Türkçe</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-3">
                <p>&copy; 2021 INRX ECOSYSTEM. All Rights Reserved.</p>
              </div>
            </div>
          </div>
          <div
            class="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right"
            data-content="athPromo"
            data-toggle-screen="lg"
            data-toggle-overlay="true"
          >
            <div class="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
              <div
                class="slider-init"
                data-slick='{"dots":true, "arrows":false}'
              >
                <div class="slider-item">
                  <div class="nk-feature nk-feature-center">
                    <div class="nk-feature-img">
                      <img
                        class="round"
                        src="./images/slides/slide-a.png"
                        srcset="./images/slides/promo-a2x.png 2x"
                        alt=""
                      />
                    </div>
                    <div class="nk-feature-content py-4 p-sm-5">
                      <h4>INRX NETWORK</h4>
                      <p>INCEPTIVE ANALOG</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider-dots"></div>
              <div class="slider-arrows"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
