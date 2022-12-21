import Filter from "../Filter/Filter";
import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import Search from "../Search/Search";

const ProductList = ({ currentData, term, setTerm }) => {
  return (
    <Box data-aos="fade-up">
      <Box
        data-aos="fade-up"
        data-aos-duration="3000"
        sx={{ textAlign: "center", mt: "3%" }}
      >
        <Typography
          sx={{
            color: "#9a69cb",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          АССОРТИМЕНТ
        </Typography>

        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "40px",
          }}
        >
          НАША ПРОДУКЦИЯ
        </Typography>
        <Box
          sx={{
            borderBottom: "10px solid #9a69cb",
            width: "15%",
            mt: "3%",
            mb: "3%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        ></Box>
      </Box>
      <Filter />
      <Box sx={{ display: "flex", justifyContent: "center", mb: "3%" }}>
        <TextField
          id="input-with-sx"
          label="Поиск"
          variant="standard"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginLeft: "10%",
          mr: "10%",
        }}
      >
        {currentData()
          ? currentData().map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : null}
      </Box>
    </Box>
  );
};

export default ProductList;
