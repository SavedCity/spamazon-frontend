import React from "react";

class ProductDetail extends React.Component {
  close = (e) => {
    // document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    const modalBackground = document.querySelector(".product-modal-background");
    if (e.target.classList.contains("product-modal-background")) {
      modalBackground.classList.toggle("hide");
    }
  };

  addDefaultSrc = (ev) => {
    ev.target.src = "../favicon.ico";
  };

  render = () => {
    return (
      <div
        onClick={this.close}
        id="active-product-modal"
        className="product-modal-background hide"
      >
        <div className="product-modal">
          <div className="product-left-div">
            <h6>
              <span style={{ color: "#333" }}>Date posted: </span>
              {this.props.activeProduct.created_at}
            </h6>
            <h5>
              <span style={{ color: "#333" }}>Seller: </span>
              {this.props.activeProduct.created_by}
            </h5>
            <h4> {this.props.activeProduct.name} </h4>
            <img
              className="product-img-modal"
              src={this.props.activeProduct.image}
              alt={this.props.activeProduct.name}
              onError={this.addDefaultSrc}
            />
            <h3>
              <span style={{ color: "#282828" }}> Price: </span>
              {this.props.activeProduct.price}
            </h3>
          </div>
          <div className="product-right-div">
            <h1>DESCRIPTION</h1>
            <h2> {this.props.activeProduct.description} </h2>
          </div>
        </div>
      </div>
    );
  };
}

export default ProductDetail;
