import React from "react";
import fire from "../config/fire";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
  };

  signUp = (event) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(fire);
  };

  handleSignUpChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form>
          <div className="signup-form">
            <label htmlFor="email"> Email </label>
            <input
              name="email"
              type="text"
              id="signup-email"
              placeholder="Enter email"
              onChange={this.handleSignUpChange}
              value={this.state.email}
            />
            <label htmlFor="password"> Password </label>
            <input
              name="password"
              type="password"
              id="signup-password"
              placeholder="Enter password"
              onChange={this.handleSignUpChange}
              value={this.state.password}
            />
            <button onClick={this.signUp}> Sign Up </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
