import React from "react";


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
    <div className='product'>
      {this.props.products.map((item) => {
        return (
          <div key={item.id}>
            <h2> Name: {item.name} </h2>
            <img className='product-img' id={item.id} src={item.image} alt={item.name} onClick={this.findProduct}/>
            <h2> Price: {item.price} </h2>
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
