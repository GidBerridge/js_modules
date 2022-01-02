// importing module
import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
console.log('Importing module');

import * as ShoppingCart from "./shoppingCart.js";

// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice);

// addToCart('bread', 5);
// console.log(price, tq);


// import add, { cart } from "./shoppingCart.js";
// add('pizza', 2);
// add('bread', 2);
// add('apples', 2);

// console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json();
//     // console.log(data);

//     return {title: data.at(-1).title, text: data.at(-1).body }
// }

// const lastPost = getLastPost();
// console.log(lastPost);

// // lastPost.then(last => console.log(last));
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const shoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
    cart.push({ product, quantity});
    console.log(`${quantity} ${product} added to cart`);
    };
    const orderStock = function(product, quantity) {
    cart.push({ product, quantity});
    console.log(`${quantity} ${product} ordered from supllier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();

shoppingCart2.addToCart('apples', 4);
shoppingCart2.addToCart('pizza', 2);