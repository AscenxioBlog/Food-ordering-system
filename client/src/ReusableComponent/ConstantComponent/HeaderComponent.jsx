import React from "react";
import PropTypes from "prop-types";
import Cart from "../Cart";

function HeaderComponent({
  cart,
  toggleCartVisibility,
  isCartVisible,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  checkout,
}) {
  return (
    <div
      className="head h-[100px] w-full bg-[#5F8670]"
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        zIndex: 20,
        transition: "1s",
      }}
    >
      <div className="h-[80px] w-full grid grid-cols-[35%,20%,30%] md:grid-cols-[20%,60%,18%] lg:grid-cols-[20%,60%,18%] gap-1 justify-between ">
        <div className="bg-[] text-[35px] font-extrabold text-[#FF5A3C] flex justify-center items-center">
          <h1 className="logo">
            <a href="/">
              Feed<span className="text-white">Me</span>
            </a>
          </h1>
        </div>
        <div className="flex items-center ">
          <div className="hidden md:inline-block lg:inline-block bg-[] text-[21px] font-bold pl-[80px] ">
            <ol className="flex gap-[30px] ">
              <li className="text-[#FF5A3C]">
                <a href="/Restuarant">Restaurants</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/auth">Support</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="bg-[] flex justify-center items-center relative">
          <button
            className="h-[40px] w-[150px] bg-[#FF5A3C] text-[18px] text-white font-semibold rounded-[20px]"
            onClick={toggleCartVisibility}
          >
            Cart ({cart.length})
          </button>
          {isCartVisible && (
            <div className="absolute top-[100%] right-0 mt-2 w-[400px] bg-white border border-gray-300 shadow-lg z-10">
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                checkout={checkout}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

HeaderComponent.propTypes = {
  cart: PropTypes.array.isRequired,
  toggleCartVisibility: PropTypes.func.isRequired,
  isCartVisible: PropTypes.bool.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
};

export default HeaderComponent;
