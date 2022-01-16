import React from "react";
import SignIn from "./SignIn";
// import { Link, useHistory } from "react-router-dom";

// import Checkout from "./Checkout";

class Nav extends React.Component {
  state = {
    quantity: 1,
  };
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
    // document.getElementById("cart-content").style.overflow = "hidden";
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
    let cartTotal = this.props.sumOfCart;
    let cartArray = this.props.cartItems;
    let price =
      event.target.parentElement.previousSibling.firstChild.nextSibling
        .nextSibling.firstChild.nextSibling.firstChild.wholeText;
    let id =
      event.target.parentElement.previousSibling.firstChild.firstChild
        .wholeText;
    let numberId = parseInt(id);

    cartArray.push({ numberId, price });

    // ADDING ALL THE PRICE VALUES IN THE ARRAY
    let sum = cartArray.reduce((previousValue, currentValue) => {
      return {
        price: parseFloat(previousValue.price) + parseFloat(currentValue.price),
      };
    });

    cartTotal.push(sum);

    this.props.showCartItems();

    this.setState({});
  };

  lowerQuantity = (event) => {
    let cartTotal = this.props.sumOfCart;
    let cartArray = this.props.cartItems;
    // let price =
    //   event.target.parentElement.previousSibling.firstChild.nextSibling
    //     .nextSibling.firstChild.nextSibling.firstChild.wholeText;

    let id =
      event.target.parentElement.previousSibling.firstChild.firstChild
        .wholeText;

    let numberId = parseInt(id);

    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].numberId === numberId) {
        cartArray.splice(i, 1);
        break;
      }
    }

    // ADDING ALL THE PRICE VALUES IN THE ARRAY
    let sum = cartArray.reduce((previousValue, currentValue) => {
      return {
        price: parseFloat(previousValue.price) + parseFloat(currentValue.price),
      };
    });

    cartTotal.push(sum);

    this.props.showCartItems();
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
    this.props.triggerCartLimitReset();
    console.log(cartItems);
  };

  openPostModal = () => {
    setTimeout(() => {
      document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
      let modal = document.getElementById("create-form-modal");
      modal.style.display = "block";
    }, 250);
  };

  addDefaultSrc = (ev) => {
    ev.target.src = "../favicon.ico";
  };

  purchasing = () => {
    var twoToneButton = document.querySelector(".place-order-button");

    twoToneButton.innerHTML = "PLACING ORDER";
    twoToneButton.classList.add("spinning");

    setTimeout(function () {
      twoToneButton.classList.remove("spinning");
      twoToneButton.innerHTML = "PLACE ORDER";
    }, 3000);
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

    window.onscroll = () => {
      let nav = document.querySelector(".nav-bar");
      let title = document.querySelector(".title");
      let logoCart = document.querySelector(".logo-cart");
      let logout = document.querySelector(".logout");
      let cart = document.querySelector(".fa-shopping-cart");
      let signin = document.querySelector("#signin-button");
      let plus = document.querySelector(".fa-plus");
      let sell = document.querySelector(".sell-title");
      let user = document.querySelector(".username");

      // NAV BAR ON SCROLL CHANGES CSS
      if (window.scrollY < 180) {
        nav.classList.remove("scroll");
        title.classList.remove("scroll");
        logoCart.classList.remove("scroll");
        logout.classList.remove("scroll");
        cart.classList.remove("scroll");
        signin.classList.remove("scroll");

        if (this.props.user) {
          plus.classList.remove("scroll");
          sell.classList.remove("scroll");
          user.classList.remove("scroll");
        }
      } else {
        nav.classList.add("scroll");
        title.classList.add("scroll");
        logoCart.classList.add("scroll");
        logout.classList.add("scroll");
        cart.classList.add("scroll");
        signin.classList.add("scroll");

        if (this.props.user) {
          plus.classList.add("scroll");
          sell.classList.add("scroll");
          user.classList.add("scroll");
        }
      }
    };

    return (
      <div id="main" className="nav-bar">
        <img className="logo-cart" src="../favicon.ico" alt="cart" />

        <h3 className="title">Spamazon</h3>
        {this.props.user && (
          <h3 className="username">
            Hi{" "}
            {this.props.user.email.split("@")[0].charAt(0).toUpperCase() +
              this.props.user.email.split("@")[0].slice(1)}
            !
          </h3>
        )}

        {this.props.user ? (
          <div className="logout-before">
            <button className="logout" onClick={this.props.logOut}>
              <i className="fas fa-sign-out-alt"></i> Log out
            </button>
            <span onClick={this.openModal} id="signin-button">
              Log In
            </span>
          </div>
        ) : (
          <div className="logout-before">
            <span className="logout" onClick={this.props.logOut}>
              <i className="fas fa-sign-out-alt"></i> Log out
            </span>
            <SignIn />
          </div>
        )}

        {this.props.user && (
          <div className="sell-div">
            <h2 className="sell-title">Have something to sell?</h2>
            <i onClick={this.openPostModal} className="fas fa-plus"></i>
          </div>
        )}

        <div>
          <i onClick={this.openCart} id="cart" className="fas fa-shopping-cart">
            {uniqueLength > 1 ? (
              <h4 className="cart-length">{uniqueLength - 1}</h4>
            ) : null}
          </i>
        </div>

        <div id="cart-popup">
          <div id="cart-content">
            {lengthOfCart > 1 ? (
              <h2 className="cart-title">
                <span style={{ color: "#0077b6" }}>Your cart </span> $
                {lastSumofArray}.00
              </h2>
            ) : (
              <h2 className="cart-title">Your cart is empty</h2>
            )}

            {unique.slice(1).map((item) => {
              return (
                <div className="cart-item-div">
                  <div className="cart-item-div-left">
                    <div className="id-to-hide">{item.id}</div>
                    <img
                      className="cart-img"
                      src={item.image}
                      alt={item.name}
                      onError={this.addDefaultSrc}
                    />

                    <div className="cart-details-div">
                      <h1 className="cart-name">{item.name}</h1>

                      <h2 className="cart-price">{item.price}</h2>
                      <h1>{item.stock}</h1>
                    </div>
                  </div>
                  <div className="arrows-div">
                    <h4>Quantity</h4>
                    <i
                      title="Raise Quantity"
                      onClick={this.raiseQuantity}
                      className="fas fa-chevron-up"
                    ></i>
                    <i
                      title="Lower Quantity"
                      onClick={this.lowerQuantity}
                      className="fas fa-chevron-down"
                    ></i>
                  </div>
                </div>
              );
            })}
            {lengthOfCart > 1 ? (
              <div className="cart-subtotal-div">
                <h1 className="subtotal-in-cart">Subtotal </h1>
                <h1 className="price-in-cart">${lastSumofArray}.00</h1>
              </div>
            ) : null}

            {lengthOfCart > 1 ? (
              <div>
                <div className="clear-button-div">
                  {this.props.user ? (
                    <button onClick={this.openCheckout} className="checkout">
                      PROCEED TO CHECKOUT
                    </button>
                  ) : (
                    <button className="checkout-greyd">
                      SIGN IN TO CHECKOUT
                    </button>
                  )}
                  <div id="open-checkout-modal">
                    <div className="checkout-modal-content">
                      <div className="main-checkout-container">
                        <div className="checkout-left-div">
                          <h2 className="contact-info">Contact information</h2>
                          <input type="text" placeholder="Email" />
                          <div className="checkbox-div">
                            <input
                              readOnly
                              checked={true}
                              id="checkbox"
                              type="checkbox"
                            />
                            <label
                              className="checkbox-label"
                              htmlFor="checkbox"
                            >
                              Keep me up to date on Spamazon's exclusive offers
                            </label>
                          </div>

                          <h2 className="shipping-address">Shipping address</h2>
                          <div className="name-div">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                          </div>
                          <input
                            type="text"
                            placeholder="House No, Street Address, Company Name, C/O"
                          />
                          <input
                            type="text"
                            placeholder="Building, Floor, Nearest Landmark"
                          />
                          <input type="text" placeholder="City" />
                          <div className="state-div">
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
                          </div>
                          <input type="text" placeholder="Phone" />

                          <div>
                            <button
                              onClick={this.purchasing}
                              className="place-order-button"
                            >
                              PLACE ORDER
                            </button>
                            <button
                              className="close-checkout-modal"
                              onClick={this.closeCheckout}
                            >
                              RETURN TO CART
                            </button>
                          </div>
                        </div>
                        <div className="checkout-right-div">
                          {unique.slice(1).map((item) => {
                            return (
                              <div className="checkout-details-div">
                                <div className="checkout-details-div">
                                  <img
                                    className="checkout-img"
                                    src={item.image}
                                    alt={item.name}
                                    onError={this.addDefaultSrc}
                                  />

                                  <h1 className="checkout-name">{item.name}</h1>
                                </div>

                                <div>
                                  <h2 className="checkout-price">
                                    <span style={{ color: "#52b788" }}></span>
                                    {item.price}
                                  </h2>
                                </div>
                              </div>
                            );
                          })}
                          <div className="coupon-div">
                            <input
                              className="coupon-input"
                              type="text"
                              placeholder="Gift card or discount code"
                            />
                            <input
                              type="submit"
                              value="Apply"
                              className="coupon-submit"
                            />
                          </div>
                          <div className="checkout-subtotal-div">
                            <h3 className="checkout-subtotal">Subtotal</h3>
                            <h3 className="checkout-subtotal-price">
                              ${lastSumofArray}.00
                            </h3>
                          </div>
                          <div className="checkout-taxes-div">
                            <h3 className="checkout-taxes">Taxes</h3>
                            <h3 className="checkout-taxes-price">
                              Calculated after shipping information
                            </h3>
                          </div>
                          <div className="checkout-total-div">
                            <h3 className="checkout-total">Total</h3>
                            <h3 className="checkout-total-price">
                              ${lastSumofArray}.00
                            </h3>
                          </div>
                        </div>
                      </div>
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
                    <i className="far fa-times-circle"></i>
                    <h2 className="clear-cart-title">ARE YOU SURE?</h2>
                    {unique.slice(1).map((item) => {
                      return (
                        <div>
                          <h4 className="clear-cart-name">{item.name}</h4>
                          <p className="clear-cart-price">{item.price}</p>
                        </div>
                      );
                    })}
                    <div className="modal-button-div">
                      <button
                        className="clear-cart-button"
                        onClick={this.clearCart}
                      >
                        CLEAR CART
                      </button>
                      <button
                        className="close-cart-warning"
                        onClick={this.closeClearCartModal}
                      >
                        CANCEL
                      </button>
                    </div>
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
