import React from "react";

//import React components
import SummaryCard from "../components/SummaryCard";
import { useSelector } from "react-redux";



const SummarySection = () => {

  return (
    <div className="summary_section">
      <SummaryCard />
    </div>
  );
};

export default SummarySection;
