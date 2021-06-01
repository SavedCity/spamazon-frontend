import React from "react";

class UnderNav extends React.Component {
  render() {
    return (
      <div className="undernav">
        {!this.props.user ? (
          <div className="left-div-undernav">
            <h1>YOU SHOP</h1>
            <img
              className="purchase-svg"
              src="/images/purchase.svg"
              alt="purchase"
            />
          </div>
        ) : this.props.user ? (
          <div className="left-div-undernav">
            <h1>HAPPY SHOPPING!</h1>
            <img
              className="purchase-svg"
              src="/images/welcome.svg"
              alt="purchase"
            />
          </div>
        ) : null}
        <div className="middle-div-undernav">
          <div className="left-heading-div">
            <h4 className="main-heading1">
              Products layed out just for your needs, right at your door, all
              year long
            </h4>
          </div>
          <div className="right-heading-div">
            <h4 className="main-heading2">
              With an unlimited amount of supply just so you don't have to worry
              about low stock
            </h4>
          </div>
        </div>
        {!this.props.user ? (
          <div className="right-div-undernav">
            <img
              className="deliveries-svg"
              src="/images/deliveries.svg"
              alt="purchase"
            />
            <h1>WE DELIVER IT</h1>
          </div>
        ) : (
          <div className="right-div-undernav">
            <img
              className="deliveries-svg"
              src="/images/hello.svg"
              alt="purchase"
            />
            <h1>HEY, ENJOY!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default UnderNav;
