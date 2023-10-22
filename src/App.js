import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Head.jsx";

import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
import Sess from "./components/Sess.jsx";


import Footer from "./components/Footer.jsx";


import "./styles/App.scss";
import "./styles/Head.scss";
import "./styles/Home.scss";
import "./styles/Contact.scss";
import "./styles/Services.scss";
import "./styles/Sess.scss";

import "./styles/Footer.scss";
import "./styles/mediaquerry.scss";
import Facebookmsj from "./components/Facebookmsj.jsx";






function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sess" element={<Sess />} />


      </Routes>
      <Footer />
      <Facebookmsj />
    </Router>

  );
}

export default App;
