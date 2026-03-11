import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage({ cart, onUpdateQuantity, onRemoveItem }) {
  // Calculate total
  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          {/* Empty state */}
          <p>Your cart is empty</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-page-content">
          {/* Map through cart items */}
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          {/* Show total */}
          <div className="cart-total">
            <h2>Total: ₹{calculateTotal()}</h2>
          </div>

          {/* Continue Shopping and Checkout buttons */}
          <div className="cart-actions">
            <Link to="/" className="btn">Continue Shopping</Link>
            <button className="btn checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;