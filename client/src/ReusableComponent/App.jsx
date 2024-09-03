// import React, { useState } from 'react';
// import HeaderComponent from './HeaderComponent';
// // import Restaurant1Component from './Restaurant1Component';
// import FoodComponent from '../UI/Restaurant1/FoodComponent';

// function App() {
//     const [cart, setCart] = useState([]);
//     const [isCartVisible, setCartVisible] = useState(false);

//     const toggleCartVisibility = () => {
//         setCartVisible(!isCartVisible);
//     };

//     // const addToCart = (product) => {
//     //     setCart((prevCart) => {
//     //         const existingProduct = prevCart.find(item => item._id === product._id);
    
//     //         if (existingProduct) {
//     //             console.log(`Updating quantity for product ID: ${product._id}`);
//     //             return prevCart.map(item =>
//     //                 item._id === product._id
//     //                     ? { ...item, quantity: item.quantity + 1 }
//     //                     : item
//     //             );
//     //         } else {
//     //             console.log(`Adding new product ID: ${product._id}`);
//     //             return [...prevCart, { ...product, quantity: 1 }];
//     //         }
//     //     });
//     // };
    
//     const removeFromCart = (productToRemove) => {
//         setCart(cart.filter(product => product._id !== productToRemove._id));
//     };

//     const increaseQuantity = (product) => {
//         setCart(cart.map(item =>
//             item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
//         ));
//     };

//     const decreaseQuantity = (product) => {
//         setCart(cart.map(item =>
//             item._id === product._id
//                 ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
//                 : item
//         ));
//     };

//     const checkout = () => {
//         const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//         alert(`Thank you for your purchase! Total amount: $${totalAmount.toFixed(2)}`);
//         setCart([]);
//     };

//     return (
//         <div>
//             <HeaderComponent
//                 cart={cart}
//                 toggleCartVisibility={toggleCartVisibility}
//                 isCartVisible={isCartVisible}
//                 removeFromCart={removeFromCart}
//                 increaseQuantity={increaseQuantity}
//                 decreaseQuantity={decreaseQuantity}
//                 checkout={checkout}
//             />
            
//         </div>
//     );
// }

// export default App;
