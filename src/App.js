import React from "react";
import LowerNavbar from "./components/Navbar/LowerNavbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <Navbar />
      <LowerNavbar />
      <MainRoutes />
      <Footer />
    </>
  );
};
export default App;
