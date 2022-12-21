import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../fire";
import { createTheme } from "@mui/material/styles";

import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

function EditUrlProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneProductDetails, productDetails, updateProduct } = useProducts();

  useEffect(() => {
    getOneProductDetails(id);
  }, []);

  useEffect(() => {
    setEditedProduct(productDetails);
  }, [productDetails]);

  const [editedProduct, setEditedProduct] = useState(productDetails);
  const handleInp = (e) => {
    let obj = { ...editedProduct, [e.target.name]: e.target.value }; //когда мы используем не какие то явные значения,а переменные
    setEditedProduct(obj);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 425,
        sm: 750,
        md: 960,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (
    <>
      {editedProduct && (
        <Box
          align="center"
          sx={{
            backgroundImage: `url(https://img2.akspic.ru/crops/0/1/5/0/7/170510/170510-singulyarnost_6-paliya-legendy_runterry-singulyarnost_6_korporaciya-mir-3840x2160.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              backgroundImage: "none",
            },
            [theme.breakpoints.down("md")]: {
              height: "54vh",
            },
          }}
        >
          <Box
            sx={{
              width: "30vw",
              margin: "6vh auto 10vh",
              display: "grid",
              // gridTemplateColumns: "1fr 1fr ",
              gridGap: "10px",
              [theme.breakpoints.down("sm")]: {
                width: "80%",
              },
            }}
          >
            <TextField
              onChange={handleInp}
              sx={{
                borderColor: "white",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
              fullWidth
              label="Продукт"
              variant="outlined"
              name="name"
              size="small"
              value={editedProduct.name || ""}
            />

            <TextField
              onChange={handleInp}
              sx={{
                borderColor: "white",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
              fullWidth
              label="Описание"
              variant="outlined"
              name="description"
              size="small"
              value={editedProduct.description || ""}
            />

            <FormControl
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "4px" }}
            >
              <InputLabel
                sx={{
                  fontSize: "18px",
                  color: "black",
                }}
                htmlFor="outlined-adornment-amount"
              ></InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                onChange={handleInp}
                placeholder="Цена"
                variant="outlined"
                name="price"
                size="small"
                type="number"
                value={editedProduct.price || ""}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>

            <TextField
              onChange={handleInp}
              sx={{
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
              fullWidth
              variant="outlined"
              name="picture"
              type="url"
              size="small"
              value={editedProduct.picture || ""}
            />

            <TextField
              onChange={handleInp}
              sx={{
                borderColor: "black",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
              fullWidth
              label="Тип продукта"
              variant="outlined"
              name="type"
              size="small"
              value={editedProduct.type || ""}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => {
                  updateProduct(id, editedProduct);
                  navigate("/products");
                }}
                sx={{
                  borderColor: "black",
                  backgroundColor: "plum",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "22px",
                  borderRadius: "8px",
                  border: "2px solid #9a69cb",
                  width: "70%",
                  mt: "3%",
                }}
                variant="outlined"
                fullWidth
                size="large"
              >
                СОХРАНИТЬ
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default EditUrlProduct;
