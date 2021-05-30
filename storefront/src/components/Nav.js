import React from "react";
import SignIn from "./SignIn";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <h3 className="title">Spamazon</h3>
        {this.props.user ? (
          <button className="logout" onClick={this.props.logOut}>
            <i class="fas fa-sign-out-alt"></i> Log out
          </button>
        ) : (
          <SignIn />
        )}

        <i className="fas fa-shopping-cart"></i>
      </div>
    );
  }
}

export default Nav;
