import React from "react";
import ViewProduct from './ViewProduct'
import ProductDetail from './ProductDetail'

class Products extends React.Component {
  state = {
    activeProduct: {}
  }
  addToCart = () => {};

  toggleActiveProduct = (productObject) => {
    this.setState(
        {
            activeProduct: productObject
        }
    )
    document.getElementById('active-post').classList.toggle('hide')
  }

  render() {
    return <div>
      <ViewProduct toggleActiveProduct={this.toggleActiveProduct}
      products={this.props.products}
      user={this.props.user}
      updateProduct={this.props.updateProduct}
      deleteProduct={this.props.deleteProduct}
      />
      <ProductDetail activeProduct={this.state.activeProduct} liftStateToApp={this.props.liftStateToApp}
      />

    </div>
  }
}
// For user product click page (goes inside return but can't comment out)
// <ViewProduct item={this.props.item} />

export default Products;
