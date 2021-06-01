import React from "react";
import Products from "./components/Products";
import fire from "./config/fire";
import AddForm from "./components/AddForm";
import Nav from "./components/Nav";
import UnderNav from "./components/UnderNav";

import axios from "axios";
import Footer from "./components/footer";

class App extends React.Component {
  state = {
    products: [],
    user: null,
    cartItems: [{ price: 0 }],
    sumOfCart: [],
    checkoutOpenedOnce: false,
    cartLimit: 0,
  };

  // CART
  showCartItems = () => {
    this.setState({
      cartItems: this.state.cartItems,
      checkoutOpenedOnce: true,
    });
  };

  // FOR CART LIMITATION OF 6 ITEMS
  triggerCartLimitUp = () => {
    this.setState({
      cartLimit: (this.state.cartLimit += 1),
    });
  };
  triggerCartLimitDown = () => {
    this.setState({
      cartLimit: (this.state.cartLimit -= 1),
    });
  };

  triggerCartLimitReset = () => {
    this.setState({
      cartLimit: (this.state.cartLimit = 0),
    });
  };

  // AUTHENTICATION
  authListener = () => {
    setTimeout(() => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        } else {
          this.setState({ user: null });
        }
      });
    }, 500);
  };

  logOut = () => {
    setTimeout(() => {
      fire.auth().signOut();
    }, 500);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  addProduct = (product) => {
    axios
      .post("https://spamazon-ga-backend.herokuapp.com/api/products", product)
      .then((response) => {
        this.getProducts();
      });
  };

  // PRODUCTS
  getProducts = () => {
    axios
      .get("https://spamazon-ga-backend.herokuapp.com/api/products")
      .then(
        (response) => this.setState({ products: response.data }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  updateProduct = (event, product) => {
    event.preventDefault();
    const id = event.target.id;

    axios
      .put(
        "https://spamazon-ga-backend.herokuapp.com/api/products/" + id,
        product
      )
      .then((response) => {
        this.getProducts();
      });
  };
  deleteProduct = (event) => {
    axios
      .delete(
        "https://spamazon-ga-backend.herokuapp.com/api/products/" +
          event.target.value
      )
      .then((response) => {
        this.getProducts();
      });
  };
  componentDidMount = () => {
    this.getProducts();
    this.authListener();
  };

  liftStateToApp = (stateObject) => {
    this.setState(stateObject);
  };

  render = () => {
    return (
      <div>
        <Nav
          products={this.state.products}
          triggerCartLimitReset={this.triggerCartLimitReset}
          sumOfCart={this.state.sumOfCart}
          cartItems={this.state.cartItems}
          user={this.state.user}
          showCartItems={this.showCartItems}
          logOut={this.logOut}
        />

        <UnderNav user={this.state.user} products={this.state.products} />

        <AddForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          addProduct={this.addProduct}
          user={this.state.user}
        />
        <Products
          triggerCartLimitDown={this.triggerCartLimitDown}
          triggerCartLimitUp={this.triggerCartLimitUp}
          cartLimit={this.state.cartLimit}
          checkoutOpenedOnce={this.state.checkoutOpenedOnce}
          sumOfCart={this.state.sumOfCart}
          showCartItems={this.showCartItems}
          cartItems={this.state.cartItems}
          products={this.state.products}
          liftStateToApp={this.liftStateToApp}
          updateProduct={this.updateProduct}
          deleteProduct={this.deleteProduct}
          user={this.state.user}
        />
      </div>
    );
  };
}

export default App;
