import React from "react";
import ProductDetail from "./ProductDetail";
import Edit from "./Edit";
import Cart from "./Cart";

class ViewProduct extends React.Component {
  findProduct = (e) => {
    let products = this.props.products;
    for (let i = 0; i < products.length; i++) {
      // eslint-disable-next-line
      if (e.target.previousSibling.id == products[i].id) {
        this.props.toggleActiveProduct(products[i]);
      }
    }
  };

  addDefaultSrc = (ev) => {
    ev.target.src = "../favicon.ico";
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
                      onError={this.addDefaultSrc}
                    />
                    <button onClick={this.findProduct} className="view-button">
                      VIEW
                    </button>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      flexDirection: "column",
                      width: "70%",
                    }}
                  >
                    <h2 className="item-name"> {item.name} </h2>

                    <h2 className="item-price">${item.price} </h2>

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
                  {this.props.user ? (
                    <Edit
                      user={this.props.user}
                      item={item}
                      updateProduct={this.props.updateProduct}
                      deleteProduct={this.props.deleteProduct}
                    />
                  ) : null}
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
