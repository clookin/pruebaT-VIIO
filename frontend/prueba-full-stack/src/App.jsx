import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
import Background from "./Components/Background/Background.jsx";
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from "@material-tailwind/react";
import ViewProduct from "./Pages/ViewProduct.jsx";
import CheckOut from "./Pages/CheckOut.jsx";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
    <SnackbarProvider maxSnack={3}>
      <Background />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/product" element={<CheckOut />} />
          <Route path="/products/:id" element={<ViewProduct />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </SnackbarProvider>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
