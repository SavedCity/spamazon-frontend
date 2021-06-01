import React from "react";
import ViewProduct from "./ViewProduct";

class Products extends React.Component {
  state = {
    activeProduct: {},
  };

  toggleActiveProduct = (productObject) => {
    this.setState({
      activeProduct: productObject,
    });
    document.getElementById("active-product-modal").classList.toggle("hide");
  };

  render() {
    return (
      <div>
        <ViewProduct
          cartLimit={this.props.cartLimit}
          toggleActiveProduct={this.toggleActiveProduct}
          checkoutOpenedOnce={this.props.checkoutOpenedOnce}
          sumOfCart={this.props.sumOfCart}
          showCartItems={this.props.showCartItems}
          cartItems={this.props.cartItems}
          products={this.props.products}
          user={this.props.user}
          updateProduct={this.props.updateProduct}
          deleteProduct={this.props.deleteProduct}
          activeProduct={this.state.activeProduct}
          liftStateToApp={this.props.liftStateToApp}
        />
      </div>
    );
  }
}
// For user product click page (goes inside return but can't comment out)
// <ViewProduct item={this.props.item} />

export default Products;
