import React from "react";

class ProductDetail extends React.Component {
  render = () => {
    return (
      <div id="active-product">
        <h4> {this.props.activeProduct.created_by} </h4>
        <h4> {this.props.activeProduct.created_at} </h4>

        <img
          className="product-img"
          src={this.props.activeProduct.image}
          alt=""
        />

        <h2> {this.props.activeProduct.name} </h2>

        <h3> {this.props.activeProduct.price} </h3>

        <p> {this.props.activeProduct.description} </p>
      </div>
    );
  };
}

export default ProductDetail;
