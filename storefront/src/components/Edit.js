import React, { Component } from "react";
export default class Edit extends Component {
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

    this.props.updateProduct(event, this.state);
  };
  render() {
    return (
      <div>
        <form id={this.props.item.id} onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label htmlFor="name"> Price </label>
          <input
            type="number"
            id="price"
            onChange={this.handleChangeNumbers}
            value={this.state.price}
          />

          <label htmlFor="name"> Description </label>
          <input
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />

          <label htmlFor="name"> Image </label>
          <input
            type="text"
            id="image"
            onChange={this.handleChange}
            value={this.state.image}
          />

          <label htmlFor="name"> Stock </label>
          <input
            type="number"
            id="stock"
            onChange={this.handleChangeNumbers}
            value={this.state.stock}
          />

          <input type="hidden" id="created_by" value={this.state.created_by} />

          <input type="submit" value="edit Item" />
        </form>
      </div>
    );
  }
}
