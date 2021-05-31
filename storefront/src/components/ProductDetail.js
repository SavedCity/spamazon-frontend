import React from 'react';

class ProductDetail extends React.Component {


    render = () => {

      return (
        <div id="active-product">
<<<<<<< HEAD
            <h2> {this.props.activeProduct.name} </h2>
=======
            <h2>  {this.props.activeProduct.name} </h2>
>>>>>>> e0421f241b90b7e9db788e5b3bfb325ec13ff34e
            <img className="product-img" src={this.props.activeProduct.image} alt="" />
            <h4> {this.props.activeProduct.description} </h4>
        </div>
      )
    }
}

export default ProductDetail;
