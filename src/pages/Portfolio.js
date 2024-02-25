import React from "react";
import MainLayout from "../layout/MainLayout";
import Hero from "../components/Hero";
import PortfolioContent from "../components/PortfolioContent";
import "../css/portfolio-page.css";

function Portfolio() {
  return (
    <div id="bg">
      <MainLayout>
        <Hero pageTitle={'portfolio'}/>
        <main>
          <PortfolioContent />
        </main>
      </MainLayout>
    </div>
  );
}

export default Portfolio;
