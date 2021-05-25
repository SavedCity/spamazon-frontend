import React from "react";
import Products from "./components/Products";

import axios from "axios";

class App extends React.Component {
  state = {
    products: [],
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
  };

  render = () => {
    return (
      <div>
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
