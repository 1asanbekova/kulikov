import * as React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "../Cart/Cart.css";
import { useCart } from "../../contexts/CartContextProvider";
import { useWish } from "../../contexts/WishListContextProvider";

export default function Cart() {
  const { getWish, wish, changeProductCount, deleteWishProduct } = useWish();

  React.useEffect(() => {
    getWish();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("wish");
    getWish();
  };

  return (
    <table>
      <tbody>
        <tr className=" wish-desktop tr-head">
          <th className=" item" align="left">
            ПРОДУКТ
          </th>
        </tr>

        {wish.products.map((row, i) => (
          <tr className="row" key={i}>
            <td valign="top" align="left" className="cart-desktop img-descr">
              <img className="cartimg" src={row.item.picture} alt="noe" />
              <div className="name-qty">
                <p className="name">{row.item.name}</p>
                <p className="qty">Кол-тво: {row.count}</p>
              </div>
            </td>
            <td className="cart-desktop" valign="top">
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <div
                  className="remove"
                  align="left"
                  sx={{ display: "block" }}
                  onClick={() => deleteWishProduct(row.item.id)}
                >
                  <Grid item xs={8}>
                    <DeleteOutlinedIcon sx={{ width: "500%" }} />
                  </Grid>
                </div>
              </Box>
            </td>

            <td className="cart-phone">
              <img className="cartimg" src={row.item.picture} alt="noe" />
              <div className="name-qty">
                <p className="name">{row.item.name}</p>
                <p className="qty">Кол-тво: {row.count}</p>

                <p className="cart-price">${row.item.price}</p>

                <input
                  className="counter"
                  min={1}
                  max={100}
                  type="number"
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
                <p
                  className="remove"
                  align="left"
                  sx={{ display: "block" }}
                  onClick={() => deleteWishProduct(row.item.id)}
                >
                  Remove
                </p>
                <p className="subprice">Subtotal: ${row.subPrice}</p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
