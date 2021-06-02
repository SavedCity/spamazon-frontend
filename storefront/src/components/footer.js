import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="connect-div">
          <h1>CONNECT WITH US</h1>
        </div>
        <div className="personal-div">
          <div className="personal-divs">
            <h1>Andy Checo</h1>

            <a href="https://www.linkedin.com/in/andy-checo/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/SavedCity">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div className="personal-divs">
            <h1>Jesse Moryn</h1>

            <a href="https://www.linkedin.com/in/jessemoryn/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/jmoryn">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div className="personal-divs3">
            <h1>Troy Redway</h1>

            <a href="https://www.linkedin.com/in/troyredway/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Anthourn">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <h3>Thank you for shopping with Spamazon ©</h3>
      </div>
    );
  }
}
