import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import Restaurant1Component from './Restaurant1Component';

function App() {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!isCartVisible);
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingProductIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1;
                return updatedCart;
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product.id !== productToRemove.id));
    };

    const increaseQuantity = (product) => {
        setCart(cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (product) => {
        setCart(cart.map(item =>
            item.id === product.id
                ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                : item
        ));
    };

    const checkout = () => {
        const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        alert(`Thank you for your purchase! Total amount: $${totalAmount.toFixed(2)}`);
        setCart([]);
    };

    return (
        <div>
            <HeaderComponent
                cart={cart}
                toggleCartVisibility={toggleCartVisibility}
                isCartVisible={isCartVisible}
            />
            <Restaurant1Component
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                checkout={checkout}
            />
        </div>
    );
}

export default App;
