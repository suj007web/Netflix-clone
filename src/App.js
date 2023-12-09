import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.scss';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
