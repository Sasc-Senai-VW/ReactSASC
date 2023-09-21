import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import DashboardFiltro from "./pages/DashboardFiltro";
import Equipamento from "./pages/Equipamento";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Login from "./pages/Login";
import NovoUsuario from "./pages/NovoUsuario";
import Menu from "./components/Menu";

import NovaSenha from "./pages/NovaSenha";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Menu /> */}
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="dashboardfiltro" element={<DashboardFiltro />} />
        <Route path="equipamento" element={<Equipamento />} />
        <Route path="esqueceusenha" element={<EsqueceuSenha />} />
        <Route path="login" element={<Login />} />
        <Route path="novousuario" element={<NovoUsuario />} />
        <Route path="novasenha" element={<NovaSenha />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
