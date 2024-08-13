import React from "react";
import TodosWithSpring from "./Components/TodosWithSpring";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodosPureReact from "./Components/TodosPureReact";

function App() {
  return (
    <div>
      <TodosPureReact />
    </div>
  );
}

export default App;
