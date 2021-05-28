import React from "react";
import Edit from "./Edit";
// import { Route, BrowserRouter as Router, Link } from "react-router-dom";

class Products extends React.Component {
  addToCart = () => {
    let id = this.props.item.id;
    let name = this.props.item.name;
    let price = this.props.item.price;
    let image = this.props.item.image;

    let cartArray = this.props.cartItems;

    cartArray.push({ id, name, price, image });

    console.log(name, price);
    this.props.showCartItems();
  };

  removeFromCart = () => {
    let id = this.props.item.id;
    let cartArray = this.props.cartItems;

    const itemToRemoveIndex = cartArray.findIndex(function (item) {
      return item.id === id;
    });

    // proceed to remove an item only if it exists.
    if (itemToRemoveIndex !== -1) {
      cartArray.splice(itemToRemoveIndex, 1);
    }

    console.log(cartArray);

    this.props.showCartItems();
  };

  render() {
    return (
      <div key={this.props.item.id}>
        <img src={this.props.item.image} alt="" />

        <h2> Name: {this.props.item.name} </h2>

        <h2> Price: {this.props.item.price} </h2>

        {this.props.user ? (
          <Edit
            user={this.props.user}
            item={this.props.item}
            updateProduct={this.props.updateProduct}
            deleteProduct={this.props.deleteProduct}
          ></Edit>
        ) : null}

        {this.props.user ? (
          <div>
            <button onClick={this.addToCart}>Add to cart</button>
            <button onClick={this.removeFromCart}>Remove Item</button>
          </div>
        ) : null}
      </div>
    );
  }
}
// For user product click page (goes inside return but can't comment out)
// <ViewProduct item={this.props.item} />

export default Products;
