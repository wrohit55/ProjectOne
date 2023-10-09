import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Head.jsx";

import Home from "./components/Home.jsx";

import "./styles/App.scss";
import "./styles/Head.scss";
import "./styles/Home.scss";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
