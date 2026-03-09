import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  let items = getCartItems();
  let subtotal = getCartTotal();

  if (items.length === 0) {
    return { status: "failed", message: "Cart is empty" };
  }

  // 2. Apply discount if coupon provided
  let discountData = applyDiscount(subtotal, couponCode, items);

  // 3. Validate payment method (card/upi/cod)
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  // 4. Process payment (simulate)

  // 5. Reduce stock for all items
  for (let i = 0; i < items.length; i++) {
    reduceStock(items[i].productId, items[i].quantity);
  }

  // 6. Clear cart
  clearCart();

  // 7. Generate order summary
  // Return order summary:
  // { orderId: ..., items: [...], subtotal: ..., discount: ..., total: ..., paymentMethod: ..., status: 'success/failed', message: '...' }

  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod: paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}

export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
  let validMethods = ["card", "upi", "cod"];

  for (let i = 0; i < validMethods.length; i++) {
    if (validMethods[i] === method) {
      return true;
    }
  }

  return false;
}

function generateOrderId() {
  // Generate random order ID
  return 'ORD' + Date.now();
}