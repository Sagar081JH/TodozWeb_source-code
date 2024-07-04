import React from "react";
import TodosWithSpring from "./Components/TodosWithSpring";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodosPureReact from "./Components/TodosPureReact";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<TodosWithSpring />}>
            Home
          </Route>
        </Routes>
      </Router> */}
      {/* <div>{<TodosWithSpring />}</div> */}
      <div>{<TodosPureReact />}</div>
    </div>
  );
}

export default App;
