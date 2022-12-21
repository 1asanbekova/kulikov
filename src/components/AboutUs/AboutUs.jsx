import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AboutUs = () => {
  return (
    <div data-aos="fade-up">
      <Box sx={{ display: "block", textAlign: "center", mt: "3%" }}>
        <Typography
          sx={{ fontWeight: "700", color: "#9a69cb", fontSize: "12px" }}
        >
          КОРОТКО
        </Typography>
        <Typography
          sx={{ fontWeight: "700", color: "black", fontSize: "40px" }}
        >
          О НАС
        </Typography>
        <Typography sx={{ color: "#999999", fontSize: "14px" }}>
          Мы — большая и дружная семья Фиолетовых!
        </Typography>
        <Typography sx={{ color: "#999999", fontSize: "14px" }}>
          Мы — Кондитерский дом "Куликовский"!
        </Typography>
      </Box>

      <Box sx={{ display: "block", textAlign: "center", mt: "4%" }}>
        <Typography
          sx={{ fontWeight: "700", color: "#9a69cb", fontSize: "12px" }}
        >
          МИНУТКА ИСТОРИИ
        </Typography>
        <Typography
          sx={{ fontWeight: "700", color: "black", fontSize: "40px" }}
        >
          В 1991 ГОДУ...
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

        <Box sx={{ marginLeft: "20%", marginRight: "20%" }}>
          <Box
            sx={{
              display: "block",
              textAlign: "center",
              margin: "3%",
              color: "#999999",
            }}
          >
            <Typography>
              В 1991 году Олег Борисович Куликов испек торт "Птичье молоко", с
              которого начались история большой и дружной фиолетовой семьи и
              бренда "Куликовский". В самом начале производство Куликовских
              тортов было семейным делом, которое имело в своем активе лишь
              небольшую кухню в типовой квартире в городе Бишкек.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "block",
              textAlign: "center",
              margin: "3%",
              color: "#999999",
            }}
          >
            <Typography>
              Постепенно нарабатывались клиенты, росла популярность. Вместе с
              ней рос ассортимент предлагаемых десертов и место, где все это
              производилось. Так за 10 лет дело выросло в небольшую семейную
              кондитерскую со своим цехом, салоном заказов и преданными
              клиентами.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "block",
              textAlign: "center",
              margin: "3%",
              color: "#999999",
            }}
          >
            <Typography>
              В миллениум мы вошли уже известной на весь город и область
              компанией. Популярность продолжала расти и пространства для
              выпуска продукции требовалось уже больше. В 2004 году мы приняли
              решение о переезде на новую территорию, которой предстояло стать
              уже настоящей производственной площадкой.{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "block",
              textAlign: "center",
              margin: "3%",
              color: "#999999",
            }}
          >
            <Typography>
              С тех пор мы выросли более чем в 5 раз. Территория нашей фабрики
              выросла до 4000 кв.м. Цехов стало уже 4, к тому же появилась
              собственная площадка по производству молочной продукции. Помимо
              фабрики на сегодня у нас уже более 100 собственных фирменных
              магазинов в трех странах (Кыргызстан, Казахстан и Россия). А общее
              количество сотрудников составляет более 1500 человек.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "block",
              textAlign: "center",
              margin: "3%",
              color: "#999999",
            }}
          >
            <Typography>
              За годы нашего существования вместе с нами выросло очень много
              людей. И мы счастливы делить с нашими клиентами самые важные и
              теплые события нашей жизни. Например, наши Дни рождения! С 2016
              года мы провели уже несколько семейных фестивалей на свой День
              рождения в двух странах.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "block",
              textAlign: "center",
              margin: "3%",
              color: "#999999",
            }}
          >
            <Typography>И мы продолжаем расти и развиваться!</Typography>
          </Box>
        </Box>
        <Box>
          <img
            width="50%"
            src="https://site.kulikov.com/upload/landing/f2b/%D1%82%D0%BE%D1%80%D1%821+1.3_%E2%80%94_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F@1x.jpg"
            alt=""
          />
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
