import React, { Component } from "react";
export default class Edit extends Component {
  state = {
    name: this.props.item.name,
    price: this.props.item.price,
    description: this.props.item.description,
    image: this.props.item.image,
    stock: this.props.item.stock,
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

  // handleImageChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.value,
  //   });
  //   let image = document.getElementById("form-edit-image");
  //
  //   image.src = event.target.value;
  // };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.updateProduct(event, this.state);
  };
  render() {
    return (
      <div>
        {this.props.user.email === this.props.item.created_by ? (
          <details>
            <summary>Edit</summary>
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
                placeholder={this.props.item.name}
              />

              <label htmlFor=""> Price </label>
              <input
                step="0.01"
                min="0"
                max="999999999"
                required
                type="number"
                id="price"
                onChange={this.handleChangeNumbers}
                value={this.state.price}
                placeholder={this.props.item.price}
              />

              <label htmlFor=""> Description </label>
              <input
                title="Length must not exceed 300 characters"
                pattern="[a-zA-Z\W]{0,300}"
                type="text"
                id="description"
                onChange={this.handleChange}
                value={this.state.description}
                placeholder={this.props.item.description}
              />

              <label htmlFor=""> Image </label>
              <input
                type="text"
                id="image"
                onChange={this.handleChange}
                value={this.state.image}
                placeholder={this.props.item.image}
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
                placeholder={this.props.item.stock}
              />

              <input
                type="hidden"
                id="created_by"
                value={this.state.created_by}
              />

              <input type="submit" value="edit Item" />
              <button
                value={this.props.item.id}
                onClick={this.props.deleteProduct}
              >
                Delete
              </button>
            </form>
          </details>
        ) : null}
      </div>
    );
  }
}
