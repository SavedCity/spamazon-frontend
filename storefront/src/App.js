import React from "react";
import Products from "./components/Products";
import AddForm from './components/AddForm'
import axios from "axios";

class App extends React.Component {
  state = {
    products: [],
  };
 handleChange = (event) => {
     this.setState({
         [event.target.id] : event.target.value
     })
 }
 addProduct = (product) => {
        axios.post("https://spamazon-ga-backend.herokuapp.com/api/products", product)
        .then (
            (response) => {
                this.getProducts()
            }
        )
    }
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
              <AddForm handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              addProduct={this.addProduct}/>
            </div>
          );
        })}
      </div>
    );
  };
}

export default App;
