import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice < 2000 ? 0 : 20;
  const discountPrice = cartItems.reduce(
    (a, c) => a + ((c.qty * c.price) / 100) * c.discount,
    0
  );
  const totalPrice = itemsPrice + taxPrice + shippingPrice - discountPrice;

  return (
    <aside>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            {
              <div>
                <div>{item.name}</div>
                <div>
                  <button onClick={() => onRemove(item)}>-</button>{" "}
                  <button onClick={() => onAdd(item)}>+</button>
                </div>

                <div>
                  {item.qty} x RS {item.price.toFixed(2)}
                </div>
              </div>
            }
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div>
              <div>Items Price</div>
              <div>RS{itemsPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Tax Price</div>
              <div>RS{taxPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Shipping Price</div>
              <div>RS{shippingPrice.toFixed(2)}</div>
            </div>
            <div>
              <div>Discount Price</div>
              <div>RS{discountPrice.toFixed(2)}</div>
            </div>

            <div>
              <div>
                <strong>Total Price</strong>
              </div>
              <div>
                <strong>RS{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div>
              <button onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
