import React from "react";
import "./CartItem.css";

function CartItem({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearCart,
}) {
  console.log(cartItems);
  ///-----total price------///
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items modal-backdrop">
      <h2 className="cart-items-header">Cart-Item</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-btn" onClick={() => handleClearCart()}>
            Clear Carts
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="cart-item-empty">No items are added.</div>
      )}
      <div>
        {cartItems &&
          cartItems.map((item, index) => {
            return (
              <div key={index} className="cart-item-list">
                <img
                  className="cart-image"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="cart-items-name">{item.title}</div>
                <div className="cart-item-func">
                  <button
                    className="cart-item-add"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="cart-item-remove"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
                <div className="cart-item-price">
                  ${item.quantity * item.price}
                </div>
              </div>
            );
          })}
      </div>
      <div className="cart-item-total-price-name">
        Total Price
        <div className="cart-item-total-price">${totalPrice}</div>
      </div>
    </div>
  );
}

export default CartItem;
