import React, { Component } from "react";

export default class AddForm extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    image: "",
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
      [event.target.id]: event.target.value,
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
      created_by: "",
    });
    document.getElementById("form-image").src = "";
    this.closePostModal();
  };

  closePostModal = () => {
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    let modal = document.getElementById("create-form-modal");
    modal.style.display = "none";
  };

  addDefaultSrc = (ev) => {
    ev.target.src = "../favicon.ico";
  };

  render() {
    return (
      <div className="create">
        <div id="create-form-modal">
          <div className="create-form-content">
            <form id="create-form" onSubmit={this.handleSubmit}>
              <div className="create-form-div">
                <h2>POST IT HERE</h2>

                <div className="title-price-div">
                  <div>
                    <label htmlFor="price">Price</label>
                    <input
                      min="1"
                      placeholder="Price"
                      required
                      type="number"
                      id="price"
                      onChange={this.handleChangeNumbers}
                      value={this.state.price}
                    />
                  </div>
                  <div>
                    <label htmlFor="image">Image</label>
                    <input
                      placeholder="Image URL"
                      required
                      type="text"
                      id="image"
                      onChange={this.handleImageChange}
                      value={this.state.image}
                      alt=""
                    />
                  </div>
                </div>
                <label htmlFor="name">Title</label>
                <input
                  placeholder="Title"
                  title="Must be between 5-64 characters long"
                  required
                  pattern="[a-zA-Z\W0-9]{5,64}"
                  type="text"
                  id="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />

                <label htmlFor="description">Description</label>
                <textarea
                  placeholder="Brief description of your product"
                  title="Length must not exceed 300 characters"
                  pattern="[a-zA-Z\W0-9]{0,300}"
                  type="text"
                  id="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                ></textarea>

                <input
                  type="hidden"
                  id="created_by"
                  value={this.state.created_by}
                />

                <input
                  className="post-submit"
                  type="submit"
                  value="SUBMIT PRODUCT"
                />
                <button className="post-back" onClick={this.closePostModal}>
                  CANCEL
                </button>
              </div>
            </form>

            <h3 className="preview-title">IMAGE PREVIEW</h3>

            <h1>Sell something great!</h1>
            <img className="post-svg" src="/images/post.svg" alt="post" />
          </div>
          <div className="post-image">
            <img
              src="../favicon.ico"
              id="form-image"
              onError={this.addDefaultSrc}
              alt="shopping cart"
            />
          </div>
        </div>
      </div>
    );
  }
}
