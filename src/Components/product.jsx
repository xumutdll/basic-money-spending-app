import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  handleSell = (item) => {
    let { basket, changeBasket, basketSum } = this.props;
    var findItem = basket.find((u) => u.id == item.id);

    if (!findItem) {
      //item yok
      return;
    } else {
      //item var
      if (findItem.amount === 0) {
        return;
      } else {
        findItem.amount--;
        findItem.totalPrice = findItem.amount * findItem.price;
        basketSum -= findItem.price;
        return changeBasket(basket, basketSum);
      }
    }
  };

  handleBuy = (item) => {
    let { basket, changeBasket, basketSum } = this.props;
    var findItem = basket.find((u) => u.id == item.id);

    if (!findItem) {
      // item olusturulmalı
      let newBasket = basket;
      item.amount = 1;
      item.totalPrice = item.price;
      basketSum += item.price;
      newBasket.push(item);
      return changeBasket(newBasket, basketSum);
    } else {
      // var olan itemin guncellenmesi
      findItem.amount++;
      findItem.totalPrice = findItem.amount * findItem.price;
      basketSum += findItem.price;
      return changeBasket(basket, basketSum);
    }
  };

  render() {
    let { basket, product } = this.props;
    let selectedProduct = basket.find((u) => u.id == product.id);

    return (
      <div className="product-container">
        <h3>{product.title}</h3>
        <span>Price: {product.price}</span>
        <button onClick={() => this.handleBuy(product)}>Buy</button>
        <button
          disabled={selectedProduct ? !selectedProduct.amount : true}
          onClick={() => this.handleSell(product)}
        >
          Sell
        </button>
        <span>Amount: {selectedProduct ? selectedProduct.amount : 0}</span>
      </div>
    );
  }
}

export default Product;
