import "./App.css";
import Navbar from "./page/Home Page/shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home Page/Home";
import About from "./page/About/About";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
