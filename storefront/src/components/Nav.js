import React from "react";
import SignIn from "./SignIn";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        {this.props.user ? (
          <button onClick={this.props.logOut}>Log out </button>
        ) : (
          <SignIn />
        )}

        <i className="fas fa-shopping-cart"></i>
      </div>
    );
  }
}

export default Nav;
