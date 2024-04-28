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
import CheckOutView from "./Components/CheckOutView/CheckOutView.jsx";
function App() {
  return (
    <BrowserRouter> {/* Componente de enrutamiento */}
      <ThemeProvider> {/* Proveedor del tema */}
        <SnackbarProvider maxSnack={3}> {/* Proveedor de notificaciones */}
          <Background /> {/* Componente de fondo */}
          <Routes> {/* Definición de las rutas */}
            <Route path="/" element={<Login />} /> {/* Ruta de inicio de sesión */}
            <Route element={<ProtectedRoutes/>}> {/* Rutas protegidas */}
              <Route path="/checkout" element={<CheckOut />} /> {/* Ruta de historia de pagos */}
              <Route path="/products/:id" element={<ViewProduct />} /> {/* Ruta para ver un producto */}
              <Route path="/checkout/:id" element={<CheckOutView />} /> {/* Ruta para ver el pago */}
              <Route path="/home" element={<Home />} /> {/* Ruta de inicio */}
            </Route>
          </Routes>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
