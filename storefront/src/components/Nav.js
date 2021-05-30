import React from "react";
import SignIn from "./SignIn";
// import { Link, useHistory } from "react-router-dom";

// import Checkout from "./Checkout";

class Nav extends React.Component {
  // OPEN WARNIN' MODAL IF CLEAR CART BUTTON IS PRESSED
  openModal = () => {
    let modal = document.getElementById("open-cart-warning");
    modal.style.display = "block";
    this.closeCart();
  };

  closeModal = () => {
    let modal = document.getElementById("open-cart-warning");
    modal.style.display = "none";
    this.openCheckout();
  };

  // =========================================

  openCheckout = () => {
    let cartPopUp = document.getElementById("cart-popup");
    let cartContent = document.getElementById("cart-content");

    cartPopUp.classList.toggle("show");
    cartContent.classList.toggle("slide");
  };

  closeCart = () => {
    let cartPopUp = document.getElementById("cart-popup");
    let cartContent = document.getElementById("cart-content");

    cartPopUp.classList.toggle("show");
    cartContent.classList.toggle("slide");
  };

  raiseQuantity = (event) => {
    // let quantity = event.target.nextSibling.nextSibling.firstChild;
    let id = this.props.cartItems.id;
    let name = this.props.cartItems.name;
    let price = this.props.cartItems.price;
    let image = this.props.cartItems.image;
    let cartSum = this.props.sumOfCart;

    // cartSum.push();

    // this.props.showCartItems();

    // console.log(quantity);
  };

  clearCart = () => {
    let cartItems = this.props.cartItems;
    let cartSum = this.props.sumOfCart;

    cartSum.splice(0, cartSum.length);
    cartItems.splice(1, cartItems.length);

    this.props.showCartItems();
    this.openCheckout();
    console.log(cartItems);
  };

  render() {
    // CART ITEMS
    let array = this.props.cartItems;
    let lengthOfCart = array.length;

    // LOOPING THROUGH THE ARRAY OF ITEMS BUT ONLY RETURNING UNIQUE ONES
    let unique = [...new Map(array.map((item) => [item.id, item])).values()];
    let uniqueLength = unique.length;

    // CART PRICE SUM
    let cartSum = this.props.sumOfCart;
    let cartSumLength = cartSum.length;
    if (cartSumLength > 0) {
      var lastSumofArray = cartSum.slice(-1)[0].price;
    }
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

        {this.props.user ? (
          <div>
            <i
              onClick={this.openCheckout}
              id="cart"
              className="fas fa-shopping-cart"
            >
              {uniqueLength > 1 ? (
                <h4 className="cart-length">{uniqueLength - 1}</h4>
              ) : null}
            </i>
          </div>
        ) : null}

        <div id="cart-popup">
          <div id="cart-content">
            {lengthOfCart > 1 ? (
              <h2 className="cart-title">Your cart</h2>
            ) : (
              <h2 className="cart-title">Your cart is empty</h2>
            )}

            {unique.slice(1).map((item) => {
              return (
                <div className="cart-item-div">
                  <img className="cart-img" src={item.image} alt={item.name} />

                  <div className="cart-details-div">
                    <h1 className="cart-name">{item.name}</h1>

                    <h2 className="cart-price">{item.price}</h2>
                  </div>
                </div>
              );
            })}
            {lengthOfCart > 1 ? (
              <h1 className="total-in-cart">Total: ${lastSumofArray}</h1>
            ) : null}

            {lengthOfCart > 1 ? (
              <div>
                <div className="clear-button-div">
                  <button className="checkout">CHECKOUT</button>
                  <button
                    className="continue-shopping"
                    onClick={this.closeCart}
                  >
                    CONTINUE SHOPPING
                  </button>
                  <button className="clear-cart" onClick={this.openModal}>
                    CLEAR CART
                  </button>
                </div>

                <div id="open-cart-warning">
                  <div className="cart-warning-content">
                    <h2 className="clear-cart-title">
                      Are you sure you want to clear your cart?
                    </h2>
                    {unique.slice(1).map((item) => {
                      return (
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.price}</p>
                        </div>
                      );
                    })}
                    <button onClick={this.clearCart}>CLEAR CART</button>
                    <button
                      className="close-cart-warning"
                      onClick={this.closeModal}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="clear-button-div">
                <button className="continue-shopping" onClick={this.closeCart}>
                  CONTINUE SHOPPING
                </button>
                <button className="clear-cart-greyd">CLEAR CART</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
