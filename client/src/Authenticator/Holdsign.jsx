import React, { useEffect } from "react";
import SignIn2 from "./SignIn2";
import Signup2 from "./Signup2";

function Holdsign({login,setLogin,setIsAuthenticated}) {
  const switchers = [...document.querySelectorAll(".switcher")];

  switchers.forEach((item) => {
    item.addEventListener("click", function () {
      switchers.forEach((item) =>
        item.parentElement.classList.remove("is-active")
      );
      this.parentElement.classList.add("is-active");
    });
  });

  useEffect(() => {
    if (login !== '-130vh') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount or when login changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [login]);

  const handleLoginSuccess = (boo,num) => {
    localStorage.setItem("isAuthenticated", boo);
    setIsAuthenticated(boo); // Set user as authenticated
    setLogin(num); 

  };

  return (
    <div className="forms-section bg-[#1616146b] w-full transition-all duration-300" style={{marginTop:login}} onClick={()=>setLogin('-130vh')}>
      <div className="forms" onClick={(e)=>e.stopPropagation()}>
        <SignIn2 onLoginSuccess={handleLoginSuccess}/>
        <Signup2 onLoginSuccess={handleLoginSuccess}/>
      </div>
    </div>
  );
}

export default Holdsign;
