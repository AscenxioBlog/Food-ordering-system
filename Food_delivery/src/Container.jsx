import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './ConstantComponent/HeaderComponent';
import FooterComponent from './ConstantComponent/FooterComponent';
import Restaurant1Component from './Restaurant1/Restaurant1Component';
import IndexComponent from './IndexComponent/IndexComponent'
import AdminComponent from './AdminComponent/AdminComponent';
import AddComponent from './AdminComponent/AddComponent';
import AllRestaurant from './AdminComponent/AllRestaurant';
import FaqsComponent from './FaqsComponent/FaqsComponent';

function Container() {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

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

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div>
      <BrowserRouter>
        <HeaderComponent
          cart={cart}
          toggleCartVisibility={toggleCartVisibility}
          isCartVisible={isCartVisible}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          checkout={checkout}
        />
        <Routes>
          <Route path='/' element={<IndexComponent/>}/>
          <Route
            path='/Restuarant'
            element={<Restaurant1Component addToCart={addToCart} />}
          />

          <Route path='/faqs' element={<FaqsComponent/>}/>

            <Route path='/admin' element={<AdminComponent/>}>
                <Route path='/admin/add' element={<AddComponent/>}/>
                <Route path='/admin/allres' element={<AllRestaurant/>}/>
            </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default Container;
