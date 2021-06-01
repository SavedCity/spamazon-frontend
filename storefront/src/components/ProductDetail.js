import React from "react";

class ProductDetail extends React.Component {
  close = (e) => {
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    const modalBackground = document.querySelector(".product-modal-background");
    if (e.target.classList.contains("product-modal-background")) {
      modalBackground.classList.toggle("hide");
    }
  };

  render = () => {
    return (
      <div
        id="active-product-modal"
        className="product-modal-background hide"
        onClick={this.close}
      >
        <div className="product-modal">
          <h2> {this.props.activeProduct.name} </h2>
          <img
            className="product-img"
            src={this.props.activeProduct.image}
            alt={this.props.activeProduct.name}
          />
          <h4> {this.props.activeProduct.created_by} </h4>
          <h4> {this.props.activeProduct.price} </h4>
          <p> {this.props.activeProduct.description} </p>
        </div>
      </div>
    );
  };
}

export default ProductDetail;
