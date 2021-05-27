import React from "react";
import Edit from "./Edit";

// import ViewProduct from "./ViewProduct";

class Products extends React.Component {
  addToCart = () => {};

  render() {
    return (
      <div>
        <h5>By {this.props.item.created_by} </h5>
        <h5>{this.props.item.created_at}</h5>

        <h2> Name: {this.props.item.name} </h2>

        <img src={this.props.item.image} />

        <h2> Price: {this.props.item.price} </h2>

        <details>
          <summary>Edit</summary>
          <Edit
            user={this.props.user}
            item={this.props.item}
            updateProduct={this.props.updateProduct}
            deleteProduct={this.props.deleteProduct}
          ></Edit>
        </details>

        {this.props.user ? <button> Add to cart </button> : null}
      </div>
    );
  }
}
// For user product click page (goes inside return but can't comment out)
// <ViewProduct item={this.props.item} />

export default Products;
