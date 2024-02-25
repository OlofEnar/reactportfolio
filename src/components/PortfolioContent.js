import React, { useState } from "react";
import FetchLocalProjects from "./FetchLocalProjects";
import FetchGitHub from "./FetchGitHub";
import "../css/portfolio-page.css"

function PortfolioContent() {
  const [showFirst, setShowFirst] = useState(false);

  const hideWork = () => {
    setShowFirst(true);
  };

  const hideEdu = () => {
    setShowFirst(false);
  };


  return (
    <>
      <div className="slider-container">
        <div className={`slider ${showFirst ? "moveslider" : ""}`}></div>
        <div className="btn-container">
          <button class="btn-text-only" onClick={hideEdu}>
            Design
          </button>
          <button class="btn-text-only" onClick={hideWork}>
            Kodning
          </button>
        </div>
      </div>
      
      <div className={`section ${
          showFirst ? "hide-section" : "show-section"
        }`}>
          <FetchLocalProjects />      
      </div>

      <div className={`section ${
          showFirst ? "show-section" : "hide-section"
        }`}>
        <FetchGitHub />
      </div>
    </>
  );
}

export default PortfolioContent;