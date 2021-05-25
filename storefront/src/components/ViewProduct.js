import React from "react";

class ViewProduct extends React.Component {
  render() {
    return (
      <div>
        <h2> Name: {this.props.item.name} </h2>
        <img src={this.props.item.image} />
        <h4> Price: {this.props.item.price} </h4>
        <p> Details: {this.props.item.description} </p>
        <h2> {this.props.item.stock} left </h2>
      </div>
    );
  }
}

export default ViewProduct;
