import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { createTheme } from "@mui/material";

export default function Auth() {
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

  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    hasAccount,
    setPassword,
    setEmail,
    setHasAccount,
    handleLogin,
    handleSignup,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
      <Box
        className="auth"
        sx={{
          backgroundImage: `url(https://img3.akspic.ru/crops/1/3/7/0/7/170731/170731-rozhdestvo-santa_klaus-sneg-rastenie-svet-3840x2160.jpg)`,
          backgroundSize: "100% 130%",
          mb: "0.5%",
          [theme.breakpoints.down("md")]: {
            backgroundSize: "100% 100%",
          },
          [theme.breakpoints.down("sm")]: {
            backgroundSize: "100% 100%",
          },
          [theme.breakpoints.down("xs")]: {
            backgroundImage: `url(https://i.pinimg.com/564x/b9/66/2a/b9662aa03556ddb0bcb6852f9925ec15.jpg)`,
          },
          [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(https://i.pinimg.com/564x/b9/66/2a/b9662aa03556ddb0bcb6852f9925ec15.jpg)`,
          },
        }}
      >
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mt: 8,
                justifyContent: "center",
                width: { xs: "90%", sm: "70%", md: "45%" },
              }}
            >
              {hasAccount ? (
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "45px",
                    fontFamily: "Open Sans",
                    textAlign: "center",
                    color: "darkviolet",
                    mt: "3%",
                  }}
                  component="h1"
                  variant="h5"
                >
                  SIGN IN
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "45px",
                    fontFamily: "Open Sans",
                    textAlign: "center",
                    mt: "5%",
                    color: "darkviolet",
                  }}
                  component="h1"
                  variant="h5"
                >
                  REGISTER
                </Typography>
              )}

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 3 }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "22px",
                    fontFamily: "Open Sans",
                    color: "white",
                  }}
                >
                  Email
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  helperText={emailError}
                  value={email}
                  sx={{
                    backgroundColor: "white",
                    opacity: "0.7",
                    border: "solid #9a69cb",
                    borderRadius: "20px",
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <Box sx={{ mt: 2 }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "22px",
                      fontFamily: "Open Sans",
                      color: "white",
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      opacity: "0.7",
                      backgroundColor: "white",
                      opacity: "0.7",
                      border: " solid #9a69cb",
                      borderRadius: "20px",
                    }}
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={passwordError}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Box>

                {hasAccount ? (
                  <Button
                    className="button_signin"
                    type="submit"
                    fullWidth
                    variant="outlained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      fontWeight: 700,
                      fontFamily: "Open Sans",
                      color: "white",
                      fontSize: "20px",
                      backgroundColor: "#9a69cb",
                      border: " solid #9a69cb",
                    }}
                    onClick={() => {
                      handleLogin();
                      navigate("/");
                    }}
                  >
                    Sign in
                  </Button>
                ) : (
                  <Button
                    className="button_register"
                    type="submit"
                    fullWidth
                    variant="outlained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      fontWeight: 700,
                      fontFamily: "Open Sans",
                      color: "white",
                      fontSize: "20px",
                      backgroundColor: "#9a69cb",
                      border: " solid #9a69cb",
                    }}
                    onClick={() => {
                      handleSignup();
                      navigate("/");
                    }}
                  >
                    Register
                  </Button>
                )}

                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid item>
                    {hasAccount ? (
                      <Link
                        className="links"
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          textDecoration: "none",
                          [theme.breakpoints.down("xs")]: {
                            color: "black",
                          },
                        }}
                        href="#"
                        variant="body2"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        {" Register now"}
                      </Link>
                    ) : (
                      <Link
                        className="links"
                        sx={{
                          color: "white",
                          fontSize: "18px",
                          [theme.breakpoints.down("xs")]: {
                            color: "black",
                          },
                          textDecoration: "none",
                        }}
                        href="#"
                        variant="body2"
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        {"Log In"}
                      </Link>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
              id="line"
            ></Box>
          </Box>
        </Container>
      </Box>
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
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
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
    </Box>
  );
}
