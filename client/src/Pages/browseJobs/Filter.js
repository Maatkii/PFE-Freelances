import React, { useState } from "react";
import CondidateList from "../CondidateList/CondidateList";

const Filter = ({ ratingChange, searchInput, movieData }) => {
  var filtredCondidate = CondidateData.filter(
    (condidate) =>
      condidate.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      condidate.rating >= ratingChange
  );
  return (
    <div>
      <CondidateList filtredCondidate={filtredCondidate} />
    </div>
  );
};

export default Filter;
