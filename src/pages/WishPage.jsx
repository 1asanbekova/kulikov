import React from "react";
import Wish from "../components/Wish/Wish";
import { useWish } from "../contexts/WishListContextProvider";
import { getCountProductsInWish } from "../helpers/function";

const WishPage = () => {
  const { wish, addProductToWish } = useWish();

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCountProductsInWish);
  }, [addProductToWish]);
  return (
    <div className="cartPage">
      <div className="headerBox">
        <h1 className="headerCart" style={{ width: "30%" }}>
          ИЗБРАННОЕ ({count})
        </h1>
      </div>
      <div className="cartBody">
        <div className="cart-left">
          <Wish />
        </div>
      </div>
    </div>
  );
};

export default WishPage;
