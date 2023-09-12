import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import CadastroEquipamento from "./pages/CadastroEquipamento";
import Configuracoes from "./pages/Configuracoes";
import DashboardFiltro from "./pages/DashboardFiltro";
import Equipamentos from "./pages/Equipamentos";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Login from "./pages/Login";
import NovoUsuario from "./pages/NovoUsuario";
import Menu from "./components/Menu";

const rootElement = document.getElementById("root");
createRoot(rootElement!).render(<DashboardFiltro />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastroequipamento" element={<CadastroEquipamento />} />
        <Route path="configuracoes" element={<Configuracoes />} />
        <Route path="dashboardfiltro" element={<DashboardFiltro />} />
        <Route path="equipamentos" element={<Equipamentos />} />
        <Route path="esqueceusenha" element={<EsqueceuSenha />} />
        <Route path="login" element={<Login />} />
        <Route path="novousuario" element={<NovoUsuario />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
