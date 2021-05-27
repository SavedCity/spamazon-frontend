import React from "react";
// import ViewProduct from "./ViewProduct";
import {Link} from 'react-router-dom';
import ViewProduct from './ViewProduct';

class Products extends React.Component {

  render() {
    return (
      <div>
        <h6>By {this.props.item.created_by} </h6>
        <h2> Name: {this.props.item.name} </h2>
        <Link to={`/${this.props.item.id}`} ><img src={this.props.item.image} alt={this.props.item.name} /></Link>
        <h2> Price: {this.props.item.price} </h2>
        <ViewProduct item={this.props.item} />
      </div>
    );
  }
}
// For user product click page (goes inside return but can't comment out)
// <ViewProduct item={this.props.item} />

export default Products;
