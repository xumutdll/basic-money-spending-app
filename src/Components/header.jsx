import React, { Component } from "react";

class Header extends Component {
  render() {
    let { money, basketSum } = this.props;
    return (
      <div>
        <span>Credit: {money} </span>
        <br />
        <span>Basket Sum: {basketSum} </span>
      </div>
    );
  }
}

export default Header;
