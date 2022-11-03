import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./Components/header";
import Product from "./Components/product";
import products from "./Components/products.json";

class App extends Component {
  state = { money: 10000, basket: [], basketSum: 0 };

  changeBasket = (basket, basketSum) => {
    this.setState({ basket, basketSum });
  };

  render() {
    let { money, basket, basketSum } = this.state;

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Header money={money} basketSum={basketSum} />
        <div className="all-products">
          {products.map((item) => (
            <Product
              key={item.id}
              product={item}
              changeBasket={this.changeBasket}
              basket={basket}
              basketSum={basketSum}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
