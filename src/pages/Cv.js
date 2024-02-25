import React from "react";
import MainLayout from "../layout/MainLayout";
import CvContent from "../components/CvContent";
import Hero from "../components/Hero";
import "../css/cv-page.css"

function Cv() {
  return (
    <MainLayout>
      <>
      <Hero pageTitle={'cv'}/>
        <main>
          <article>
            <CvContent />
          </article>
        </main>
      </>
    </MainLayout>
  );
}

export default Cv;
