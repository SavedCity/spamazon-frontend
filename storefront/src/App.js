import React from "react";
import Products from "./components/Products";
import Users from "./components/Users";
import fire from "./config/fire";

import axios from "axios";

class App extends React.Component {
  state = {
    products: [],
    users: {},
  };

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  logout = () => {
    fire.auth().signOut();
  };

  getProducts = () => {
    axios
      .get("https://spamazon-ga-backend.herokuapp.com/api/products")
      .then(
        (response) => this.setState({ products: response.data }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };

  componentDidMount = () => {
    this.getProducts();
    this.authListener();
  };

  render = () => {
    return (
      <div>
        {this.state.user ? (
          <button onClick={this.logout}>Log out </button>
        ) : (
          <Users />
        )}

        <h1>Spamazon's black market (keep secret)</h1>
        {this.state.products.map((item) => {
          return (
            <div key={item.id}>
              <Products item={item} />
            </div>
          );
        })}
      </div>
    );
  };
}

export default App;
