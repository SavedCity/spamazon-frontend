import React from "react";
import Products from "./components/Products";
import Users from "./components/Users";
import fire from "./config/fire";
import AddForm from './components/AddForm'
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
