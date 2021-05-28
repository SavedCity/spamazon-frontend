import React from 'react';

class ProductDetail extends React.Component {

    render = () => {
      return (
        <div id="active-post">
          <h2> By {this.props.activeProduct.created_by} </h2>
          <h2> Name: {this.props.activeProduct.name} </h2>
          <img src={this.props.activeProduct.image} alt={this.props.activeProduct.name} />
          <h4> Price: {this.props.activeProduct.price} </h4>
          <p> Details: {this.props.activeProduct.description} </p>
          <h2> {this.props.activeProduct.stock} left </h2>
        </div>
      )
    }
}

export default ProductDetail;
