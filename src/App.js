import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Head.jsx";
import "./styles/App.scss";
import "./styles/Head.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>

  );
}

export default App;
