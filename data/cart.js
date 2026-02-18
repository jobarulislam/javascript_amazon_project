export let cart = JSON.parse(localStorage.getItem('cart'));

/*
    IIFE function syntax
(function())()
(()=> {})()


(function(){
    let sum = 0;
    cart.length > 0 ? cart.forEach(item => {
        sum+=item.quantity;
    }) : 0
    document.getElementById("nav-cart-count").innerHTML = sum;
})()
    */
if (!cart){
cart = [{
    productId:'3ebe75dc-64d2-4137-8860-1f5a963e534b',
    quantity : 2,
    deliveryOptionsId: '1'

},
{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
    deliveryOptionsId: '2'
}];
}
function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    if (matchingItem) {
        matchingItem.quantity += 1;
    }
    else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionsId: '1'
        });
    }

    saveToStorage();
}
 export function updateDeliveryOption(productId, deliveryOptionId ){
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }

    });
    cart = newCart;

    saveToStorage();
}
