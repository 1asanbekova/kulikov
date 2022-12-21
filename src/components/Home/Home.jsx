import { Filter } from "@mui/icons-material";
import { Box, Button, createTheme, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Swiper from "./Swiper";

const Home = () => {
  const navigate = useNavigate();

  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 325,
        xs: 380,
        sm: 430,
        md: 770,
        xl: 1025,
        xxl: 1250,
      },
    },
  });

  return (
    <div>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "url(https://site.kulikov.com/upload/landing/4e7/%D0%BE_%D0%BA%D1%83%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%BC@1x.jpg)",
            backgroundSize: "100% 100%",
            textShadow: "2px 4px 3px rgb(0 0 0 / 30%)",
            boxShadow: "inset 0 0 0 1000px rgba(154, 105, 203, 0.3)",
            width: "28%",
            margin: "2%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "8%",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: "23px",
                mt: "75%",
                fontFamily: "Open Sans",
                textShadow: "2px 4px 3px rgb(0 0 0 / 30%)",
                [theme.breakpoints.down("xxl")]: {
                  mt: "58%",
                },
                [theme.breakpoints.down("xl")]: {
                  mt: "77%",
                  fontSize: "20px",
                },
              }}
            >
              <h2>О КУЛИКОВСКОМ</h2>
            </Typography>

            <Typography sx={{ color: "white", fontSize: "16px" }}>
              <p>Все,что вы хотели знать о Куликовском... и немного больше!</p>
            </Typography>

            <Button
              onClick={() => navigate("/about")}
              sx={{
                color: "white",
                backgroundColor: "#9a69cb;",
                width: "50%",
                borderRadius: "8px",
                border: "2px solid #9a69cb; ",
                fontWeight: "600",
              }}
            >
              Подробрнее
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundImage:
              "url(https://site.kulikov.com/upload/landing/0ab/%D0%B5%D0%BD%D1%80@1x.jpg)",
            backgroundSize: "100% 100%",
            textShadow: "2px 4px 3px rgb(0 0 0 / 30%)",
            boxShadow: "inset 0 0 0 1000px rgba(154, 105, 203, 0.3)",
            width: "28%",
            margin: "2%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "8%",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: "23px",
                mt: "75%",
                fontFamily: "Open Sans",
                [theme.breakpoints.down("xl")]: {
                  fontSize: "20px",
                  mt: "95%",
                },
              }}
            >
              <h2>АССОРТИМЕНТ</h2>
            </Typography>

            <Typography sx={{ color: "white", fontSize: "16px" }}>
              <p>
                Каталог продукции: от "Птичьего молока"-до торта вашей мечты!{" "}
              </p>
            </Typography>

            <Button
              onClick={() => {
                navigate("/products");
              }}
              sx={{
                color: "white",
                backgroundColor: "#9a69cb;",
                width: "50%",
                borderRadius: "8px",
                border: "2px solid #9a69cb; ",
                fontWeight: "600",
              }}
            >
              Подробрнее
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundImage:
              "url(https://site.kulikov.com/upload/landing/403/%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D1%8B@1x.jpg)",
            backgroundSize: "100% 100%",
            textShadow: "2px 4px 3px rgb(0 0 0 / 30%)",
            boxShadow: "inset 0 0 0 1000px rgba(154, 105, 203, 0.3)",
            width: "28%",
            margin: "2%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              margin: "8%",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: "23px",
                mt: "65%",
                fontFamily: "Open Sans",
                [theme.breakpoints.down("xl")]: {
                  mt: "95%",
                  fontSize: "20px",
                },
              }}
            >
              <h2>ФИРМЕННЫЕ МАГАЗИНЫ</h2>

              <Typography sx={{ color: "white", fontSize: "16px" }}>
                <p>Где бы вы ни были, мы постараемся быть радом!</p>
              </Typography>
            </Typography>

            <Button
              sx={{
                color: "white",
                backgroundColor: "#9a69cb;",
                width: "50%",
                borderRadius: "8px",
                border: "2px solid #9a69cb; ",
                fontWeight: "600",
              }}
            >
              Подробрнее
            </Button>
          </Box>
        </Box>
      </Box>

      {/*ЭТО КАРУСЕЛЬ  */}
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <Swiper />
      </Box>

      {/* ДЛЯ ВАКАНСИЙ */}
      <Box
        className="lowerNav"
        sx={{
          height: "4rem",
          mt: "3%",
          mb: "3%",
          width: "100%",
        }}
      >
        <Box
          data-aos="flip-right"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => navigate("/rabota")}
            className="btn_mob"
            variant="outlined"
            sx={{
              border: "2px solid #9a69cb",
              fontWeight: "700",
              color: "#9a69cb",
              mt: "0.8%",
              borderRadius: "10px",
              [theme.breakpoints.down("md")]: {
                mt: "1.5%",
              },
              [theme.breakpoints.down("sm")]: {
                mt: "2.5%",
              },
              [theme.breakpoints.down("xxs")]: {
                mt: "3%",
                fontSize: "12px",
              },
              [theme.breakpoints.down("xs")]: {
                mt: "3%",
                fontSize: "12px",
              },
            }}
          >
            ВАКАНСИИ В КУЛИКОВСКОМ
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
