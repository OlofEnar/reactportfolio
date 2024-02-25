import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div id="page-container">
      <div id="content-wrap">
      <Header></Header>
      <>{children}</>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default MainLayout;
