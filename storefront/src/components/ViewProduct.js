import React from "react";
import ProductDetail from "./ProductDetail";
import Edit from "./Edit";
import Cart from "./Cart";

class ViewProduct extends React.Component {
  findProduct = (e) => {
    let products = this.props.products;
    for (let i = 0; i < products.length; i++) {
      if (e.target.id == products[i].id) {
        this.props.toggleActiveProduct(products[i]);
      }
    }
  };

  render() {
    return (
      <div id="middle" className="products">
        <div className="products-div">
          {this.props.products
            .slice(0)
            .reverse()
            .map((item) => {
              return (
                <div key={item.id} className="items">
                  <div className="image-div">
                    <img
                      className="product-img"
                      id={item.id}
                      src={item.image}
                      alt={item.name}
                      onClick={this.findProduct}
                    />
                  </div>

                  <h2> {item.name} </h2>

                  <h2>${item.price} </h2>

                  {this.props.user ? (
                    <Edit
                      user={this.props.user}
                      item={item}
                      updateProduct={this.props.updateProduct}
                      deleteProduct={this.props.deleteProduct}
                    />
                  ) : null}
                  <Cart
                    triggerCartLimitDown={this.props.triggerCartLimitDown}
                    triggerCartLimitUp={this.props.triggerCartLimitUp}
                    item={item}
                    user={this.props.user}
                    checkoutOpenedOnce={this.props.checkoutOpenedOnce}
                    sumOfCart={this.props.sumOfCart}
                    showCartItems={this.props.showCartItems}
                    cartItems={this.props.cartItems}
                    cartLimit={this.props.cartLimit}
                  />
                </div>
              );
            })}
        </div>
        <ProductDetail
          liftStateToApp={this.props.liftStateToApp}
          activeProduct={this.props.activeProduct}
        />
      </div>
    );
  }
}
export default ViewProduct;
