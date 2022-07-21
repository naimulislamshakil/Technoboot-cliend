import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="container">
      <h2 className="mt-3 text-center text-success">
        Create an UI Design of a Student Management ERP
      </h2>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;