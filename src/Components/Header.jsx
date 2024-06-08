import { useEffect, useState } from "react";

const Header = () => {
  const [button, setbutton] = useState("login");
  let test = "check";
  return (
    <div className="header">
      <div className="logo-container">
        <p className="logo">Namaste Food</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>{test}</li>
          <button
            onClick={() => {
              test = "test";
              setbutton(button === "login" ? "logged out" : "login");
            }}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
