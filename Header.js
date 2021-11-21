import React from "react";

export default function Header(props) {
  return (
    <header>
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {props.countCartItems ? <button>{props.countCartItems}</button> : ""}
        </a>{" "}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
