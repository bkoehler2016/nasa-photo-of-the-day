import React from "react";
import { Card as Cardstyle } from "reactstrap";
import { Container } from "reactstrap";
import { CardTitle, CardSubtitle } from "reactstrap";

const Cardset = props => {
  function reloadImage() {
    window.location.reload(false);
  }
  return (
    <Container key={props.id}>
      <button onClick={reloadImage}>Get new Image</button>
      <br />
      <br />
      <Cardstyle color="dark" className="text-white">
        <CardTitle>{props.date}</CardTitle>
        <h3>{props.title}</h3>
        <img width="100%" alt="Random NASA pic of the day" src={props.url} />
        <hr></hr>
        <CardSubtitle>{props.explanation}</CardSubtitle>
      </Cardstyle>
    </Container>
  );
};

export default Cardset;
