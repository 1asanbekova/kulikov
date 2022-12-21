import { Badge, Button, createTheme, IconButton } from "@mui/material";
import { Box } from "@mui/system";

import MenuItem from "@mui/material/MenuItem";
import React from "react";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";/
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import Tooltip from "@mui/material/Tooltip";
import { ADD } from "../../helpers/consts";
import {
  getCountProductsInCart,
  getCountProductsInWish,
} from "../../helpers/function";
import { useCart } from "../../contexts/CartContextProvider";
import { useWish } from "../../contexts/WishListContextProvider";

const LowerNavbar = () => {
  //! ДЛЯ ОТОБРАЖЕНИЯ КОЛИЧЕСТВА В КОРЗИНЕ
  const { addProductToCart } = useCart();
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);
  //!=====================================

  const { addProductToWish } = useWish();
  const [count2, setCount2] = React.useState(0);
  React.useEffect(() => {
    setCount2(getCountProductsInWish);
  }, [addProductToWish]);

  const navigate = useNavigate();
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 325,
        xs: 380,
        sm: 430,
        md: 770,
        lg: 1200,
      },
    },
  });
  const {
    user: { email },
    handleLogout,
    handleSignup,
  } = useAuth();

  return (
    <div>
      <Box
        className="lowerNav"
        sx={{
          height: "4rem",
          mt: "3%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
              mt: "0.5%",
              [theme.breakpoints.down("md")]: {
                mt: "1.5%",
              },
              [theme.breakpoints.down("sm")]: {
                mt: "3%",
              },
            }}
          >
            {email ? (
              <MenuItem onClick={handleLogout}>
                <Tooltip title="Logout">
                  <AccountCircleIcon
                    sx={{
                      display: "flex",
                      color: "#9a69cb",
                    }}
                  />
                </Tooltip>
              </MenuItem>
            ) : (
              <Link
                to="/auth"
                style={{
                  textDecoration: "none ",
                  color: "black",
                  display: "flex",
                }}
              >
                <MenuItem onClick={handleSignup}>
                  <Tooltip title="Logout">
                    <AccountCircleIcon
                      sx={{
                        margin: "3%",
                        color: "#9a69cb",
                        [theme.breakpoints.down("sm")]: {
                          mt: "-8%",
                        },
                        [theme.breakpoints.down("xxs")]: {
                          marginLeft: "50%",
                          mt: "-10%",
                        },
                      }}
                    />
                  </Tooltip>
                </MenuItem>
              </Link>
            )}

            <IconButton>
              <Badge badgeContent={count} color="secondary">
                <AddShoppingCartIcon
                  onClick={() => navigate("/cart")}
                  sx={{ margin: "3%", color: "#9a69cb" }}
                />
              </Badge>
            </IconButton>

            <Badge badgeContent={count2} color="secondary">
              <IconButton onClick={() => navigate("/wish")}>
                <BookmarkBorderIcon sx={{ margin: "3%", color: "#9a69cb" }} />
              </IconButton>
            </Badge>
          </Box>

          {/*ДЛЯ ДОБАВЛЕНИЯ ПРОДУКТА  */}
          {email === ADD ? (
            <Button
              onClick={() => navigate("/admin")}
              sx={{ color: "#9a69cb" }}
            >
              ДОБАВИТЬ
            </Button>
          ) : (
            <></>
          )}

          {/* ДЛЯ ДОБАВЛЕНИЯ ПРОДУКТА ПО URL */}
          {email === ADD ? (
            <Button
              onClick={() => navigate("/admin2")}
              sx={{ color: "#9a69cb" }}
            >
              ДОБАВИТЬ URL
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default LowerNavbar;
