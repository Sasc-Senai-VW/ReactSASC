import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import CadastroEquipamento from "./pages/CadastroEquipamento";
import Configuracoes from "./pages/Configuracoes";
import DashboardFiltro from "./pages/DashboardFiltro";
import Equipamento from "./pages/Equipamento";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Login from "./pages/Login";
import NovoUsuario from "./pages/NovoUsuario";
<<<<<<< HEAD
import Menu from "./components/Menu";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> feature/configuracoes
=======

const rootElement = document.getElementById("root");
createRoot(rootElement!).render(<DashboardFiltro />);
>>>>>>> feature/dashboardFiltro
=======
>>>>>>> feature/equipamentos
=======
import Header from "./components/Header";
>>>>>>> feature/home
=======
import NovaSenha from "./pages/NovaSenha";
>>>>>>> feature/login

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <Menu />
    <BrowserRouter>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      
=======
    <Menu />
>>>>>>> feature/configuracoes
=======
      <Menu />
>>>>>>> feature/dashboardFiltro
=======
      <Header />
      <Menu />
>>>>>>> feature/home
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastroequipamento" element={<CadastroEquipamento />} />
        <Route path="configuracoes" element={<Configuracoes />} />
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
