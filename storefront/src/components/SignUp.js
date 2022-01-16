import React from "react";
import fire from "../config/fire";

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    emailInUse: false,
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
        if (err.code === "auth/email-already-in-use") {
          this.setState({
            emailInUse: true,
          });
          setTimeout(() => {
            this.setState({
              emailInUse: false,
            });
          }, 2500);
        }
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
      <div className="signup-container">
        {this.state.emailInUse ? (
          <h4 style={{ marginBottom: "38px" }} className="sign-in-error">
            Email already in use.
          </h4>
        ) : (
          <h3>Sign Up</h3>
        )}
        <form onSubmit={this.signUp}>
          <div className="signup-form">
            <div className="fontuser">
              <label htmlFor="signup-email"> New Email </label>
              <input
                required
                title="Must follow email format eg. michael@spamazon.com"
                pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
                name="email"
                type="text"
                id="signup-email"
                placeholder="Create Email"
                onChange={this.handleSignUpChange}
                value={this.state.email}
              />
              <i className="fas fa-user"></i>
            </div>

            <div className="fontpass">
              <label htmlFor="signup-password"> New Password </label>
              <input
                required
                title="Password must be between 6-16 characters"
                pattern="[a-zA-Z\W0-9]{6,16}"
                name="password"
                type="password"
                id="signup-password"
                placeholder="Create Password"
                onChange={this.handleSignUpChange}
                value={this.state.password}
              />
              <i className="fas fa-lock"></i>
            </div>

            <input className="signup-submit" type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
