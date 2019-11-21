import React from "react";
import { Card as Cardstyle } from "reactstrap";
import { Container } from "reactstrap";
import { CardTitle, CardSubtitle } from "reactstrap";

const Cardset = props => {
  return (
    <Container key={props.id}>
      <Cardstyle color="dark" className="text-white">
        <h3>{props.date}</h3>
        <h2>{props.title}</h2>
        <img alt="Random NASA pic of the day" src={props.url} />
        <hr></hr>
        <CardSubtitle>{props.explanation}</CardSubtitle>
      </Cardstyle>
    </Container>
  );
};

export default Cardset;
