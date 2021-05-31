import React from 'react';

class ProductDetail extends React.Component {


    render = () => {

      return (
        <div id="active-product">
            <h2> {this.props.activeProduct.name} </h2>
            <img className="product-img" src={this.props.activeProduct.image} alt="" />
            <h4> {this.props.activeProduct.description} </h4>
        </div>
      )
    }
}

export default ProductDetail;
