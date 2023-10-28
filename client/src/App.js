import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pags/Home";
import Login from "./pags/Login";
import Register from "./pags/Register";
import Footer from "./components/Footer";
import Blog from "./components/Blog";


function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
