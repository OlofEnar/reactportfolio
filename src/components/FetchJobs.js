import React from "react";
import cvData from "../cvdata.json";

const FetchJobs = () => {
  return (
    <>
      {cvData.jobs.map((job) => (
        <div className="job-info" key={job.id}>
          <p className="work-title">
            <i className="fa fa-info-circle resume-icons"></i> {job.title}
          </p>
          <p className="work-place">
            <i className="fa fa-home resume-icons"></i> {job.place}
          </p>
          <p className="work-period">
            <i className="fa fa-clock-o resume-icons"></i> {job.period}
          </p>
        </div>
      ))}
    </>
  );
};

export default FetchJobs;
