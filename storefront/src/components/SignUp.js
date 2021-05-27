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
        <form onSubmit={this.signup}>
          <div className="signup-form">
            <label htmlFor=""> Email </label>
            <input
              required
              title="Must follow email format eg. michael@spamazon.com"
              pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
              name="email"
              type="text"
              id="signup-email"
              placeholder="Enter email"
              onChange={this.handleSignUpChange}
              value={this.state.email}
            />
            <label htmlFor=""> Password </label>
            <input
              required
              title="Password must be between 6-16 characters"
              pattern="[a-zA-Z\W0-9]{6,16}"
              name="password"
              type="password"
              id="signup-password"
              placeholder="Enter password"
              onChange={this.handleSignUpChange}
              value={this.state.password}
            />
            <input type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
