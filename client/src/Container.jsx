import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./ReusableComponent/ConstantComponent/HeaderComponent";
import FooterComponent from "./ReusableComponent/ConstantComponent/FooterComponent";
import Restaurant1Component from "./UI/Restaurant1/Restaurant1Component";
import IndexComponent from "./UI/IndexComponent/IndexComponent";
import AdminComponent from "./AdminComponent/AdminComponent";
import AddComponent from "./AdminComponent/AddComponent";
import AllRestaurant from "./AdminComponent/AllRestaurant";
import FaqsComponent from "./UI/FaqsComponent/FaqsComponent";
import Authenticator from "./Authenticator/Authenticator";
import RestauarantLandingpage from "./UI/Restaurant1/RestauarantLandingpage";
import AddMenu from "./AdminComponent/AddMenu";
import FoodComponent from "./UI/Restaurant1/FoodComponent";
import Work from "./UI/WorkwithUs/Work";
import RegRestaurant from "./UI/RegRestaurant/RegRestaurant";
import Newsign from "./Authenticator/Newsign";
import CheckoutForm from "./UI/CheckoutForm/CheckoutForm";
import AdminIndex from "./AdminComponent/AdminIndex";
import PaymentComponent from "./UI/PaymentComponent/PaymentComponent";
import AllEvent from "./AdminComponent/AllEvent";
import Profile from "./AdminComponent/Profile";
import CateringComponent from "./UI/CateringComponent/CateringComponent";
// import MisteryComponent from "./UI/MisterySurprise/MisteryComponent";
import MysteryComponent from "./UI/MisterySurprise/MysteryComponent";

function Container() {
  const [cart, setCart] = useState(()=>{
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart):[]
  });

  // Load cart from local storage when the app loads
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    window.dispatchEvent(new Event('storageUpdate'))
  }, [cart]);

  const [isCartVisible, setCartVisible] = useState("-400px");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item._id === product._id);
      
      if (existingProduct) {
        return prevCart.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productToRemove) => {
    setCart(prevCart => prevCart.filter(product => product._id !== productToRemove._id));
  };

  const increaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const checkout = () => {
    const totalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    alert(`Thank you for your purchase! Total amount: $${totalAmount.toFixed(2)}`);
    setCart([]); // Clear the cart after checkout
    localStorage.removeItem('cart'); // Remove cart from local storage after checkout
  };

  const toggleCartVisibility = () => {
    isCartVisible == "-400px"? setCartVisible('0px') : setCartVisible('-400px')
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
          <Route path="/" element={<IndexComponent />} />
          <Route path="/restaurant" element={<Restaurant1Component />} />
          <Route path="/faqs" element={<FaqsComponent />} />
          <Route path="/menu/:restaurantname/:restaurantid" element={<FoodComponent addToCart={addToCart} />} />
          <Route path="/auth" element={<Authenticator />} />
          <Route path='/rider' element={<Work/>}/>
          <Route path='/register' element={<RegRestaurant/>}/>
          <Route path='/checkout' element={<CheckoutForm/>}/>
          <Route path='/payment' element={<PaymentComponent/>}/>
          <Route path='/catering' element={<CateringComponent/>}/>
          <Route path='/gift' element={<MysteryComponent/>}/>
          <Route path="/admin" element={<AdminComponent />}>
            <Route index element={<AdminIndex/>}/>
            <Route path='/admin/add' element={<AddComponent/>}/>
            <Route path='/admin/addmenu' element={<AddMenu/>}/>
            <Route path='/admin/allrestaurant' element={<AllRestaurant/>}/>
            <Route path='/admin/allevent' element={<AllEvent/>}/>
            <Route path='/admin/profile' element={<Profile/>}/>
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default Container;
