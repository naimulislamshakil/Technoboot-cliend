import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import AddStudent from "./Component/Home/AddStudent";
import View from "./Component/Home/View";
import Update from "./Component/Home/Update";

function App() {
  return (
    <div className="container">
      <h2 className="mt-3 text-center text-success">
        Create an UI Design of a Student Management ERP
      </h2>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add_student" element={<AddStudent />}></Route>
        <Route path="/view/:id" element={<View />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
