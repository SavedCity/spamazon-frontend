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
          <label htmlFor=""> Name </label>
          <input
            title="Must be between 5-64 characters long"
            required
            pattern="[a-zA-Z\W]{5,64}"
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
            pattern="[a-zA-Z\W]{0,300}"
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />

          <label htmlFor=""> Image </label>
          <input
            type="text"
            id="image"
            onChange={this.handleChange}
            value={this.state.image}
          />

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

          <input type="submit" value="edit Item" />
        </form>
      </div>
    );
  }
}
