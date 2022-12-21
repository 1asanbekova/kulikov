import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { ADD } from "../../helpers/consts";
import { useAuth } from "../../contexts/AuthContextProvider";
import BasicRating from "../Details/Rating";
import { Box, Rating } from "@mui/material";
import "./Product.css";
export default function ProductCard({ product }) {
  const [rating, setRating] = React.useState(product.rating || 0);

  const {
    user: { email },
    handleLogout,
    handleSignup,
  } = useAuth();

  const { deleteProduct, updateProduct } = useProducts();

  const navigate = useNavigate();

  const handleRating = (_, newRating) => {
    setRating(newRating);
    updateProduct(product.id, {
      ...product,
      rating: [newRating],
    });
  };
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Card
        className="card"
        sx={{
          width: "18rem",
          margin: "1rem",
          border: "3px solid #9a69cb ",
          borderRadius: "30px",
        }}
      >
        <CardMedia component="img" image={product.picture} alt="hello" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {product.price} сом
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
        </CardContent>
        <CardActions>
          <Rating value={rating} onChange={handleRating} />

          <Button
            onClick={() => navigate(`/details/${product.id}`)}
            variant="secondary"
            sx={{
              border: "2px solid #9a69cb",
              fontWeight: "700",
              backgroundColor: "#9a69cb",
              color: "white",
            }}
          >
            Подробнее
          </Button>

          {/* {email === ADD ? (
            <Button size="small" onClick={() => deleteProduct(product.id)}>
              DELETE
            </Button>
          ) : (
            <></>
          )}

          {email === ADD ? (
            <Button
              size="small"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              EDIT
            </Button>
          ) : (
            <></>
          )} */}
        </CardActions>
      </Card>
    </div>
  );
}
