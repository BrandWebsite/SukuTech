import React from "react";
import JoinUs from "../components/ForCareersPage/JoinUs";
import CoreValues from "../components/ForCareersPage/CoreValues";
import Impressions from "../components/ForCareersPage/Impressions";
import JobList from "../components/ForCareersPage/JobList";

const Careers = () => {
  return (
    <div>
      <JoinUs />
      <CoreValues />
      <Impressions />
      <div id="job-list">
        <JobList />
      </div>
    </div>
  );
};

export default Careers;
