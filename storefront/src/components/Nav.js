import React from "react";
import SignIn from "./SignIn";
// import { Link, useHistory } from "react-router-dom";

// import Checkout from "./Checkout";

class Nav extends React.Component {
  // OPEN WARNIN' MODAL IF CLEAR CART BUTTON IS PRESSED
  openClearCartModal = () => {
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    let modal = document.getElementById("open-cart-warning");
    modal.style.display = "block";
    this.closeCart();
  };

  closeClearCartModal = () => {
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    let modal = document.getElementById("open-cart-warning");
    modal.style.display = "none";
    this.openCart();
  };

  // ===================== OPEN/CLOSE CART ====================

  openCart = () => {
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

  // ===================== OPEN/CLOSE PROCEED TO CHECKOUT ====================

  openCheckout = () => {
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    let modal = document.getElementById("open-checkout-modal");
    modal.style.display = "block";
    this.closeCart();
  };

  closeCheckout = () => {
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    let modal = document.getElementById("open-checkout-modal");
    modal.style.display = "none";
    this.openCart();
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

  // CLEARS THE SHOPPING CART
  clearCart = () => {
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    let cartItems = this.props.cartItems;
    let cartSum = this.props.sumOfCart;

    cartSum.splice(0, cartSum.length);
    cartItems.splice(1, cartItems.length);

    this.props.showCartItems();
    this.openCart();
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
      <div id="main" className="nav-bar">
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
              onClick={this.openCart}
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
              <h1 className="total-in-cart">Subtotal ${lastSumofArray}</h1>
            ) : null}

            {lengthOfCart > 1 ? (
              <div>
                <div className="clear-button-div">
                  <button onClick={this.openCheckout} className="checkout">
                    PROCEED TO CHECKOUT
                  </button>
                  <div id="open-checkout-modal">
                    <div className="checkout-modal-content">
                      <div className="checkout-left-div">
                        <h2>Contact information</h2>
                        <input
                          type="text"
                          placeholder="EMAIL"
                          placeholder={this.props.user.email}
                        />
                        <input id="checkbox" type="checkbox" />
                        <label htmlFor="checkbox">
                          Keep me up to date on exclusive offers
                        </label>

                        <h2>Shippind address</h2>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input
                          type="text"
                          placeholder="House No, Street Address, Company Name, C/O"
                        />
                        <input
                          type="text"
                          placeholder="Building, Floor, Nearest Landmark"
                        />
                        <input type="text" placeholder="City" />
                        <select>
                          <option value="NONE">State</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District Of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                        <input type="text" placeholder="Zip Code" />
                        <input type="text" placeholder="Phone" />

                        <button
                          className="close-checkout-modal"
                          onClick={this.closeCheckout}
                        >
                          RETURN TO CART
                        </button>
                        <button className="place-order-button">
                          PLACE ORDER
                        </button>
                      </div>

                      {unique.slice(1).map((item) => {
                        return (
                          <div className="checkout-right-div">
                            <img
                              className="checkout-img"
                              src={item.image}
                              alt={item.name}
                            />

                            <div className="cart-details-div">
                              <h1 className="checkout-name">{item.name}</h1>

                              <h2 className="checkout-price">{item.price}</h2>
                            </div>
                          </div>
                        );
                      })}
                      <input
                        type="text"
                        placeholder="Gift card or discount code"
                      />
                      <input type="submit" value="Apply" />
                      <h3>Total: ${lastSumofArray}</h3>
                    </div>
                  </div>
                  <button
                    className="continue-shopping"
                    onClick={this.closeCart}
                  >
                    CONTINUE SHOPPING
                  </button>
                  <button
                    className="clear-cart"
                    onClick={this.openClearCartModal}
                  >
                    CLEAR CART
                  </button>
                </div>

                <div id="open-cart-warning">
                  <div className="cart-warning-content">
                    <h2 className="clear-cart-title">
                      These items will be cleared from your cart
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
                      onClick={this.closeClearCartModal}
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
