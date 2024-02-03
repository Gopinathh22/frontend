import "./App.css";
import Home from "./routes/home.js";
import Navbar from "./routes/navbar.js";
import AboutUs from "./routes/about-us.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./routes/footer.js";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
