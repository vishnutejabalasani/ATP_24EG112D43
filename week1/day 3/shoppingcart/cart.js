import { getProductById, checkStock } from './product.js';

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
  // 1. Get product details
  let product = getProductById(productId);

  // 2. Check stock availability
  if (!product) {
    return "Product not found";
  }

  if (!checkStock(productId, quantity)) {
    return "Stock not available";
  }

  // 3. Check if product already in cart
  let found = false;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].productId === productId) {
      // - If yes, update quantity
      cartItems[i].quantity += quantity;
      found = true;
      break;
    }
  }

  // - If no, add new item
  if (!found) {
    cartItems.push({ productId: productId, quantity: quantity });
  }

  // 4. Return success/error message
  return "Item added to cart";
}

export function removeFromCart(productId) {
  // Remove product from cart
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].productId === productId) {
      cartItems.splice(i, 1);
      return "Item removed from cart";
    }
  }
  return "Item not found in cart";
}

export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating
  if (!checkStock(productId, newQuantity)) {
    return "Stock not available";
  }

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].productId === productId) {
      cartItems[i].quantity = newQuantity;
      return "Quantity updated";
    }
  }

  return "Item not found";
}

export function getCartItems() {
  // Return all cart items with product details
  let result = [];

  for (let i = 0; i < cartItems.length; i++) {
    let product = getProductById(cartItems[i].productId);

    result.push({
      productId: cartItems[i].productId,
      name: product.name,
      price: product.price,
      quantity: cartItems[i].quantity,
      total: product.price * cartItems[i].quantity
    });
  }

  return result;
}

export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
  let total = 0;
  let items = getCartItems();

  for (let i = 0; i < items.length; i++) {
    total += items[i].total;
  }

  return total;
}

export function clearCart() {
  // Empty the cart
  cartItems = [];
}