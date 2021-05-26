import React from "react";
import fire from "../config/fire";

class Users extends React.Component {
  state = {
    email: "",
    password: "",
  };

  // AUTHENTICATION

  login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  signUp = (event) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <label htmlFor="password"> Password </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <button onClick={this.login}> Login </button>
          <button onClick={this.signUp}> Sign Up </button>
        </form>
      </div>
    );
  }
}

export default Users;
