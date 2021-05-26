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

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form>
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Enter email"
            onChange={this.handleSignInChange}
            value={this.state.email}
          />
          <br />
          <label htmlFor="password"> Password </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={this.handleSignInChange}
            value={this.state.password}
          />
          <br />
          <button onClick={this.login}> Login </button>
        </form>
        <SignUp />
      </div>
    );
  }
}

export default SignIn;
