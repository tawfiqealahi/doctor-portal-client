import "./App.css";
import Navbar from "./page/Home Page/shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home Page/Home";
import About from "./page/About/About";
import Login from "./page/Login/Login";
import Appointment from "./page/Appointment/Appointment";
function App() {
  return (
    <div  className="px-5">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
