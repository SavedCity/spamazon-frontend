import React from "react";
import SignUp from "./SignUp";
import fire from "../config/fire";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
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
        console.log(err);
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
                <div className="fontuser">
                  <label className="email-title" htmlFor="">
                    Email
                  </label>
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
                  <label htmlFor="">Password </label>
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

                <input className="signin-submit" type="submit" value="Login" />
                <h3 className="not-a-user">NOT A USER?</h3>
                <div className="arrow"></div>
              </form>
            </div>

            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
