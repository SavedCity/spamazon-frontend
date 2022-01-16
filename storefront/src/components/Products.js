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
    // document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    document.getElementById("active-product-modal").classList.toggle("hide");
  };
  render() {
    return (
      <div>
        <div style={{ position: "relative" }}>
          <h1 className="product-title">
            FIND WHAT YOUR DESERVE,
            <span style={{ color: "#0077b699" }}> FIND SOMETHING NEW</span>
          </h1>
          <div className="arrow"></div>
        </div>
        {!this.props.loading ? (
          <ViewProduct
            triggerCartLimitDown={this.props.triggerCartLimitDown}
            triggerCartLimitUp={this.props.triggerCartLimitUp}
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
        ) : (
          <div className="loading-box">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h1 className="loading-h1">Loading Spamazon Products</h1>
          </div>
        )}
      </div>
    );
  }
}
// For user product click page (goes inside return but can't comment out)
// <ViewProduct item={this.props.item} />

export default Products;
