import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, CardContent, createTheme, Grid } from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
// import ProductCounter from "./ProductCounter";
import { ADD } from "../../helpers/consts";
import ProductCounter from "./ProductCounter";
import Comments from "./Comments";
import { useAuth } from "../../contexts/AuthContextProvider";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { getOneProductDetails, productDetails, deleteProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProductDetails(id);
  }, []);

  //! ====================
  const {
    user: { email },
    handleLogout,
    handleSignup,
  } = useAuth();
  //! ====================

  const theme = createTheme({
    breakpoints: {
      values: {
        xxxs: 320,
        xxs: 380,
        xs: 428,
        sm: 770,
        md: 1024,
        lg: 1250,
        xl: 1440,
      },
    },
  });

  console.log(productDetails.id);
  return (
    <Grid
      sx={{
        mb: "50px",
        mt: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            width: { sm: "50%", xs: "100%" },
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            mb: "10%",
          }}
        >
          <Typography gutterBottom variant="h3" component="div">
            <img width="100%" src={productDetails.picture} alt="" />
          </Typography>

          <Box sx={{ width: "67%" }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "30px",
                color: "rgb(77, 17, 111)",
              }}
            >
              Описание
            </Typography>
            <Typography sx={{ color: "#999999" }}>
              {productDetails.description}
            </Typography>
          </Box>
        </Box>
        <Box>
          <CardContent
            sx={{
              width: "80%",
              fontWeight: "700",
              textAlign: "center",
              [theme.breakpoints.down("xs")]: {
                width: "90%",
              },
            }}
          >
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: "40px",
                fontFamily: "Quattrocento Sans",
                textAlign: "center",
                color: "rgb(77, 17, 111)",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "35px",
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: "25px",
                },
              }}
            >
              {productDetails.name}
            </Typography>

            <Typography sx={{ fontSize: "25px", color: "rgb(77, 17, 111)" }}>
              {productDetails.price} сом
            </Typography>
          </CardContent>

          <Box sx={{ mt: "20%" }}>
            <ProductCounter />
          </Box>
          <Comments />

          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              mt: "30%",
            }}
          >
            {/* условный рендеринг для админа */}
            {email === ADD ? (
              <>
                {" "}
                <Button
                  onClick={() => navigate(`/products/${productDetails.id}`)}
                  variant="outlined"
                  sx={{
                    color: "white",
                    backgroundColor: "#9a79cb",
                    width: "100px",
                    height: "50px",
                  }}
                >
                  EDIT
                </Button>
                <Button
                  onClick={() => navigate(`/products2/${productDetails.id}`)}
                  variant="outlined"
                  sx={{
                    color: "white",
                    backgroundColor: "#9a79cb",
                    width: "100px",
                    height: "50px",
                  }}
                >
                  EDIT/URL
                </Button>
                <Button
                  onClick={() => {
                    deleteProduct(productDetails.id);
                    navigate("/products");
                  }}
                  variant="outlined"
                  sx={{
                    backgroundColor: "#9a79cb",
                    color: "white",
                    width: "100px",
                    height: "50px",
                  }}
                >
                  DELETE
                </Button>
              </>
            ) : (
              <></>
            )}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductDetails;
