import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="connect-div">
          <h1>CONNECT WITH ME</h1>
        </div>
        <div className="personal-div">
          <div className="personal-divs">
            <h1>Andy Checo</h1>

            <a href="https://www.linkedin.com/in/andy-checo/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/SavedCity">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <h3>Thank you for shopping at Spamazon ©</h3>
      </div>
    );
  }
}
