import React from "react";

class Cart extends React.Component {
  state = {
    addToCartClick: false,
  };

  // ====================================== OPEN CHECKOUT ==================================
  openCheckout = () => {
    let cartPopUp = document.getElementById("cart-popup");
    let cartContent = document.getElementById("cart-content");

    if (this.props.checkoutOpenedOnce === false) {
      cartPopUp.classList.toggle("show");
      cartContent.classList.toggle("slide");
    }
  };

  // ===================================== ADD ITEM TO THE CART ==================================
  addToCart = () => {
    this.openCheckout();

    let id = this.props.item.id;
    let name = this.props.item.name;
    let price = this.props.item.price;
    let image = this.props.item.image;

    let cartTotal = this.props.sumOfCart;

    let cartArray = this.props.cartItems;

    // IF THE ITEM IS ALREADY IN THE CART
    cartArray.push({ id, name, price, image });

    // ADDING ALL THE PRICE VALUES IN THE ARRAY
    let sum = cartArray.reduce((previousValue, currentValue) => {
      return {
        price: parseFloat(previousValue.price) + parseFloat(currentValue.price),
      };
    });

    cartTotal.push(sum);

    this.props.showCartItems();
    this.props.triggerCartLimitUp();

    this.setState({
      addToCartClick: true,
    });
    console.log("cartArray", cartArray);
    console.log("cartTotal", cartTotal);
  };

  // ============================== REMOVE ITEM FROM THE CART =================================
  removeFromCart = () => {
    let id = this.props.item.id;
    let cartArray = this.props.cartItems;
    let cartTotal = this.props.sumOfCart;
    let numberId = parseInt(id);

    this.setState({
      addToCartClick: false,
    });

    let itemToRemoveIndex = cartArray.findIndex(function (item) {
      return item.id === id;
    });

    // search cartArray for 'numberId' matching the product and remove all the ones that match
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].numberId === numberId) {
        cartArray.splice(i, 1);
        i--;
      }
    }

    // PROCEED TO REMOVE ITEM ONLY IF IT EXISTS
    if (itemToRemoveIndex !== -1) {
      cartArray.splice(itemToRemoveIndex, 1);
    }

    // ADDING THE PRICES IN THE CART AFTER REMOVAL OF ONE
    var sum = cartArray.reduce((previousValue, currentValue) => {
      return {
        price: parseFloat(previousValue.price) + parseFloat(currentValue.price),
      };
    });

    cartTotal.push(sum);

    this.props.showCartItems();
    this.props.triggerCartLimitDown();

    for (let i = 0; i <= this.props.quantity.length; i++) {
      if (this.props.quantity.includes(numberId)) {
        i = this.props.quantity.indexOf(parseInt(numberId));
        this.props.quantity.splice(i, 1);
      }
    }
  };

  render = () => {
    return (
      <div>
        <div>
          {this.props.cartItems.some(
            (cartItem) => cartItem.id === this.props.item.id
          ) ? (
            <div>
              <button className="already-in-cart">IN CART</button>
              <i onClick={this.removeFromCart} className="far fa-trash-alt"></i>
            </div>
          ) : this.props.cartLimit < 6 ? (
            <button className="add-to-cart" onClick={this.addToCart}>
              ADD TO CART
            </button>
          ) : (
            <button className="cart-limit-reached">CART LIMIT REACHED</button>
          )}
        </div>
      </div>
    );
  };
}

export default Cart;
