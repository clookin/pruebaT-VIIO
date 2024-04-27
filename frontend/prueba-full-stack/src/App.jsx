import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
import Background from "./Components/Background/Background.jsx";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
