import React, { Component } from "react";
export default class Edit extends Component {
  state = {
    name: this.props.item.name,
    price: this.props.item.price,
    description: this.props.item.description,
    image: this.props.item.image,
    stock: this.props.item.stock,
    created_by: this.props.item.created_by,
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
            <summary>
              <span class="summary-title">Need to update?</span>
              <div class="summary-chevron-up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </summary>
            <form
              className="edit-form"
              id={this.props.item.id}
              onSubmit={this.handleSubmit}
            >
              <label htmlFor=""> Title </label>
              <input
                title="Must be between 5-64 characters long"
                required
                pattern="[a-zA-Z\W0-9]{5,64}"
                type="text"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="Title"
              />

              <label htmlFor=""> Price </label>
              <input
                step="0.01"
                min="1"
                max="999999999"
                required
                type="number"
                id="price"
                onChange={this.handleChangeNumbers}
                value={this.state.price}
                placeholder="Price"
              />

              <label htmlFor=""> Description </label>
              <textarea
                title="Length must not exceed 300 characters"
                pattern="[a-zA-Z\W0-9]{0,300}"
                type="text"
                id="description"
                onChange={this.handleChange}
                value={this.state.description}
                placeholder="Description"
              ></textarea>

              <label htmlFor=""> Image </label>
              <input
                type="text"
                id="image"
                required
                onChange={this.handleChange}
                value={this.state.image}
                placeholder="Image"
              />

              <input
                type="hidden"
                id="created_by"
                value={this.state.created_by}
              />

              <input className="edit-submit" type="submit" value="UPDATE" />
              <button
                value={this.props.item.id}
                onClick={this.props.deleteProduct}
              >
                REMOVE
              </button>
            </form>
          </details>
        ) : null}
      </div>
    );
  }
}
