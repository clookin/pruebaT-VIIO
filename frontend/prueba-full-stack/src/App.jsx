import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
import Background from "./Components/Background/Background.jsx";
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@material-tailwind/react";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
    <SnackbarProvider maxSnack={3}>
      <Background />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </SnackbarProvider>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
