import React from 'react';

class ProductDetail extends React.Component {


    render = () => {

      return (
        <div id="active-product">
            <h2> Name: {this.props.activeProduct.name} </h2>
            <img className="product-img" src={this.props.activeProduct.image} alt="" />
        </div>
      )
    }
}

export default ProductDetail;
