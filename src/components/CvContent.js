import React, { useState } from "react";
import FetchJobs from "./FetchJobs";
import FetchAcademic from "./FetchAcademic";

function CvContent() {
  const [showAcademic, setShowAcademic] = useState(false);

  const hideWork = () => {
    setShowAcademic(true);
  };

  const hideEdu = () => {
    setShowAcademic(false);
  };

  const RenderTableHeaders = () => {
    return (
      <div className="job-info table-categories">
        <p className="work-title">Position</p>
        <p className="work-place">Företag</p>
        <p className="work-period">Period</p>
      </div>
    );
  };

  return (
    <>
      <div className="slider-container">
        <div className={`slider ${showAcademic ? "moveslider" : ""}`}></div>
        <div className="btn-container">
          <button class="btn-text-only" id="work" onClick={hideEdu}>
            Work
          </button>
          <button class="btn-text-only" id="academic" onClick={hideWork}>
            Academic
          </button>
        </div>
      </div>
      <div
        className={`resume-container section ${
          showAcademic ? "hide-section" : "show-section"
        }`}
        id="work-container"
      >
        <RenderTableHeaders />
        <FetchJobs />
      </div>

      <div
        className={`resume-container academic-container section ${
          showAcademic ? "show-section" : "hide-section"
        }`}
        id="academic-container"
      >
        <RenderTableHeaders />
        <FetchAcademic />
      </div>
    </>
  );
}

export default CvContent;
