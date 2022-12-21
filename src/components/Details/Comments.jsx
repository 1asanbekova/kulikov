import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useProducts } from "../../contexts/ProductContextProvider";
import { ADD } from "../../helpers/consts";

const Comments = () => {
  const {
    user: { email },
  } = useAuth();

  const getDate = () => {
    let date = new Date();
    date =
      date.getDate().toString() +
      "." +
      date.getMonth().toString() +
      "." +
      date.getFullYear().toString();

    return date;
  };

  const { productDetails, getOneProductDetails, updateProduct } = useProducts();

  const [product, setProduct] = useState(productDetails);

  const { id } = useParams();

  useEffect(() => {
    getOneProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  function handleComment() {
    // console.log(product)
    let obj = {
      comment: input,
      date: getDate(),
      user: email,
    };

    let obj2 = {
      ...product,
    };

    obj2.comments.push(obj);

    setProduct(obj2);
    console.log(product);
    updateProduct(id, product);
  }

  function deleteComment(index) {
    let obj2 = {
      ...product,
    };

    obj2.comments.splice(index, 1);
    setProduct(obj2);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          mt: 4,
          width: "fit-content",
          display: "flex",
          justifyContent: "flex-start",
          borderRadius: "20px",
        }}
      >
        <input
          placeholder="Ваш отзыв"
          value={input}
          type="text"
          onChange={handleInput}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(77, 17, 111)",
            ml: 3,
            width: "30%",
            ":hover": {
              backgroundColor: "white",
              border: "2px solid #9c69cb",
              color: "rgb(77, 17, 111)",
              boxShadow: "none",
            },
          }}
          onClick={() => {
            handleComment();
            updateProduct(product, id);
          }}
        >
          ОТПРАВИТЬ
        </Button>
      </Box>

      {productDetails.comments ? (
        productDetails.comments.map((comment, index) => (
          <Box
            key={index}
            sx={{
              mt: 4,
              width: { xs: "80%", sm: "50%" },
              // display: "flex",
              // justifyContent: "flex-start",
              border: "1px solid lightgrey",
              p: 3,

              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <Typography sx={{ textAlign: "left" }}>{comment.user}</Typography>
              <Typography>{comment.date}</Typography>
            </Box>
            <Typography sx={{ mt: 2 }}>{comment.comment}</Typography>
            {email === comment.user ? (
              <Button
                size="small"
                sx={{
                  mt: 2,
                  backgroundColor: "darkRed",
                  ":hover": {
                    backgroundColor: "white",
                    border: "1px solid red",
                    color: "red",
                    boxShadow: "none",
                  },
                }}
                variant="contained"
                onClick={() => {
                  deleteComment(index);
                  updateProduct(id, product);
                }}
              >
                Удалить
              </Button>
            ) : (
              <></>
            )}
          </Box>
        ))
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Comments;
