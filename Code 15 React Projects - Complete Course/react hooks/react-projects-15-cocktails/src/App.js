import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import './App.scss'
import SingleCocktail from "./routes/SingleCocktail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />}></Route>
        <Route path="cocktail/:id" element={<SingleCocktail/>}></Route>
        <Route path="about" element={<h1>About</h1>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
