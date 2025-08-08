import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  return (
    <Router>
      <Navigation />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookacall" element={<Booking />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </Router>
  );
}

export default App;
