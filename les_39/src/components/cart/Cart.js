import React from 'react';
import './Cart.sass';

function Cart() {
  let ranks = [6,7,8,9,10,'J','O','K','T'];
  let suits = ['♥','♦','♠','♣'];
  let suitColor = ['red','black','red','black'];

  let carts = [];
  let numberCart = [];

  for (let i = 0; i < ranks.length; i++){
    for (let k = 0; k < suits.length; k++){
      let obj = {
		  ranks: ranks[i],
		  suits: suits[k],
		  suitColor: suitColor[k]
		};
		numberCart.push(obj);
	 }
  }

  console.log(numberCart);

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

export default Cart;




