import React from "react";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import fire from "./config/fire";
import AddForm from "./components/AddForm";
import Nav from "./components/Nav";
import axios from "axios";

class App extends React.Component {
  state = {
    products: [],
    user: {},
  };

  // AUTHENTICATION
  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  logOut = () => {
    fire.auth().signOut();
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
    this.setState(stateObject)
  }

  render = () => {
    return (
        <div>
          <Nav user={this.state.user} logOut={this.logOut} />
          <h1>Spamazon's black market (keep secret)</h1>
          <Products
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
