import React from "react";
import { Card, CardText } from "react-bootstrap";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CondidateCard = ({ condidate }) => {
  const navigate = useNavigate();
  const showCondidateDetails = (id) => {
    // navigate(`/condidate-details/${id}`);
  };
  return (
    <div>
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={condidate.posterUrl} />
          <Card.Body>
            <Card.Title>
              <Link to={`/condidate-details/`}>{condidate.Name}</Link>{" "}
            </Card.Title>
            <Card.Text>{condidate.description}</Card.Text>
            <Card.Text>
              <ReactStars
                count={5}
                value={condidate.rating}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
            </Card.Text>
            <button variant="dark" onClick={() => showCondidateDetails()}>
              Trailer
            </button>
          </Card.Body>
        </Card>
      </>
    </div>
  );
};

export default CondidateCard;
