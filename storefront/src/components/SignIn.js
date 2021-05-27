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
            <form>
              <span onClick={this.closeModal} className="signin-close">
                X
              </span>
              <div className="fontuser">
                <label className="email-title" htmlFor="">
                  Email{" "}
                </label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  placeholder="Enter email"
                  onChange={this.handleSignInChange}
                  value={this.state.email}
                />
                <i className="fas fa-user"></i>
              </div>

              <div className="fontpass">
                <label htmlFor="">Password </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={this.handleSignInChange}
                  value={this.state.password}
                />
                <i className="fas fa-lock"></i>
              </div>

              <button onClick={this.login}> Login </button>
            </form>

            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
