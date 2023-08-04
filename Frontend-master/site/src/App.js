import Upload from "./components/Upload";
import Enhance from "./components/Enhance";
import Instr from "./components/Instr";
import Footer from "./components/Footer";
import Login_page from "./components/Login_page";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route exact path = "/login" element = {<Login_page/>}></Route>
        <Route exact path = "/" element = {<><Upload /><Instr /><Footer /></>}></Route>
        <Route exact path = "/enhance/:username" element = {<><Enhance /><Instr /><Footer /></>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
