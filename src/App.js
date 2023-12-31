import './App.css';
import Video from './components/Video'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/login' element = {<Login/>}/>
        <Route exact path = '/home' element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
