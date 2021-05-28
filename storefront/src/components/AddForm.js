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

  handleImageChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    let image = document.getElementById("form-image");

    image.src = event.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      name: "",
      price: "",
      description: "",
      image: "",
      stock: "",
      created_by: "",
    });
    document.getElementById("form-image").src = "";
  };

  render() {
    return (
      <div>
        <h1> add a product!</h1>
        <form id="form" onSubmit={this.handleSubmit}>
          <label htmlFor=""> Name </label>
          <input
            title="Must be between 5-64 characters long"
            required
            pattern="[a-zA-Z\W0-9]{5,64}"
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label htmlFor=""> Price </label>
          <input
            min="0"
            max="999999999"
            required
            type="number"
            id="price"
            onChange={this.handleChangeNumbers}
            value={this.state.price}
          />

          <label htmlFor=""> Description </label>
          <input
            title="Length must not exceed 300 characters"
            pattern="[a-zA-Z\W0-9]{0,300}"
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />

          <label htmlFor=""> Image </label>
          <input
            type="text"
            id="image"
            onChange={this.handleImageChange}
            value={this.state.image}
            alt=""
          />
          <img src="" id="form-image" alt="" />

          <label htmlFor=""> Stock </label>
          <input
            min="0"
            max="1000"
            required
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
