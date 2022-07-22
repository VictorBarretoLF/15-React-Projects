import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />}></Route>
        <Route path="cocktail/:id" element={<h1>A page</h1>}></Route>
        <Route path="about" element={<h1>About</h1>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
