import "./style.css";
import { IoMdSettings } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoMdExit } from "react-icons/io";
import { IoMdDesktop } from "react-icons/io";
import { IoMdStats } from "react-icons/io";
import { IoMdCube } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import logo from "../../assets/img/Design_sem_nome-removebg-preview.png";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";

function Menu() {
<<<<<<< HEAD
  function ChangeColor() {}

  return (
    <>
      <main id="menuSasc">
=======
  return (
    <>
      <main>
>>>>>>> feature/home
        <section className="menu">
          <nav className="menu_lateral">
            <div className="btn_expandir">
              <img className="header_logo" src={logo} alt="" />
              <span className=" visaoGeral">
                {" "}
                <i className="size2"> S A S C</i>{" "}
              </span>
            </div>

            <div className="menu_conteudo">
              <ul>
                <div className="item_menu">
                  <li className="espaco2">
                    <a href="#">
                      <span className="icon size1 visaoGeral">
                        <IoMdCalendar />
                      </span>
                      <span className="txt_link size1">Visão Geral</span>
                    </a>
                  </li>

                  <li className="pagAtual espaco2">
                    <a href="#">
                      <span className="icon size1 IconAtual">
                        <IoMdDesktop />
                      </span>
                      <span className="txt_link size1">Equipamentos</span>
                    </a>
                  </li>

                  <li className="espaco2">
                    <a href="#">
                      <span className="icon size1">
                        <IoMdStats />
                      </span>
                      <span className="txt_link size1">Dashboards</span>
                    </a>
                  </li>

                  <li className="espaco2">
                    <a href="#">
                      <span className="icon size1">
                        <IoMdContact />
                      </span>
                      <span className="txt_link size1">Usuários</span>
                    </a>
                  </li>

                  <li className="espaco2">
                    <a href="#">
                      <span className="icon size1">
                        <IoMdSettings />
                      </span>
                      <span className="txt_link size1">Configurações</span>
                    </a>
                  </li>
                </div>

                <li className="espaco2 btnSair ">
                  <a href="#">
                    <span className="icon size1">
                      <IoMdExit />
                    </span>
                    <span className="txt_link size1">Sair</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </main>
    </>
  );
}
export default Menu;
