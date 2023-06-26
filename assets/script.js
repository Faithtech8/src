
  const products= [
{
name: 'cherry',
price: 6,
quantity: 0,
productId: 1,
image: 'images/cherry.jpg',
},
{
  name: 'orange',
  price: 6,
  quantity: 0,
  productId: 2,
  image: 'images/orange.jpg',
},
{
  name: 'strawberry',
  price: 6,
  quantity: 0,
  productId: 3,
  image: 'images/strawberry.jpg',
},
  ];

let cart =[];


function addProductToCart(productId) {
products.forEach (product=> {
  if (product.productId ==  products) {
    product.quantity += 1;
    if (cart.includes (product)) cart.push(product);
}})
};

function increaseQuantity(productId) {
products.forEach (product => {
    if (product.productId == product)
    product.quantity +=1;
  });
}




/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/


function decreaseQuantity(productId) {
products.forEach(product => {
  if (product.productId === productId) {
    product.quantity-= 1;
    if (product.quantity === 0) {
      if (index  !==-1) {
        cart.splice(lndex, 1);
      }
    }
}})
};
  


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function removeProductFromCart(productId) {
  for (let i =0; i  <= cart.length; i++) {
     if (cart[i]. productId === productId) {
      cart.splice(i,1);
    console.log ('Remove product with productId');
      break;
     }
    }
  
     
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function cartTotal() 
  let cartTotal= 0;
  cart.forEach ((item) => {
    let itemTotal = item.price* item.quantity;
    cartTotal += itemTotal; 
  });
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function emptyCart() {
  cart = {};
}
/* Create a function called emptyCart that empties the products from the cart */

function pay(amount) {
  let currentCartTotal = cartTotal();
  let diff = amount-totalPaid();
  return diff;
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
