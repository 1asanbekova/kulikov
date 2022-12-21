import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import "../Products/counterButton.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/system";
import "../Details/Counter.css";
import { useCart } from "../../contexts/CartContextProvider";
import { useProducts } from "../../contexts/ProductContextProvider";
import { IconButton } from "@mui/material";
import { useWish } from "../../contexts/WishListContextProvider";

const ProductCounter = () => {
  const { productDetails, getProductDetails } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToWish } = useWish();

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((prev) => (prev += 1));
  };

  const decrement = () => {
    count >= 1 ? setCount((prev) => (prev -= 1)) : setCount(0);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "10px",
          margin: "15px",
          padding: "20px",
        }}
      >
        <Box
          className="counter_button"
          component="div"
          sx={{
            border: "1px solid",
            width: "70px",
            height: "28px",
            marginTop: "1px",
            marginRight: "15px",
          }}
        >
          <div>
            <RemoveIcon
              className="remove_icon"
              onClick={() => decrement()}
              sx={{ marginRight: "6px" }}
            />
          </div>
          <div>
            <div>{count}</div>
          </div>
          <div>
            <AddIcon
              className="add_icon"
              onClick={increment}
              sx={{ marginLeft: "6px" }}
            />
          </div>
        </Box>

        <Box sx={{ width: "10%", backgroundColor: "rgb(77, 17, 111)" }}>
          <IconButton onClick={() => addProductToWish(productDetails)}>
            <BookmarkBorderIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {checkProductInCart(productDetails.id) ? (
          <Button
            variant="contained"
            onClick={() => addProductToCart(productDetails)}
            sx={{
              backgroundColor: "rgb(77, 17, 111)",
              ml: 3,
              width: "80%",
              ":hover": {
                backgroundColor: "white",
                border: "2px solid #9c69cb",
                color: "rgb(77, 17, 111)",
                boxShadow: "none",
              },
            }}
          >
            УБРАТЬ ИЗ КОРЗИНЫ
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => addProductToCart(productDetails)}
            sx={{
              backgroundColor: "rgb(77, 17, 111)",
              ml: 3,
              width: "80%",
              ":hover": {
                backgroundColor: "white",
                border: "2px solid #9c69cb",
                color: "rgb(77, 17, 111)",
                boxShadow: "none",
              },
            }}
          >
            {" "}
            ДОБАВИТЬ В КОРЗИНУ
          </Button>
        )}
      </Box>
    </div>
  );
};

export default ProductCounter;
