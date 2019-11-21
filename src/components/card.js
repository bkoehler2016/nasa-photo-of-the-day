import React from "react";
import { Card as Cardstyle } from "reactstrap";

const Card = props => {
  return (
    <div key={props.id}>
      <Cardstyle color="dark" className="text-white">
        <img alt="Random NASA pic of the day" src={props.url} />
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p className="lead">{props.explanation}</p>
      </Cardstyle>
    </div>
  );
};

export default Card;
