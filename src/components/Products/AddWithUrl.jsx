import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

function AddProduct() {
  const navigate = useNavigate();
  const { createProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name == "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };

  console.log(product);

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
    <Box
      align="center"
      sx={{
        backgroundImage: `url(https://img2.akspic.ru/crops/0/1/5/0/7/170510/170510-singulyarnost_6-paliya-legendy_runterry-singulyarnost_6_korporaciya-mir-3840x2160.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "100vh",
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
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
          placeholder="URL"
          name="picture"
          type="url"
          size="small"
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
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            className="bubbly-button"
            onClick={() => {
              createProduct(product);
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
            ДОБАВИТЬ
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddProduct;
