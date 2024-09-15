import logo from './logo.svg';
import './App.css';
import Home from "./pages/home.jsx"
import Drivers from "./pages/Drivers.jsx"
import Hitchers from "./pages/Hitchers.jsx"
import About from "./pages/About.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/hitchers" element={<Hitchers />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
