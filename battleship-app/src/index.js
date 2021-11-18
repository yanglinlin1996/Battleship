import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/HomePage.jsx";
import Rule from "./components/RulePage.jsx";
import FreePlayBoard from "./components/FreePlayPage.jsx";
import NormalPlayPage from "./components/NormalPlayPage.jsx";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/reducers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/freeplay" element={<FreePlayBoard />} />
        <Route path="/normalplay" element={<NormalPlayPage />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
