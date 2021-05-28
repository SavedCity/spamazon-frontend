import React from "react";
import Edit from "./Edit";
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
      />
      <ProductDetail activeProduct={this.state.activeProduct} liftStateToApp={this.props.liftStateToApp}/>
      <div>
        {this.props.user ? (
          <Edit
            user={this.props.user}
            item={this.props.item}
            updateProduct={this.props.updateProduct}
            deleteProduct={this.props.deleteProduct}
          ></Edit>
        ) : null}
        {this.props.user ? <button> Add to cart </button> : null}
      </div>
    </div>
  }
}
// For user product click page (goes inside return but can't comment out)
// <ViewProduct item={this.props.item} />

export default Products;
