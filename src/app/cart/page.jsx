import { useState } from 'react';

export default function Cart({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + change;
          if (newQty < 1) {
            removeFromCart(id);
            return null;
          }
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Cart ({cart.length})
      </button>

      {isOpen && (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <h3>Shopping Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <img src={item.image} alt={item.name} width="30" />
                      <span>{item.name} - Rp{item.price.toLocaleString()} x {item.quantity}</span>
                    </div>
                    <div>
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span style={{ margin: '0 5px' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '5px', color: 'red' }}>×</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ fontWeight: 'bold', marginTop: '10px' }}>
                Total: Rp{total.toLocaleString()}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}