import React, { createContext, useContext, useReducer } from "react";
import { CART, WISH } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInWish,
} from "../helpers/function";
const wishContext = createContext();

export const useWish = () => {
  return useContext(wishContext);
};

const INIT_STATE = {
  wish: JSON.parse(localStorage.getItem("wish")),
  wishLength: getCountProductsInWish(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case WISH.GET_WISH:
      return { ...state, wish: action.payload };
    case WISH.GET_WISH_LENGTH:
      return { ...state, wishLength: action.payload };
    default:
      return state;
  }
}
const WishContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getWish = () => {
    let wish = JSON.parse(localStorage.getItem("wish"));

    if (!wish) {
      localStorage.setItem(
        "wish",
        JSON.stringify({ products: [], totalPrice: 0 })
      );

      wish = { products: [], totalPrice: 0 };
    }

    dispatch({
      type: WISH.GET_CART,
      payload: wish,
    });
  };

  const addProductToWish = (product) => {
    let wish = JSON.parse(localStorage.getItem("wish"));

    if (!wish) {
      wish = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = wish.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length == 0) {
      wish.products.push(newProduct);
    } else {
      wish.products = wish.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    wish.totalPrice = calcTotalPrice(wish.products);
    localStorage.setItem("wish", JSON.stringify(wish));

    dispatch({
      type: WISH.GET_WISH,
      payload: wish,
    });
  };

  const changeProductCount = (count, id) => {
    let wish = JSON.parse(localStorage.getItem("wish"));

    wish.products = wish.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    wish.totalPrice = calcTotalPrice(wish.products);
    localStorage.setItem("wish", JSON.stringify(wish));

    dispatch({
      type: WISH.GET_WISH,
      payload: wish,
    });
  };

  function deleteWishProduct(id) {
    let wish = JSON.parse(localStorage.getItem("wish"));
    wish.products = wish.products.filter((elem) => elem.item.id !== id);
    wish.totalPrice = calcTotalPrice(wish.products);
    localStorage.setItem("wish", JSON.stringify(wish));
    getWish();

    dispatch({
      type: WISH.GET_WISH_LENGTH,
      payload: wish,
    });
  }

  function checkProductInWish(id) {
    let wish = JSON.parse(localStorage.getItem("wish"));
    if (wish) {
      let newwish = wish.products.filter((elem) => elem.item.id == id);
      return newwish.length > 0 ? true : false;
    } else {
      wish = {
        product: [],
        totalPrice: 0,
      };
    }
  }

  const values = {
    changeProductCount,
    checkProductInWish,
    getWish,
    addProductToWish,
    wish: state.wish,
    deleteWishProduct,
  };
  return <wishContext.Provider value={values}>{children}</wishContext.Provider>;
};

export default WishContextProvider;
