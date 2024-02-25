import React from "react";
import cvData from "../cvdata.json";

const FetchAcademic = () => {
  return (
    <>
      {cvData.education.map((edu) => (
        <div className="job-info" key={edu.id}>
          <p className="work-title">
            <i className="fa fa-info-circle resume-icons"></i> {edu.title}
          </p>
          <p className="work-place">
            <i className="fa fa-home resume-icons"></i> {edu.place}
          </p>
          <p className="work-period">
            <i className="fa fa-clock-o resume-icons"></i> {edu.period}
          </p>
        </div>
      ))}
    </>
  );
};

export default FetchAcademic;
