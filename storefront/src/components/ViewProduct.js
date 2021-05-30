import React from "react";
import Edit from "./Edit";

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
    <div className='products'>
      {this.props.products.map((item) => {
        return (
          <div key={item.id}>
            <h2> Name: {item.name} </h2>
            <img className='product-img' id={item.id} src={item.image} alt={item.name} onClick={this.findProduct}/>
            <h2> Price: {item.price} </h2>
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
        );
      })}
    </div>
  )
  }
}
export default ViewProduct;
// <div name={this.props.item.id} onClick={this.props.findProduct}>

//   </div>
