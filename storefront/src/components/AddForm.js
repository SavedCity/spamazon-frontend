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
  };

  closePostModal = () => {
    setTimeout(() => {
      document.getElementsByTagName("BODY")[0].style.overflow = "auto";
      let modal = document.getElementById("create-form-modal");
      modal.style.display = "none";
    }, 250);
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
                    <label htmlFor=""> </label>
                    <input
                      min="1"
                      placeholder="Price *"
                      required
                      type="number"
                      id="price"
                      onChange={this.handleChangeNumbers}
                      value={this.state.price}
                    />
                  </div>
                  <div>
                    <label htmlFor=""> </label>
                    <input
                      placeholder="Image URL *"
                      type="text"
                      id="image"
                      onChange={this.handleImageChange}
                      value={this.state.image}
                      alt=""
                    />
                  </div>
                </div>
                <label htmlFor=""> </label>
                <input
                  placeholder="Title *"
                  title="Must be between 5-64 characters long"
                  required
                  pattern="[a-zA-Z\W0-9]{5,64}"
                  type="text"
                  id="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />

                <label htmlFor=""> </label>
                <textarea
                  placeholder="Brief description of the product you are selling with Spamazon *"
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
              </div>
            </form>
            <button className="post-back" onClick={this.closePostModal}>
              CANCEL
            </button>

            <h1>Sell something great!</h1>
            <img className="post-svg" src="/images/post.svg" alt="post" />
          </div>
          <div className="post-image">
            <img
              src="https://www.penworthy.com/Image/Getimage?id=C:\Repositories\Common\About%20Us\Slide1.jpg"
              id="form-image"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
