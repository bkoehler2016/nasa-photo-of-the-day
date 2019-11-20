import React from "react";
import { Jumbotron } from "reactstrap";

const Card = props => {
  return (
    <Jumbotron key={props.id}>
      <img alt="Random NASA pic of the day" src={props.url} />
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p className="lead">{props.explanation}</p>
    </Jumbotron>
  );
};

export default Card;
