import React, { useContext, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../fire";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { createTheme, MenuItem, Select, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useProducts } from "../../contexts/ProductContextProvider";

const Filter = () => {
  //! FILTER
  const { sortTest, sortPrice } = useProducts();
  //! FILTER
  const theme = createTheme({
    breakpoints: {
      values: {
        xxxs: 325,
        xxs: 380,
        xs: 428,
        sm: 770,
        md: 1024,
        lg: 1250,
        xl: 1440,
      },
    },
  });
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minWidth: 120,
          marginLeft: {
            xs: "30px",
            sm: "30px",
            md: "0",
            lg: "15px",
            xl: "0",
          },
          [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <FormControl
          fullWidth
          sx={{
            marginBottom: "3%",
            width: "25%",
            [theme.breakpoints.down("lg")]: {
              width: "30%",
            },
            [theme.breakpoints.down("xs")]: {
              width: "20%",
            },
            [theme.breakpoints.down("xs")]: {
              width: "70%",
            },
            [theme.breakpoints.down("xxxs")]: {
              width: "85%",
            },
          }}
        >
          <InputLabel
            htmlFor="uncontrolled-native"
            sx={{
              fontWeight: 700,
              fontSize: "30px",
              fontFamily: "Quattrocento Sans",
              textAlign: "center",
              color: "rgb(77, 17, 111)",
              [theme.breakpoints.down("lg")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "24px",
              },
            }}
          >
            Сортировка по категориям
          </InputLabel>
          <Select
            defaultValue={"1"}
            inputProps={{
              name: "sort",
            }}
          >
            <MenuItem onClick={() => sortTest("Торт")} value={"Торт"}>
              Торты
            </MenuItem>
            <MenuItem
              onClick={() => sortTest("Тарталетки")}
              value={"Тарталетки"}
            >
              Тарталетки
            </MenuItem>
            <MenuItem onClick={() => sortTest("Мороженое")} value={"Мороженое"}>
              Мороженое
            </MenuItem>
            <MenuItem onClick={() => sortTest("Йогурт")} value={"Йогурт"}>
              Йогурты
            </MenuItem>
            <MenuItem onClick={() => sortTest("Творожок")} value={"Творожок"}>
              Творожки
            </MenuItem>
            <MenuItem
              onClick={() => sortTest("Десерт в стаканчике")}
              value={"Десерт в стаканчике"}
            >
              Десерты в стаканчиках
            </MenuItem>

            <MenuItem onClick={() => sortTest("Шоколад")} value={"Шоколад"}>
              Шоколад
            </MenuItem>

            <MenuItem onClick={() => sortTest("Рулет")} value={"Рулет"}>
              Рулет
            </MenuItem>

            <MenuItem onClick={() => sortTest("Пирожные")} value={"Пирожные"}>
              Пирожные
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          fullWidth
          sx={{
            marginBottom: "3%",
            ml: "3%",
            width: "20%",
            [theme.breakpoints.down("lg")]: {
              width: "25%",
            },
            [theme.breakpoints.down("sm")]: {
              width: "30%",
            },
            [theme.breakpoints.down("xs")]: {
              width: "70%",
              ml: "0",
            },
            [theme.breakpoints.down("xxxs")]: {
              width: "85%",
            },
          }}
        >
          <InputLabel
            htmlFor="uncontrolled-native"
            sx={{
              fontWeight: 700,
              fontSize: "30px",
              fontFamily: "Quattrocento Sans",
              textAlign: "center",
              color: "rgb(77, 17, 111)",
              [theme.breakpoints.down("lg")]: {
                fontSize: "28px",
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: "24px",
              },
            }}
          >
            Сoртировка по цене
          </InputLabel>

          <Select
            defaultValue={"1"}
            inputProps={{
              name: "sort",
            }}
          >
            <MenuItem onClick={() => sortPrice("desc")} value={"desc"}>
              От большего к меньшему
            </MenuItem>

            <MenuItem onClick={() => sortPrice("asc")} value={"asc"}>
              От меньшего к большему
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Filter;
