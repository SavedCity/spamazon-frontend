import React, { Component } from "react";
export default class AddForm extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    image: "",
    stock: "",
    created_by: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
      created_by: (this.created_by = this.props.user.email),
    });
  };

  handleChangeNumbers = (event) => {
    this.setState({
      [event.target.id]: parseInt(event.target.value),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProduct(this.state);
  };

  render() {
    return (
      <div>
        <h1> add a product!</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="price"> Price </label>
          <input
            type="number"
            id="price"
            onChange={this.handleChangeNumbers}
            value={this.state.price}
          />
          <label htmlFor="description"> Description </label>
          <input
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <label htmlFor="image"> Image </label>
          <input
            type="text"
            id="image"
            onChange={this.handleChange}
            value={this.state.image}
          />
          <label htmlFor="stock"> Stock </label>
          <input
            type="number"
            id="stock"
            onChange={this.handleChangeNumbers}
            value={this.state.stock}
          />

          <input type="hidden" id="created_by" value={this.state.created_by} />
          <input type="submit" value="Upload Item" />
        </form>
      </div>
    );
  }
}
