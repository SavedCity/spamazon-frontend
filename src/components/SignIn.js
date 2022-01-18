import React from "react";
import SignUp from "./SignUp";
import fire from "../config/fire";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    wrongCredentials: false,
    requestExceeded: false,
    userNotFound: false,
  };

  login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/wrong-password") {
          this.setState({
            wrongCredentials: true,
          });
          setTimeout(() => {
            this.setState({
              wrongCredentials: false,
            });
          }, 2500);
        } else if (err.code === "auth/too-many-requests") {
          this.setState({
            requestExceeded: true,
          });
          setTimeout(() => {
            this.setState({
              requestExceeded: false,
            });
          }, 2500);
        } else if (err.code === "auth/user-not-found") {
          this.setState({
            userNotFound: true,
          });
          setTimeout(() => {
            this.setState({
              userNotFound: false,
            });
          }, 2500);
        }
      });
  };

  handleSignInChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // SIGN IN MODAL
  openModal = () => {
    let modal = document.getElementById("signin-modal");
    modal.style.display = "block";
  };

  closeModal = () => {
    let modal = document.getElementById("signin-modal");
    modal.style.display = "none";
  };

  closeModalWindow = (event) => {
    let modal = document.getElementById("signin-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  guestLogin = () => {
    this.setState({
      email: "anonymous@spamazon.com",
      password: "trustcc",
    });
  };

  render() {
    return (
      <div onClick={this.closeModalWindow}>
        <button onClick={this.openModal} id="signin-button">
          Log In
        </button>

        <div id="signin-modal">
          <div className="signin-content">
            <div className="signin-container">
              <form onSubmit={this.login}>
                <span onClick={this.closeModal} className="signin-close">
                  X
                </span>

                {this.state.wrongCredentials ? (
                  <h4 className="sign-in-error">Wrong email or password</h4>
                ) : this.state.requestExceeded ? (
                  <h4
                    style={{ marginBottom: "40px" }}
                    className="sign-in-error"
                  >
                    Sign in attempt reached. Try again in a few minutes
                  </h4>
                ) : (
                  this.state.userNotFound && (
                    <h4 className="sign-in-error">
                      No user found with this email
                    </h4>
                  )
                )}

                <div style={{ marginTop: "17px" }} className="fontuser">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    title="Please fill out this field in email format"
                    pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
                    name="email"
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    onChange={this.handleSignInChange}
                    value={this.state.email}
                  />
                  <i className="fas fa-user"></i>
                </div>

                <div className="fontpass">
                  <label htmlFor="password">Password </label>
                  <input
                    required
                    pattern="[a-zA-Z\W0-9]{6,16}"
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={this.handleSignInChange}
                    value={this.state.password}
                  />
                  <i className="fas fa-lock"></i>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <input
                    className="signin-submit"
                    type="submit"
                    value="Login"
                  />
                  <button onClick={this.guestLogin} className="guest-login">
                    Guest Login
                  </button>
                </div>
                <h3 className="not-a-user">NOT A USER?</h3>
              </form>
            </div>
            <div className="arrow2 bounce">
              <i className="fa fa-arrow-down fa-2x"></i>
            </div>

            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
