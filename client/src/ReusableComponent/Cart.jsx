import React from 'react';

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity, checkout }) {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart-items p-5 ">
      <h2 className="text-xl font-bold">Cart Items:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="border-b py-2 flex items-center">
            <img src={item.image} alt={item.Name} className="w-16 h-16 object-cover mr-4" />
            <div className="flex-1">
              <p className="font-bold">{item.Name}</p>
              <p>Price: ${item.price}</p>
              <p>SubTotal: ${item.price * item.quantity}</p>
            </div>
            <div className="flex gap-2 items-center">
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded"
                onClick={() => increaseQuantity(item)}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => decreaseQuantity(item)}
              >
                -
              </button>
              <button
                className="text-red-500 font-bold"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
