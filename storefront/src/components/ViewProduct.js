import React from "react";
import ProductDetail from './ProductDetail';
import Edit from "./Edit";
import Cart from "./Cart";

class ViewProduct extends React.Component {


  findProduct = (e) => {
    let products = this.props.products
    for (let i=0; i<products.length; i++) {
      if (e.target.id == products[i].id) {
        this.props.toggleActiveProduct((products[i]))
      }
    }
  }

  render() {
    return (
    <div className="products">
      {this.props.products.map((item) => {
        return (
          <div key={item.id} className="items">
            <h2> {item.name} </h2>

            <img className='product-img' id={item.id} src={item.image} alt={item.name} onClick={this.findProduct}/>

            {item.stock < 10 && item.stock > 4 ? (
              <h4 className="stock-warning">
                ONLY {item.stock} LEFT IN STOCK
              </h4>
            ) : item.stock < 10 && item.stock > 0 ? (
              <h4 className="stock-warning">
                HURRY! ONLY {item.stock} LEFT IN STOCK
              </h4>
            ) : item.stock > 10 ? (
          <h4 className="stock-warning">IN STOCK</h4>
        ) : null}

            <h2> Price: {item.price} </h2>

            {this.props.user ? (
              <Edit
                user={this.props.user}
                item={item}
                updateProduct={this.props.updateProduct}
                deleteProduct={this.props.deleteProduct}
              />
            ) : null}
            <Cart
              item={item}
              user={this.props.user}
              checkoutOpenedOnce={this.props.checkoutOpenedOnce}
              sumOfCart={this.props.sumOfCart}
              showCartItems={this.props.showCartItems}
              cartItems={this.props.cartItems}
              cartLimit={this.props.cartLimit}
              />
        </div>
        )
      })}
      <ProductDetail
        liftStateToApp={this.props.liftStateToApp}
        activeProduct={this.props.activeProduct}
        />
    </div>
  )
  }
}
export default ViewProduct;
