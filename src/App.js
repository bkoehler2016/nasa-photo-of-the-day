import React from "react";
import CardDispay from "./components/CardDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Random NASA Photo of the Day</h1>
      <hr></hr>
      <CardDispay />
    </div>
  );
}

export default App;
