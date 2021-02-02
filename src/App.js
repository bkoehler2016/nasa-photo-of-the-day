import React from "react";
import "./App.css";
import CardDispay from "./components/CardDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Random NASA Photo of the Day</h1>
      </Jumbotron>
      <CardDispay limit={1} />
    </div>
  );
}

export default App;
