import React from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, List, ListItem, Typography, Button } from "@mui/material";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [openServices, setOpenServices] = React.useState(false);

  const handleServices = () => {
    setOpenServices(!openServices);
  };

  const [openCorporate, setOpenCorporate] = React.useState(false);

  const handleCorporate = () => {
    setOpenCorporate(!openCorporate);
  };

  const [openLegalTerms, setOpenLegalTerms] = React.useState(false);

  const handleLegalTerms = () => {
    setOpenLegalTerms(!openLegalTerms);
  };

  const services = [
    <ListItem>
      <Link
        sx={{ color: "white" }}
        className="icon-instagram"
        href="https://www.instagram.com/kulikov_kg/"
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://www.instagram.com/kulikov_kg/"
        sx={{ textDecoration: "none", color: "white" }}
      >
        Instagram KG
      </Link>
    </ListItem>,

    <ListItem>
      <Link
        sx={{ color: "white" }}
        className="icon-instagram"
        href="https://www.instagram.com/kulikov_kz/"
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://www.instagram.com/kulikov_kz/"
        sx={{ textDecoration: "none", color: "white" }}
      >
        Instagram KZ
      </Link>
    </ListItem>,

    <ListItem>
      <Link
        sx={{ color: "white" }}
        className="icon-instagram"
        href="https://www.instagram.com/kulikov_uz/"
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://www.instagram.com/kulikov_uz/"
        sx={{ textDecoration: "none", color: "white" }}
      >
        Instagram UZ
      </Link>
    </ListItem>,

    <ListItem>
      <Link
        sx={{ color: "white" }}
        className="icon-youtube"
        href="https://www.youtube.com/@kulikovteam/featured"
      >
        <YouTubeIcon />
      </Link>
      <Link
        href="https://www.youtube.com/@kulikovteam/featured"
        sx={{ color: "white", textDecoration: "none" }}
      >
        YouTube
      </Link>
    </ListItem>,
  ];
  const corporate = [
    <Link
      sx={{ textDecoration: "none", color: "white" }}
      href="https://play.google.com/store/apps/details?id=pro.mwallet.kulikovsky&hl=ru"
    >
      Google Play
    </Link>,

    <Link
      sx={{ textDecoration: "none", color: "white" }}
      href="https://apps.apple.com/kg/app/%D0%BA%D0%B4-%D0%BA%D1%83%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9/id1479982486"
    >
      App Store
    </Link>,
  ];
  const legalTerms = [
    "Вакансии",
    "Контакты",
    "Реквизиты",
    "О нас",
    "Условия программы лояльности",
    "Политика обработки персональных данных",
  ];

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#9a69cb",
        color: "white",
      }}
    >
      <Box
        data-aos="fade-right"
        sx={{
          display: "flex",
          [theme.breakpoints.down("md")]: {
            display: "block",
          },
          justifyContent: "space-evenly",
          padding: "2% 5%",
          fontSize: "18px",
          border: "solid white",
          borderWidth: "0 0 1px",
          padding: "25px 0",
          width: "97%",
          margin: "0 auto",
        }}
      >
        <Box data-aos="fade-right" onClick={() => console.log("zxc")}>
          <Typography
            sx={{
              padding: "3px 10px",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            МЫ В СОЦСЕТЯХ
          </Typography>
          <List
            sx={{
              [theme.breakpoints.down("md")]: {
                padding: "0",
              },
            }}
          >
            {services.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "6px",
                  margin: 0,
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {
                  <Link
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "0.5s",
                    }}
                  >
                    {i}
                  </Link>
                }
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Typography
            sx={{
              padding: "3px 10px",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
          </Typography>
          <List
            sx={{
              [theme.breakpoints.down("md")]: {
                padding: "0",
              },
            }}
          >
            {corporate.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "10px",
                  margin: 0,
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {
                  <Link
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "0.5s",
                    }}
                  >
                    {i}
                  </Link>
                }
              </ListItem>
            ))}
          </List>
        </Box>

        <Box data-aos="fade-right">
          <Typography
            sx={{
              padding: "3px 10px",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            КОМПАНИЯ
          </Typography>
          <List
            sx={{
              [theme.breakpoints.down("md")]: {
                padding: "0",
              },
            }}
          >
            {legalTerms.map((i, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "10px",
                  margin: 0,
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {
                  <Link
                    sx={{
                      color: "white",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "0.5s",
                    }}
                  >
                    {i}
                  </Link>
                }
              </ListItem>
            ))}
          </List>
        </Box>

        <ListItemButton
          onClick={handleServices}
          sx={{
            [theme.breakpoints.up("md")]: { display: "none" },
            [theme.breakpoints.down("md")]: {
              fontWeight: 600,
              border: "solid white",
              borderWidth: "0 0 1px",
              padding: "23px 0",
            },
          }}
        >
          <ListItemText primary="МЫ В СОЦСЕТЯХ" />
          {openServices ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={openServices} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              {services.map((i, index) => (
                <ListItemText key={index} primary={i} sx={{}} />
              ))}
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton
          onClick={handleCorporate}
          sx={{
            [theme.breakpoints.up("md")]: { display: "none" },
            [theme.breakpoints.down("md")]: {
              fontWeight: 600,
              border: "solid white",
              borderWidth: "0 0 1px",
              padding: "23px 0",
            },
          }}
        >
          <ListItemText primary="МОБИЛЬНОЕ ПРИЛОЖЕНИЕ" />
          {openCorporate ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={openCorporate} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              {corporate.map((i, index) => (
                <ListItemText key={index} primary={i} sx={{}} />
              ))}
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={handleLegalTerms}
          sx={{
            [theme.breakpoints.up("md")]: { display: "none" },
            [theme.breakpoints.down("md")]: {
              fontWeight: 600,
              border: "solid white",
              borderWidth: "0 0 1px",
              padding: "23px 0",
            },
          }}
        >
          <ListItemText primary="КОМПАНИЯ" />
          {openLegalTerms ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        <Collapse in={openLegalTerms} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              {legalTerms.map((i, index) => (
                <ListItemText key={index} primary={i} sx={{}} />
              ))}
            </ListItemButton>
          </List>
        </Collapse>

        <Box
          data-aos="fade-right"
          sx={{
            width: "12%",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              margin: "0 auto",
            },
          }}
        >
          <List>
            <ListItem
              sx={{
                fontSize: "20px",
                padding: "3px 10px",
                [theme.breakpoints.down("md")]: {
                  padding: "3px 10px 10px 0",
                },
              }}
            >
              МАГАЗИНЫ
            </ListItem>
            <List
              className="icons"
              sx={{
                display: "block",
                width: "30%",
                [theme.breakpoints.down("md")]: {
                  width: "15%",
                },
              }}
            >
              <ListItem>
                <Link sx={{ color: "white", textDecoration: "none" }}>
                  Кыргызстан
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={{ color: "white", textDecoration: "none" }}>
                  Казахстан
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={{ color: "white", textDecoration: "none" }}>
                  Узбекистан
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={{ color: "white", textDecoration: "none" }}>
                  Россия
                </Link>
              </ListItem>
            </List>
          </List>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px",
          paddingBottom: "50px",
          paddingTop: "40px",
          borderTopWidth: "1px",
          borderColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          <Typography>
            {" "}
            © 2022 | Кондитерский дом «Куликовский» . Все права защищены.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
