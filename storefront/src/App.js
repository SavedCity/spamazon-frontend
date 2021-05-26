import React from "react";
import Products from "./components/Products";
<<<<<<< HEAD
import AddForm from './components/AddForm'
=======
import SignIn from "./components/SignIn";
import fire from "./config/fire";
import AddForm from "./components/AddForm";
import Nav from "./components/Nav";
>>>>>>> 8e1cfaaa424224b6567e084863260068b149700e
import axios from "axios";
import Edit from "./components/Edit"

class App extends React.Component {
  state = {
    products: [],
<<<<<<< HEAD
=======
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
>>>>>>> 8e1cfaaa424224b6567e084863260068b149700e
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
      event.preventDefault()
      const id = event.target.id

      axios.put("https://spamazon-ga-backend.herokuapp.com/api/products/"+id,
  product).then((response) => {
      this.getProducts()
  })
  }
  componentDidMount = () => {
    this.getProducts();
    this.authListener();
  };

  render = () => {
    return (
      <div>
<<<<<<< HEAD
        <h1>Spamazon's black market (keep secret)</h1>
=======
        <Nav user={this.state.user} logOut={this.logOut} />
        <h1>Spamazon's black market (keep secret)</h1>

        {this.state.user ? (
          <AddForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            addProduct={this.addProduct}
            user={this.state.user}
          />
        ) : null}

>>>>>>> 8e1cfaaa424224b6567e084863260068b149700e
        {this.state.products.map((item) => {
          return (
            <div key={item.id}>
              <Products item={item} />
<<<<<<< HEAD
              <details>
              <summary>Edit</summary>
              <Edit products = {item} updateProduct = {this.updateProduct}></Edit>
              </details>
              <AddForm handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              addProduct={this.addProduct}/>
=======
>>>>>>> 8e1cfaaa424224b6567e084863260068b149700e
            </div>
          );
        })}
      </div>
    );
  };
}

export default App;
