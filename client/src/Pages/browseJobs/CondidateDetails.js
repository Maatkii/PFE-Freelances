import React from "react";
import { useParams } from "react-router-dom";

const CondidateDetails = ({ Condidate }) => {
  const { condidateId } = useParams();
  var findCondidate = condidate.find(
    (condidate, index) => condidate.id == condidateId
  );
  return (
    <div>
      <h1>{findCondidate.title}</h1>
      <img src={findCondidate.posterUrl} alt="" />
      <p>{findCondidate.description}</p>
      <p>{findCondidate.rating}</p>
    </div>
  );
};

export default CondidateDetails;
