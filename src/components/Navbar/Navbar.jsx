import { Box, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <Box>
          <Box
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "2%",
              cursor: "pointer",
            }}
          >
            <img
              src="https://site.kulikov.com/upload/landing/cb9/ovdrgguceuy82dxl7oo9btdcvpnba1m6/%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9@1x.png"
              alt="#"
            />
          </Box>
        </Box>
      </header>
    </div>
  );
};

export default Navbar;
