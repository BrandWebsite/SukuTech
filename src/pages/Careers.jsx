import React from "react"
import JoinUs from "../components/ForCareersPage/JoinUs";
import CoreValues from "../components/ForCareersPage/CoreValues";
import Impressions from "../components/ForCareersPage/Impressions";
import TeamTestimonial from "../components/ForCareersPage/TeamTestimonial";
import JobList from "../components/ForCareersPage/JobList";


const Careers = () => {
  return (
    <div>
      <JoinUs />
      <CoreValues />
      <Impressions />
      {/* <TeamTestimonial /> */}
      <JobList />
    </div>
  );
};

export default Careers;
