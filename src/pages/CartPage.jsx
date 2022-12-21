import React from "react";
import Cart from "../components/Cart/Cart";
import { useCart } from "../contexts/CartContextProvider";
import { getCountProductsInCart } from "../helpers/function";

const CartPage = () => {
  const { cart, addProductToCart } = useCart();

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);
  return (
    <div className="cartPage">
      <div className="headerBox">
        <h1 className="headerCart" style={{ width: "30%" }}>
          ВАША КОРЗИНА ({count})
        </h1>
      </div>
      <div className="cartBody">
        <div className="cart-left">
          {" "}
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
