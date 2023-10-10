import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Head.jsx";

import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";

import Footer from "./components/Footer.jsx";


import "./styles/App.scss";
import "./styles/Head.scss";
import "./styles/Home.scss";
import "./styles/Contact.scss";
import "./styles/Services.scss";
import "./styles/Footer.scss";
import "./styles/mediaquerry.scss";






function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />


      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
