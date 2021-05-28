import React from "react";
import SignIn from "./SignIn";
// import Checkout from "./Checkout";

class Nav extends React.Component {
  render() {
    let array = this.props.cartItems;
    let lengthOfCart = array.length;
    return (
      <div className="nav-bar">
        <h3 className="title">Spamazon</h3>
        {this.props.user ? (
          <button className="logout" onClick={this.props.logOut}>
            <i className="fas fa-sign-out-alt"></i> Log out
          </button>
        ) : (
          <SignIn />
        )}

        <i onClick={this.props.showCartItems} className="fas fa-shopping-cart">
          {lengthOfCart}
        </i>
      </div>
    );
  }
}

export default Nav;
