import { Box, Typography } from "@mui/material";
import React from "react";

const Kulikov = () => {
  return (
    <div>
      <Box sx={{ textAlign: "center", mt: "3%" }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "700",
            fontSize: "30px",
          }}
        >
          ВАКАНСИИ
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

      <Box
        data-aos="fade-up"
        data-aos-duration="3000"
        sx={{ textAlign: "center", mb: "5%" }}
      >
        <Typography
          sx={{
            color: "black",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          СЕРВИС-КОНСУЛЬТАНТ
        </Typography>
      </Box>

      <Box
        data-aos="fade-up"
        data-aos-duration="3000"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ width: "40%", mt: "10%", textAlign: "center" }}>
          Любишь сладкое и мечтаешь работать там, где его немереное количество?
          Тогда тебе к нам! Наша команда в поиске активных ответственных
          сервис-консультантов с опытом работы. Мы ждем тех, кто не боится
          перемен и готов дарить радость каждому гостю нашей кондитерской!
          Отправляй свое резюме на электронный адрес hr.kdk@kulikov.com
        </Typography>
        <div data-aos="flip-left">
          <img
            width="400px"
            src="https://site.kulikov.com/upload/landing/204/2srnowtn33odwmzrdamrmk3fbognfwi0/rating_1_1_2_@1x.png"
            alt="err"
          />
        </div>
      </Box>

      <Box
        data-aos="fade-up"
        data-aos-duration="3000"
        sx={{ textAlign: "center", mb: "5%" }}
      >
        <Typography
          sx={{
            color: "black",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          БАРИСТА
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div data-aos="flip-left">
          <img
            width="400px"
            src="https://site.kulikov.com/upload/landing/dd9/yb1vwmwqfg5jgdx7cp6an670jckhahyl/rating_2@1x.png"
            alt="err"
          />
        </div>

        <Typography
          sx={{ color: "black", fontWeight: "700", fontSize: "20px" }}
        ></Typography>

        <Typography sx={{ width: "40%", mt: "10%", textAlign: "center" }}>
          Наша фиолетовая команда находится в поиске креативного бариста. Если
          ты разбираешься в сортах кофе, умеешь дарить людям сладкое настроение
          и вкусную атмосферу, то скорее отправляй свое резюме на почту
          hr.kdk@kulikov.com и может именно ты станешь частью нас!
        </Typography>
      </Box>
    </div>
  );
};

export default Kulikov;
