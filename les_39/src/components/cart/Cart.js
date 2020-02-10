import React from 'react';
import './Cart.sass';

class Cart extends React.Component{
  constructor(){
    super();
	 this.ranks = [6,7,8,9,10,'J','O','K','T'];
	 this.suits = ['♥','♦','♠','♣'];
	 this.suitColor = ['red','black','red','black'];
  }

  render() {
	 let carts = [];
	 let numberCart = [];

	 for (let i = 0; i < this.ranks.length; i++){
		for (let k = 0; k < this.suits.length; k++){
		  let obj = {
			 ranks: this.ranks[i],
			 suits: this.suits[k],
			 suitColor: this.suitColor[k]
		  };
		  numberCart.push(obj);
		}
	 }

	 numberCart.forEach( (item,i) => {
		let cart = (
		  <div className="cartHor">
			 <div className="cart">
				<div className="side front">
				  <img src="img/cart.png" alt="C"/>
				</div>
				<div className={numberCart[i].suitColor +' side '+'back'}>
				  <span className = "numberFirst">{numberCart[i].ranks}</span>
				  <span className = "elem">{numberCart[i].suits}</span>
				  <span className = "numberLast">{numberCart[i].ranks}</span>
				</div>
			 </div>
		  </div>
		);

		carts.push(cart);
	 });
	 return carts;
  }

}

export default Cart;




